<template>
	<div id="container">
		<ion-searchbar show-clear-button="focus"></ion-searchbar>

		<ion-list :inset="true">
			<ion-item>
				<ion-label>As the Deer</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Awit ng Paghahangad</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Panalangin sa pagiging Bukas Palad</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Anima Christi</ion-label>
			</ion-item>
			<ion-item>
				<ion-label>As the Deer</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Awit ng Paghahangad</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Panalangin sa pagiging Bukas Palad</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Anima Christi</ion-label>
			</ion-item>
			<ion-item>
				<ion-label>As the Deer</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Awit ng Paghahangad</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Panalangin sa pagiging Bukas Palad</ion-label>
			</ion-item>

			<ion-item>
				<ion-label>Anima Christi</ion-label>
			</ion-item>
		</ion-list>
	</div>
</template>

<script setup lang="ts">
import { IonLabel, IonList, IonItem, IonSearchbar } from '@ionic/vue';
defineProps({
	name: String,
});
</script>

<style scoped>
ion-card-title {
	--color: #ececec;
}
ion-card {
	--background: linear-gradient(
		162deg,
		rgba(150, 159, 183, 0.6) 20%,
		rgba(191, 201, 230, 0.8) 100%
	);
}
ion-searchbar {
	--background: #f0f2f2;
	--color: #777;
	--box-shadow: none;
	--border-radius: 30px;
}
</style>
