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
			><ion-item button @click="openModal('update')"
				><ion-button
					fill="clear"
					expand="block"
					style="color: #777; text-transform: capitalize; font-size: 14px; padding: 10px 0"
				>
					<ion-icon slot="start" :icon="cloudDownloadOutline"></ion-icon>
					Update Library
				</ion-button></ion-item
			><ion-item lines="none" button @click="openModal('about')"
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
import { IonContent, IonList, IonItem, IonButton, IonIcon, modalController } from '@ionic/vue';
import { cloudDownloadOutline, informationCircleOutline, settingsOutline } from 'ionicons/icons';
import SettingsModal from '@/components/Modals/SettingsModal.vue';
import UpdateLibraryModal from '@/components/Modals/UpdateLibraryModal.vue';
import AboutModal from '@/components/Modals/AboutModal.vue';
// import { ref } from 'vue';

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
	if (modalName == 'update') updateLibraryModal.present();
	if (modalName == 'about') aboutModal.present();
};
</script>
<style></style>
