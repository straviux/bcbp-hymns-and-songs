import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './axios';
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import 'animate.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';
import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';
// import axios from 'axios';

customElements.define('jeep-sqlite', JeepSqlite);
console.log(`after customElements.define`);


window.addEventListener('DOMContentLoaded', async () => {
    try {
      const platform = Capacitor.getPlatform();
      const sqlite = new SQLiteConnection(CapacitorSQLite)

      // WEB SPECIFIC FUNCTIONALITY
      if(platform === "web") {
          // Create the 'jeep-sqlite' Stencil component
          const jeepSqliteEl = document.createElement('jeep-sqlite');
          document.body.appendChild(jeepSqliteEl);
          await customElements.whenDefined('jeep-sqlite');
          // console.log(`after customElements.whenDefined`)

          // Initialize the Web store
          await sqlite.initWebStore();
          // console.log(`after initWebStore`)
        } 

      // database creation with standard SQLite statements
      const ret = await sqlite.checkConnectionsConsistency();
        const isConn = (await sqlite.isConnection("db_songlist", false)).result;
        let db:any = null;
        if (ret.result && isConn) {
            db = await sqlite.retrieveConnection("db_songlist",false);
        } else {
            db = await sqlite.createConnection("db_songlist", false, "no-encryption", 1, false);
        }

        // manipulate database
        await db.open();
        // console.log(`db: db_vite opened`);
        const queryCreateSongsTable = `
        CREATE TABLE IF NOT EXISTS songs (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        lyrics TEXT NOT NULL,
        chords TEXT,
        artist TEXT,
        category TEXT
        );
        `

        const queryCreateAccessCodeTable = `
        CREATE TABLE IF NOT EXISTS access_code (
        id INTEGER PRIMARY KEY NOT NULL,
        access_code TEXT NOT NULL);
        `

        const queryCreateCategoriesTable = `
        CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY NOT NULL,
        category TEXT NOT NULL
        );
        `
        const respCST = await db.execute(queryCreateSongsTable);
        const respCACT = await db.execute(queryCreateAccessCodeTable);
        const respCCT = await db.execute(queryCreateCategoriesTable);
        console.log(`res: ${JSON.stringify(respCST)}`);
        console.log(`res: ${JSON.stringify(respCCT)}`);
        console.log(`res: ${JSON.stringify(respCACT)}`);


        
        // database INSERT STATEMENTS
        // const respInsert = await db.query(('INSERT INTO songs (id,title,lyrics,artist,category_id) values (?,?,?,?,?)'),[Date.now(),'title'+Date.now(),'hello world','arcee',1]);
        // console.log(`res: ${JSON.stringify(respInsert)}`);

        const respSelect = await db.query(('SELECT * FROM songs'));
        if(!respSelect.values?.length) {
          // get values
          const data = await fetch('/songs.json');
          await data.json().then((res)=>{
            res.songs.forEach((song: any) => {
              // console.log(song)
              try {
                db.query(('INSERT INTO songs (id,title,lyrics,chords,artist,category) values (?,?,?,?,?,?)'),
              [song.id,song.title,song.lyrics,song.chords||'',song.artist||'',song.category||''])
              } catch(e) {
                console.log((e as any).message)
              }
            },);
          });
          

          console.log('get values')
        } else {
          console.log(`res: ${JSON.stringify(respSelect.values.length)}`);
        }
        

        await sqlite.closeConnection("db_songlist",false);

      // ionic app initialization
      const app = createApp(App)
                  .use(IonicVue)
                  .use(router);
      router.isReady().then(() => {
        app.mount('#app');
      });
    } catch(e) {
      console.log((e as any).message)
    }
})