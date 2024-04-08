<template>
	<ion-content>
		<div class="ion-padding">
			<div class="update-library-content">
				<!-- <ion-icon :icon="cloudDownloadOutline" size="large"></ion-icon> -->
				<div class="indicator">
					<div>Updating library...</div>
				</div>
			</div>
		</div>
		<ion-progress-bar type="indeterminate" color="success"></ion-progress-bar>
	</ion-content>
</template>

<script lang="ts" setup>
import { IonContent, IonProgressBar, modalController } from '@ionic/vue';

// test: close modal after 3 seconds
setTimeout(() => {
	modalController.dismiss();
}, 3000);
// const cancel = () => modalController.dismiss(null, 'cancel');
// const confirm = () => modalController.dismiss(name.value, 'confirm');
</script>
<style>
/* ion-modal.update-library-modal::part {} */
ion-modal.update-library-modal::part(content) {
	--height: 55px;
	--border-radius: 3px;
	--width: 300px;
}
.update-library-content {
	display: flex;
	align-items: center;
	justify-content: center;
	color: #777;
}
/* .update-library-content .indicator {
	display: flex;
} */
</style>
