<template>
	<ion-page>
		<ion-header class="ion-no-border">
			<ion-toolbar class="header-transition" :class="{ 'ion-header-hidden': isHeaderHidden }">
				<ion-title>BCBP Hymns & Songs</ion-title>
			</ion-toolbar>
			<ion-toolbar class="header-transition" :class="{ 'search-bar-persist': isHeaderHidden }">
				<ion-searchbar
					show-clear-button="focus"
					class="searchbar"
					v-model="searchQuery"
				></ion-searchbar>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" @ionScroll="onContentScroll($event)" :scroll-events="true">
			<ion-list v-if="filterSongs?.length > 0" lines="full">
				<ion-item v-for="(song, i) in filterSongs" :key="'song_' + i">
					<ion-label class="fade-animation song-label"
						><p>{{ song.title }}</p>
						<span v-if="song.artist" class="song-artist">{{ song.artist }}</span>
					</ion-label>
					<!-- <ion-note slot="end" v-if="song.artist">{{ song.artist }}</ion-note> -->
					<ion-button
						slot="end"
						size="small"
						color="dark"
						fill="outline"
						:href="'manage/update-song/' + song.id"
						><ion-icon :icon="createOutline" size="small"></ion-icon> edit
					</ion-button>
					<ion-button
						slot="end"
						size="small"
						fill="outline"
						color="warning"
						:href="'manage/update-song-chord/' + song.id"
						><ion-icon :icon="add" size="small"></ion-icon> chords
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
		<ion-fab slot="fixed" vertical="bottom" horizontal="end">
			<ion-fab-button color="primary" href="/manage/new-song">
				<ion-icon :icon="add" style="color: white"></ion-icon>
			</ion-fab-button>
		</ion-fab>
	</ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';
import {
	onIonViewDidEnter,
	// onIonViewWillLeave,
	IonPage,
	IonContent,
	IonItem,
	IonLabel,
	IonToolbar,
	IonTitle,
	IonHeader,
	IonList,
	IonSearchbar,
	IonIcon,
	IonButton,
	IonFabButton,
	IonFab,
} from '@ionic/vue';
import { cloudOfflineOutline, add, createOutline } from 'ionicons/icons';
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

const songs = ref<any>();
const searchQuery = ref('');
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
	const response = await axios.get('/api/songs');
	console.log(response.data);
	songs.value = response.data.data;
	// console.log(songs.value);
});
// const { data } = await axios.get('../../database/songs.json');
// songs.value = data;
</script>
<style scoped>
ion-item {
	--color: #555;
}
ion-note {
	--color: #aaa;
}
ion-fab {
	margin-bottom: var(--ion-safe-area-bottom, 0);
}
.searchbar {
	--background: #fff;
	--color: #777;
	--box-shadow: none;
	--border-radius: 30px;
}

.header-transition {
	transition: transform 0.3s ease-out;
}

.search-bar-persist {
	transform: translateY(-100%);
}
.song-artist {
	font-size: 10px;
	color: #aaa;
	text-transform: capitalize;
}
.no-result {
	/* display: flex; */
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
}
.no-result .no-result-content {
	background-color: #f6f6f6;
	width: 80%;
	margin: auto;
	border-radius: 5px;
	padding: 1rem;
	color: #777;
}
.ion-header-hidden {
	transform: translateY(-100%);
}

.fade-animation {
	animation: fade-in 0.4s ease forwards;
}

@keyframes fade-in {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}
</style>
