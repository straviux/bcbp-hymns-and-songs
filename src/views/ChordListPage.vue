<template>
	<ion-page>
		<!-- <ion-header class="ion-no-border">
			<ion-toolbar class="header-transition" :class="{ 'ion-header-hidden': isHeaderHidden }">
				<img
					src="/public/bcbp-seeklogo.svg"
					height="40"
					slot="start"
					style="margin-left: 14px; margin-right: -10px"
				/>
				<ion-title>BCBP Hymns & Songs</ion-title>
				<ion-buttons slot="primary">
					<ion-button id="open-chord-menu">
						<ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
					</ion-button>
					<ion-popover trigger="open-chord-menu" trigger-action="click">
						<ion-content
							><ion-list lines="full"
								><ion-item button
									><ion-button
										fill="clear"
										expand="block"
										style="
											color: #777;
											text-transform: capitalize;
											font-size: 14px;
											padding: 10px 0;
										"
									>
										<ion-icon slot="start" :icon="settingsOutline"></ion-icon>
										Settings
									</ion-button></ion-item
								><ion-item button
									><ion-button
										fill="clear"
										expand="block"
										style="
											color: #777;
											text-transform: capitalize;
											font-size: 14px;
											padding: 10px 0;
										"
									>
										<ion-icon slot="start" :icon="cloudDownloadOutline"></ion-icon>
										Update Library
									</ion-button></ion-item
								><ion-item lines="none" button
									><ion-button
										fill="clear"
										expand="block"
										style="
											color: #777;
											text-transform: capitalize;
											font-size: 14px;
											padding: 10px 0;
										"
									>
										<ion-icon slot="start" :icon="informationCircleOutline"></ion-icon>
										About
									</ion-button></ion-item
								></ion-list
							></ion-content
						>
					</ion-popover>
				</ion-buttons>
			</ion-toolbar>
			<ion-toolbar class="header-transition" :class="{ 'search-bar-persist': isHeaderHidden }">
				<ion-searchbar
					show-clear-button="focus"
					class="searchbar"
					v-model="searchQuery"
				></ion-searchbar>
			</ion-toolbar>
		</ion-header> -->
		<HeaderToolBar @emitSearch="handleSearchQuery" :isHeaderHidden="isHeaderHidden" />
		<ion-content :fullscreen="true" @ionScroll="onContentScroll($event)" :scroll-events="true">
			<ion-list v-if="filterSongs?.length > 0">
				<ion-item
					v-for="(song, i) in filterSongs"
					:key="'song_' + i"
					:href="'/song/' + song.id + '/chords'"
				>
					<ion-label class="fade-in-left-animation song-label"
						><p>{{ song.title }}</p>
						<span v-if="song.artist" class="song-artist">{{ song.artist }}</span>
					</ion-label>
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
import HeaderToolBar from '@/components/HeaderToolBar.vue';
// import axios from 'axios';
import {
	onIonViewDidEnter,
	onIonViewWillLeave,
	IonPage,
	IonContent,
	IonItem,
	IonLabel,
	IonList,
	IonIcon,
} from '@ionic/vue';
import { cloudOfflineOutline } from 'ionicons/icons';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

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

const db = ref<any>(SQLiteDBConnection);
const sqlite = ref<any>(SQLiteConnection);

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
});

onIonViewWillLeave(async () => {
	await sqlite.value?.closeConnection('db_songlist', false);
});

const loadData = async () => {
	await db.value?.open();
	const respSelect = await db.value?.query('SELECT * FROM songs');
	// console.log(`res: ${JSON.stringify(respSelect)}`);
	await db.value?.close();
	console.log('data loaded');
	songs.value = respSelect?.values.filter((song: any) => {
		return song.chords;
	});
};

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
				song.chords?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				song.category.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
				song.artist?.toLowerCase().includes(searchQuery.value.toLowerCase())
		)
		.sort((a: any, b: any) => a.title.localeCompare(b.title));
});
// onIonViewDidEnter(async () => {
// 	const song_data = await fetch('/songs.json');
// 	const __songs = await song_data.json();
// 	// songs.value = __songs.songs;
// 	songs.value = __songs.songs.filter((song: any) => {
// 		return song.chords;
// 	});
// 	// console.log(songs.value);
// });
// const { data } = await axios.get('../../database/songs.json');
// songs.value = data;
</script>
