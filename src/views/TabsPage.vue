<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="tab1" href="/tabs/songs">
					<ion-icon aria-hidden="true" :icon="musicalNote" />
					<ion-label>Songs</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab2" href="/tabs/category">
					<ion-icon aria-hidden="true" :icon="grid" />
					<ion-label>Category</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab3" href="/tabs/chords">
					<ion-icon aria-hidden="true" :icon="playCircleOutline" />
					<ion-label>Chords</ion-label>
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
import { musicalNote, grid, playCircleOutline } from 'ionicons/icons';
</script>

<style>
ion-content {
	--background: #f7f9f9;
}
ion-header ion-toolbar {
	--background: #6c63ac;
	--color: #fff;
}

/* ion-header ion-title {
	--color: #fff;
	text-shadow: 1px 1px 5px #444;
	text-transform: uppercase;
} */
ion-tab-button {
	font-size: 12px;
	--background-focused: #6a679e;
	--color-selected: #6a679e;
	--color: #888;

	ion-icon {
		font-size: 20px;
	}
}

/* HEADER DEFAULTS */
.header-transition {
	transition: transform 0.3s ease-out;
}

.ion-header-hidden {
	transform: translateY(-100%);
}

/* SEARCH BAR DEFAULTS */
.searchbar {
	--background: #fff;
	--color: #777;
	--box-shadow: none;
	--border-radius: 30px;
}

.search-bar-persist {
	transform: translateY(-100%);
}

/* LIST DEFAULTS */
.list-header {
	font-size: 1rem;
	text-transform: uppercase;
	color: #888;
	font-weight: bold;
}
.song-label {
	padding: 5px 1rem;
	text-transform: uppercase;
}
.song-label p {
	font-size: 1.01rem;
	color: #818181;
}
.song-artist {
	font-size: 10px;
	color: #a5a5a5;
	text-transform: capitalize;
}

.fade-in-left-animation {
	animation: fade-in-left 0.4s ease forwards;
}

@keyframes fade-in-left {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}
ion-item {
	--color: #555;
}

ion-note {
	--color: #aaa;
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

/* MODALS */
ion-modal {
	--box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	background: rgba(0, 0, 0, 0.7);
}

ion-modal::part(backdrop) {
	background: rgb(0, 0, 0);
	opacity: 1;
}

ion-modal ion-toolbar {
	--background: rgb(175, 24, 97);
	--color: white;
}
</style>
