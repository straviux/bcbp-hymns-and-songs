<template>
	<ion-content class="settings-modal">
		<ion-toolbar>
			<ion-icon
				:icon="settingsOutline"
				style="margin-left: 10px; margin-right: -10px; font-size: 22px"
				slot="start"
			></ion-icon>
			<ion-title>Settings</ion-title>
			<ion-buttons slot="end">
				<ion-button color="light" @click="cancel"><ion-icon :icon="close"></ion-icon></ion-button>
			</ion-buttons>
		</ion-toolbar>
		<div class="ion-padding">
			<div class="settings-content">test</div>
		</div>
	</ion-content>
</template>

<script lang="ts" setup>
import {
	IonButtons,
	IonButton,
	IonContent,
	IonToolbar,
	IonTitle,
	IonIcon,
	modalController,
} from '@ionic/vue';
import { close, settingsOutline } from 'ionicons/icons';
// import { ref } from 'vue';
// const name = ref();

const cancel = () => modalController.dismiss(null, 'cancel');
// const confirm = () => modalController.dismiss(name.value, 'confirm');
</script>

<style>
ion-modal.settings-modal::part(content) {
	--height: 80%;
	--border-radius: 12px;
	--width: 320px;
}
.settings-content {
	/* background: #a2a; */
	width: 100%;
	color: #777;
}

.settings-content ion-list {
	width: 100%;
}
</style>
