<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div id="container">
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-input label="Category:" v-model="category"></ion-input>
					</ion-buttons>
					<ion-buttons slot="end">
						<ion-button fill="outline" color="success"
							>Save<ion-icon slot="end" :icon="saveOutline"></ion-icon
						></ion-button>
					</ion-buttons>
				</ion-toolbar>

				<ion-list>
					<ion-item>
						<ion-label>Pokémon Yellow</ion-label>
					</ion-item>
					<ion-item>
						<ion-label>Mega Man X</ion-label>
					</ion-item>
					<ion-item>
						<ion-label>The Legend of Zelda</ion-label>
					</ion-item>
					<ion-item>
						<ion-label>Pac-Man</ion-label>
					</ion-item>
					<ion-item>
						<ion-label>Super Mario World</ion-label>
					</ion-item>
				</ion-list>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonPage,
	IonContent,
	IonToolbar,
	IonButtons,
	IonButton,
	IonInput,
	IonIcon,
	IonList,
	IonItem,
	IonLabel,
} from '@ionic/vue';
import { ref } from 'vue';
import { saveOutline } from 'ionicons/icons';
const category = ref();
</script>

<style scoped>
#container {
	text-align: center;
	position: absolute;
	left: 0;
	right: 0;
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;
	color: #8c8c8c;
	margin: 0;
}

#container a {
	text-decoration: none;
}
</style>
