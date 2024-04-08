<template>
	<ion-header class="ion-no-border">
		<ion-toolbar class="header-transition" :class="{ 'ion-header-hidden': isHeaderHidden }">
			<img
				src="/public/bcbp-seeklogo.svg"
				height="40"
				slot="start"
				style="margin-left: 14px; margin-right: -10px"
			/>
			<ion-title>BCBP Hymns & Songs</ion-title>
			<ion-buttons slot="primary">
				<ion-button @click="openPopover($event)">
					<ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
				</ion-button>
				<ion-popover :is-open="popoverOpen" :event="ev" @didDismiss="popoverOpen = false">
					<MenuList />
				</ion-popover>
			</ion-buttons>
		</ion-toolbar>
		<ion-toolbar class="header-transition" :class="{ 'search-bar-persist': isHeaderHidden }">
			<ion-searchbar
				show-clear-button="focus"
				class="searchbar"
				id="searchbar"
				@keyup="sendDataToParent"
			></ion-searchbar>
		</ion-toolbar>
	</ion-header>
</template>

<script setup lang="ts">
import MenuList from '@/components/MenuList.vue';
import { defineEmits, defineProps, ref } from 'vue';
import {
	// onIonViewWillLeave,
	IonPopover,
	IonButton,
	IonButtons,
	IonToolbar,
	IonTitle,
	IonHeader,
	IonSearchbar,
	IonIcon,
} from '@ionic/vue';
import { ellipsisVertical } from 'ionicons/icons';
defineProps({
	isHeaderHidden: { type: Boolean, default: false },
});
const emits = defineEmits(['emitSearch']);

// Define the method to emit the custom event
const sendDataToParent = () => {
	// Emit the custom event with the data you want to send
	const searchValue = (document.querySelector('#searchbar') as HTMLInputElement | null)?.value;
	// if (event) {
	emits('emitSearch', { searchQuery: searchValue });
	// }
};
const popoverOpen = ref(false);
const ev = ref();
const openPopover = (e: Event) => {
	ev.value = e;
	popoverOpen.value = true;
};
</script>
<style scoped></style>
