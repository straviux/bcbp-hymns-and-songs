<template>
	<ion-page>
		<HeaderToolBar @emitSearch="handleSearchQuery" :isHeaderHidden="isHeaderHidden" />
		<ion-content :fullscreen="true" @ionScroll="onContentScroll($event)" :scroll-events="true">
			<div v-if="filteredCategory?.length > 0">
				<div v-for="(category, i) in filteredCategory" :key="'category_' + i">
					<ion-list v-if="category.songs.length > 0" lines="inset">
						<ion-list-header>
							<ion-label class="list-header">{{ category.name }}</ion-label>
						</ion-list-header>
						<ion-item
							v-for="(song, i) in category.songs"
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
				</div>
			</div>
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
	IonButton,
	IonListHeader,
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

const songs = ref<any>();
const categories = ref<any>();
const searchQuery = ref('');
const handleSearchQuery = (data: any) => {
	// Update the lastKeyPressed property with the received data
	// console.log(data);
	searchQuery.value = data.searchQuery;
};
const filterArray = (array: any, term: string) => {
	return array?.map((item: any) => ({
		...item,
		songs: item.songs
			.filter((song: any) => {
				return (
					song.title.toLowerCase().includes(term) ||
					song.lyrics.toLowerCase().includes(term) ||
					song.artist?.toLowerCase().includes(term)
				);
			})
			.sort((a: any, b: any) => a.title.localeCompare(b.title)),
	}));
};
const filteredCategory = computed(() => {
	return filterArray(categories.value, searchQuery.value.toLowerCase());
});

// onIonViewDidEnter(async () => {
// 	// GET SONG LIST
// 	// const song_data = await fetch('/songs.json');
// 	// const __songs = await song_data.json();
// 	// songs.value = __songs.songs;
// });

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

	songs.value = respSelect?.values;
	// GET CATEGORY LIST
	const category_data = await fetch('/category.json');
	const __categories = await category_data.json();
	// console.log(__categories);
	categories.value = __categories.categories;
	// categories.value = result.data.categories;
	// console.log(result.data);
	categories.value.forEach((category: any) => {
		category.songs = [];
		for (let index = 0; index < songs.value.length; index++) {
			const song = songs.value[index];
			if (song.category == category.category) {
				category.songs.push(songs.value[index]);
			}
		}
	});
};

// const { data } = await axios.get('../../database/songs.json');
// songs.value = data;
</script>
