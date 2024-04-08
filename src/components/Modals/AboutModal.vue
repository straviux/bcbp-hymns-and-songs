<template>
	<ion-content class="about-modal">
		<ion-toolbar>
			<ion-title>About</ion-title>
			<ion-buttons slot="end">
				<ion-button color="light" @click="cancel"><ion-icon :icon="close"></ion-icon></ion-button>
			</ion-buttons>
		</ion-toolbar>
		<div class="ion-padding" style="color: #555; display: flex; flex-direction: column; gap: 8px">
			<img
				src="/public/bcbplogo.png"
				alt="bcbp logo"
				height="160"
				width="160"
				style="margin: auto"
			/>
			<div style="margin: auto">
				<h4>BCBP Hyms & Songs</h4>
				<div style="font-size: 12px; color: #777; margin-top: 10px"><span>Version 1.1</span></div>
				<div style="font-size: 12px; color: #777; margin-top: 10px">
					Last library update: <span>04/08/2024</span>
				</div>
			</div>
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
import { close } from 'ionicons/icons';
// import { ref } from 'vue';
// const name = ref();

const cancel = () => modalController.dismiss(null, 'cancel');
// const confirm = () => modalController.dismiss(name.value, 'confirm');
</script>

<style>
ion-modal.about-modal::part(content) {
	--height: 420px;
	--border-radius: 12px;
	--width: 320px;
}
.about-content {
	width: 100%;
	color: #777;
}
</style>
