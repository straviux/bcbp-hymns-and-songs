<template>
	<ion-content
		><ion-list lines="full"
			><ion-item button @click="openModal('settings')"
				><ion-button
					fill="clear"
					expand="block"
					style="color: #777; text-transform: capitalize; font-size: 14px; padding: 10px 0"
				>
					<ion-icon slot="start" :icon="settingsOutline"></ion-icon>
					Settings
				</ion-button></ion-item
			><ion-item button @click="openModal('update')" v-if="checkUpdate"
				><ion-button
					fill="clear"
					expand="block"
					style="color: #777; text-transform: capitalize; font-size: 14px; padding: 10px 0"
				>
					<ion-icon slot="start" :icon="cloudDownloadOutline"></ion-icon>
					Download Update </ion-button
				><ion-badge color="success" v-if="checkUpdate">new</ion-badge></ion-item
			>
			<ion-item v-else-if="!isUpdated">
				<ion-spinner name="lines-sharp-small"></ion-spinner
				><ion-label style="color: #777; font-size: 14px; padding: 10px 0"
					>Checking for updates</ion-label
				></ion-item
			>
			<ion-item v-else>
				<ion-button
					fill="clear"
					expand="block"
					style="color: #777; text-transform: capitalize; font-size: 14px; padding: 10px 0"
					><ion-icon slot="start" :icon="checkmarkCircleOutline"></ion-icon>Library is up to
					date</ion-button
				></ion-item
			>

			<ion-item lines="none" button @click="openModal('about')"
				><ion-button
					fill="clear"
					expand="block"
					style="color: #777; text-transform: capitalize; font-size: 14px; padding: 10px 0"
				>
					<ion-icon slot="start" :icon="informationCircleOutline"></ion-icon>
					About
				</ion-button></ion-item
			></ion-list
		>
	</ion-content>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Storage } from '@ionic/storage';
import {
	IonContent,
	IonList,
	IonItem,
	IonButton,
	IonBadge,
	IonIcon,
	IonSpinner,
	IonLabel,
	modalController,
	toastController,
} from '@ionic/vue';
import {
	cloudDownloadOutline,
	informationCircleOutline,
	settingsOutline,
	checkmarkCircleOutline,
} from 'ionicons/icons';
import SettingsModal from '@/components/Modals/SettingsModal.vue';
import UpdateLibraryModal from '@/components/Modals/UpdateLibraryModal.vue';
import AboutModal from '@/components/Modals/AboutModal.vue';
// import { ref } from 'vue';
import axios from 'axios';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

const db = ref<any>(SQLiteDBConnection);
const sqlite = ref<any>(SQLiteConnection);
const checkUpdate = ref(false);
const isUpdated = ref(false);
const hasUpdate = async () => {
	const store = new Storage();
	await store.create();
	const lastLibraryUpdate = await store.get('last-library-update');

	await axios.get('api/last-update').then((res) => {
		console.log('test');
		if (lastLibraryUpdate != res.data.last_update) {
			checkUpdate.value = true;
		} else {
			isUpdated.value = true;
		}
		return;
	});
};
hasUpdate();
// const message = ref('This modal example uses the modalController to present and dismiss modals.');
const openModal = async (modalName: any) => {
	const aboutModalComponent = {
		component: AboutModal,
		cssClass: 'about-modal',
	};
	const updateLibraryModalComponent = {
		component: UpdateLibraryModal,
		cssClass: 'update-library-modal',
	};
	const settingsModalComponent = {
		component: SettingsModal,
		cssClass: 'settings-modal',
	};

	const aboutModal = await modalController.create(aboutModalComponent);
	const updateLibraryModal = await modalController.create(updateLibraryModalComponent);
	const settingsModal = await modalController.create(settingsModalComponent);

	if (modalName == 'settings') settingsModal.present();
	if (modalName == 'update') {
		updateLibraryModal.present().then(async () => {
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

		const loadData = async () => {
			// console.log(db.value);
			const store = new Storage();
			await store.create();
			const lastLibraryUpdate = await store.get('last-library-update');
			let toastMsg = 'Library is already up to date';
			await db.value?.open();
			const respSelect = await db.value?.query('SELECT COUNT(*) as song_count FROM songs');
			console.log(`res: ${JSON.stringify(respSelect.values[0].song_count)}`);
			// console.log(respSelect.values);
			// await db.value?.close();
			// await sqlite.value?.closeConnection('db_songlist', false);

			await axios.get('/api/songs').then((res: any) => {
				const apiSongs = res.data.data;
				const apiLastUpdate = res.data.last_update;
				// db.value?.open();
				if (
					lastLibraryUpdate != apiLastUpdate ||
					parseInt(respSelect.values[0].song_count) !== parseInt(apiSongs.length)
				) {
					let setLastUpdate = null;
					db.value?.query('DELETE FROM songs');
					// db.value?.close();
					apiSongs.forEach((song: any) => {
						try {
							setLastUpdate = apiLastUpdate;
							db.value?.query(
								`INSERT INTO songs (id,title,lyrics,chords,artist,category) values (?,?,?,?,?,?)`,
								[song.id, song.title, song.lyrics, song.chords, song.artist, song.category]
							);
							toastMsg = 'Library has been updated';
						} catch (error) {
							setLastUpdate = null;
							// toastMsg = 'Library has been updated';
							alert(error);
						}
					});
					store.set('last-library-update', setLastUpdate);
					isUpdated.value = true;
					db.value?.close();
				}
				// console.log(...apiSongs);
			});

			updateLibraryModal.dismiss();
			const toast = await toastController.create({
				message: toastMsg,
				duration: 3000,
				cssClass: 'custom-toast',
				position: 'bottom',
			});
			toast.present();
			toast.onDidDismiss().then((res) => {
				// console.log(res);
				if (res.role) {
					window.location.reload();
				}
			});
		};
	}

	if (modalName == 'about') aboutModal.present();
};
</script>
<style>
ion-toast.custom-toast {
	--background: #6a679e;
	--width: 300px;
	--box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.6s);
	--color: #f1f1f1;
	font-size: 14px;
}
</style>
