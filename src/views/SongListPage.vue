<template>
	<ion-page>
		<HeaderToolBar @emitSearch="handleSearchQuery" :isHeaderHidden="isHeaderHidden" />
		<ion-content :fullscreen="true" @ionScroll="onContentScroll($event)" :scroll-events="true">
			<ion-list v-if="filterSongs?.length > 0">
				<ion-item
					v-for="(song, i) in filterSongs"
					:key="'song_' + i"
					:href="'/song/' + song.id + '/lyrics'"
				>
					<ion-label class="fade-in-left-animation song-label"
						><p>{{ song.title }}</p>
						<span v-if="song.artist" class="song-artist">{{ song.artist }}</span>
					</ion-label>
					<ion-button
						v-if="song.chords"
						slot="end"
						size="small"
						fill="outline"
						color="warning"
						:href="'/song/' + song.id + '/chords'"
						>chords
					</ion-button>
				</ion-item>
			</ion-list>
			<div v-else class="no-result">
				<div class="no-result-content" v-if="searchQuery">
					<ion-icon :icon="cloudOfflineOutline" size="large"></ion-icon>
					<h1>No Result Found</h1>
					<span>We couldn't find any title, lyrics or artist matching your search</span>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// import axios from 'axios';
import {
	onIonViewDidEnter,
	// onIonViewWillLeave
	IonButton,
	IonPage,
	IonContent,
	IonItem,
	IonLabel,
	IonList,
	IonIcon,
} from '@ionic/vue';
import { cloudOfflineOutline } from 'ionicons/icons';

import HeaderToolBar from '@/components/HeaderToolBar.vue';
// import 'HeaderToolBar' from ''
// import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

const isHeaderHidden = ref(false);

const onContentScroll = (ev: CustomEvent) => {
	// console.log('test');
	if (ev.detail.scrollTop > 30) {
		// Scrolling down, hide the header
		isHeaderHidden.value = true;
	} else {
		// Scrolling up, show the header
		isHeaderHidden.value = false;
	}
};

// const db = ref<any>(SQLiteDBConnection);
// const sqlite = ref<any>(SQLiteConnection);
// const songs = ref<any>();
// onIonViewDidEnter(async () => {
// 	sqlite.value = new SQLiteConnection(CapacitorSQLite);
// 	const ret = await sqlite.value.checkConnectionsConsistency();
// 	const isConn = (await sqlite.value.isConnection('db_songlist', false)).result;

// 	if (ret.result && isConn) {
// 		db.value = await sqlite.value?.retrieveConnection('db_songlist', false);
// 	} else {
// 		db.value = await sqlite.value?.createConnection(
// 			'db_songlist',
// 			false,
// 			'no-encryption',
// 			1,
// 			false
// 		);
// 	}

// 	loadData();
// });

// onIonViewWillLeave(async () => {
// 	await sqlite.value?.closeConnection('db_songlist', false);
// });

// const loadData = async () => {
// 	await db.value?.open();
// 	const respSelect = await db.value?.query('SELECT * FROM songs');
// 	console.log(`res: ${JSON.stringify(respSelect)}`);
// 	await db.value?.close();

// 	songs.value = respSelect?.values;
// };

const songs = ref<any>();
const searchQuery = ref('');
const handleSearchQuery = (data: any) => {
	searchQuery.value = data.searchQuery;
};
const filterSongs = computed(() => {
	return songs.value
		?.filter(
			(song: any) =>
				song.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				song.lyrics.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				song.category.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				song.artist?.toLowerCase().includes(searchQuery.value.toLowerCase())
		)
		.sort((a: any, b: any) => a.title.localeCompare(b.title));
});
onIonViewDidEnter(async () => {
	const data = await fetch('/songs.json');
	const __songs = await data.json();
	songs.value = __songs.songs;
});
</script>
