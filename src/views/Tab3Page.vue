<template>
	<ion-page>
		<ion-content :fullscreen="true" class="header-background">
			<ExploreContainer name="Tab 3 page" />
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
