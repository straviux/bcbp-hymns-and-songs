<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="tab1" href="/manage/list">
					<ion-icon aria-hidden="true" :icon="musicalNote" />
					<ion-label>Songs</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab2" href="/manage/category">
					<ion-icon aria-hidden="true" :icon="grid" />
					<ion-label>Category</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonLabel,
	IonIcon,
	IonPage,
	IonRouterOutlet,
} from '@ionic/vue';
import { musicalNote, grid } from 'ionicons/icons';
</script>
