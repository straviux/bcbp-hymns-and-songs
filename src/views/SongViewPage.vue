<template>
	<ion-page>
		<ion-header class="ion-no-border">
			<ion-toolbar class="header-transition" :class="{ 'ion-header-hidden': isHeaderHidden }">
				<ion-title v-if="song.length">{{ song[0].title.toUpperCase() }}</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content
			v-if="song.length"
			id="container"
			:fullscreen="true"
			@ionScroll="onContentScroll($event)"
			:scroll-events="true"
		>
			<div
				v-html="songType == 'lyrics' ? song[0].lyrics : song[0].chords"
				class="lyrics-container ql-editor animate__animated animate__fadeIn"
				:style="`font-size:${defaultFontSize}%`"
			></div>
		</ion-content>

		<ion-fab slot="fixed" vertical="bottom" horizontal="end">
			<ion-fab-button class="custom-fab-btn" size="small">
				<ion-icon :icon="chevronUpOutline"></ion-icon>
			</ion-fab-button>
			<ion-fab-list side="top">
				<ion-fab-button @click.stop="decreaseFont">
					<ion-icon :icon="removeOutline"></ion-icon>
				</ion-fab-button>
				<ion-fab-button @click.stop="increaseFont($event)">
					<ion-icon :icon="add"></ion-icon>
				</ion-fab-button>
				<ion-fab-button color="danger" @click="$router.go(-1)">
					<ion-icon :icon="arrowBackOutline"></ion-icon>
				</ion-fab-button>
			</ion-fab-list>
		</ion-fab>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonHeader,
	IonToolbar,
	IonPage,
	IonTitle,
	IonFab,
	IonFabButton,
	IonFabList,
	IonIcon,
	IonContent,
	onIonViewDidEnter,
} from '@ionic/vue';
import { add, removeOutline, arrowBackOutline, chevronUpOutline } from 'ionicons/icons';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
// import axios from 'axios';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const db = ref<any>(SQLiteDBConnection);
const sqlite = ref<any>(SQLiteConnection);

const route = useRoute();
const songId = route.params?.songid;
const songType = route.params?.type;
// console.log(songType);
const song = ref<any>([]);
onIonViewDidEnter(async () => {
	sqlite.value = new SQLiteConnection(CapacitorSQLite);
	const ret = await sqlite.value.checkConnectionsConsistency();
	const isConn = (await sqlite.value.isConnection('db_songlist', false)).result;

	if (ret.result && isConn) {
		db.value = await sqlite.value?.retrieveConnection('db_songlist', false);
	} else {
		db.value = await sqlite.value?.createConnection(
			'db_songlist',
			false,
			'no-encryption',
			1,
			false
		);
	}

	loadData();

	// const data = await fetch('/songs.json');
	// const __songs = await data.json();
	// song.value = __songs.songs?.filter((findSong: any) => {
	// 	// console.log(findSong?.id);
	// 	return findSong.id == songId;
	// });
	// console.log(song.value);
});

const loadData = async () => {
	await db.value?.open();
	const respSelect = await db.value?.query('SELECT * FROM songs WHERE id=' + songId);
	// console.log(`res: ${JSON.stringify(respSelect)}`);
	await db.value?.close();

	song.value = respSelect?.values;
};

const defaultFontSize = ref<number>(100);
const increaseFont = (ev: CustomEvent) => {
	ev.stopImmediatePropagation();

	defaultFontSize.value += 20;
};
const decreaseFont = (ev: CustomEvent) => {
	ev.stopImmediatePropagation();
	if (defaultFontSize.value > 100) {
		defaultFontSize.value -= 20;
	}
};

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
</script>

<style scoped>
.custom-fab-btn {
	--background: #6c63ac;
	--color: #fff;
}
ion-fab-button {
	--border-radius: 15px;
	--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
	--color: black;
}
.lyrics-container {
	width: fit-content;
	height: fit-content;
	margin: 2rem auto;
	padding: 1rem;
	color: #555555;
	/* line-height: 1.98rem; */
	transition: font-size 0.5s;
}

.header-transition {
	transition: transform 0.3s ease-out;
}

.ion-header-hidden {
	transform: translateY(-100%);
}

.ql-editor {
	min-height: 100% !important;
	overflow: hidden;
}
</style>
