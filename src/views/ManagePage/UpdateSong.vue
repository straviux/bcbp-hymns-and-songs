<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div id="container">
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-input label="Title:" v-model="title"></ion-input>
					</ion-buttons>
					<ion-buttons slot="end">
						<ion-button fill="solid" class="custom-btn" size="large" @click="saveToFile"
							>Save<ion-icon slot="end" :icon="saveOutline"></ion-icon
						></ion-button>
					</ion-buttons>
				</ion-toolbar>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-input label="Artist:" v-model="artist"></ion-input>
					</ion-buttons>
					<ion-buttons slot="end">
						<ion-item>
							<ion-select v-model="category" label="Category" placeholder="">
								<ion-select-option value="worship-and-praise">Worship/Praise</ion-select-option>
								<ion-select-option value="advent">Advent</ion-select-option>
								<ion-select-option value="liturgical">Liturgical</ion-select-option>
								<ion-select-option value="marian">Marian</ion-select-option>
								<ion-select-option value="gathering">Gathering</ion-select-option>
								<ion-select-option value="bereavement">Bereavement</ion-select-option>
								<ion-select-option value="lent-and-easter">Lent & Easter</ion-select-option>
								<ion-select-option value="others">Others</ion-select-option>
							</ion-select>
						</ion-item>
					</ion-buttons>
				</ion-toolbar>

				<QuillEditor
					:toolbar="toolbarOptions"
					style="height: 100vh"
					content-type="html"
					v-model:content="lyrics"
				/>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import {
	IonPage,
	IonContent,
	IonItem,
	IonSelect,
	IonSelectOption,
	IonToolbar,
	IonButtons,
	IonButton,
	IonInput,
	IonIcon,
	loadingController,
	toastController,
	onIonViewDidEnter,
} from '@ionic/vue';
import { ref } from 'vue';
import { saveOutline } from 'ionicons/icons';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useRoute } from 'vue-router';
import axios from 'axios';

const toolbarOptions = ref([
	[{ size: ['small', false, 'large', 'huge'] }],
	// [{ header: [1, 2, 3, 4, 5, 6, false] }],
	[{ align: [] }],
	['bold', 'italic', 'underline'],
	['blockquote', 'code-block'],
	[{ indent: '-1' }, { indent: '+1' }],
	[{ color: [] }, { background: [] }],
	['clean'],
]);

const route = useRoute();
const songId = route.params?.songid;
const song = ref<any>([]);
const lyrics = ref<any>();
const title = ref<any>();
const artist = ref<any>();
const category = ref<any>();
onIonViewDidEnter(async () => {
	const { data } = await axios.get('/api/songs/' + songId);
	console.log(data.data);
	song.value = data.data;
	title.value = song.value.title;
	category.value = song.value.category;
	artist.value = song.value.artist;
	const element = document.getElementsByClassName('ql-editor');
	element[0].innerHTML = song.value.lyrics;
});

const saveToFile = async () => {
	// const songData = JSON.stringify({
	// 	id: songId,
	// 	title: title.value,
	// 	lyrics: lyrics.value,
	// 	artist: artist.value,
	// 	category: category.value,
	// });
	try {
		const loading = await loadingController.create({
			message: 'Saving data...',
			duration: 3000,
		});

		loading.present();
		const response = await axios.patch('/api/songs/' + songId, {
			// content: songData,
			title: title.value,
			lyrics: lyrics.value,
			artist: artist.value,
			category: category.value,
		});
		const toast = await toastController.create({
			message: response.data.message,
			duration: 1600,
			position: 'middle',
		});

		if (await loading.dismiss()) {
			toast.present();
		}
	} catch (error) {
		console.error(error);
	}
};
</script>

<style scoped>
.custom-btn {
	text-transform: capitalize;
	--background: #1ecf8b;
	--padding-left: 10px;
	--border-radius: 15px;
	--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}
</style>
