<template>
	<ion-page>
		<ion-content>
			<div class="container">
				<div class="screen">
					<div class="screen__content">
						<form class="login">
							<img src="/public/bcbplogo.png" alt="Ionic logo" loading="lazy" />
							<div class="login__field">
								<i class="login__icon fas fa-lock"></i>
								<input
									type="password"
									class="login__input"
									placeholder="Access Code"
									v-model="actvcode"
								/>
							</div>
							<button class="button login__submit" @click="verifyCode">
								Verify
								<ion-icon :icon="keyOutline" style="font-size: 20px; margin-left: 6px"></ion-icon>
							</button>
						</form>
					</div>
					<div class="screen__background">
						<span class="screen__background__shape screen__background__shape4"></span>
						<span class="screen__background__shape screen__background__shape3"></span>
						<span class="screen__background__shape screen__background__shape2"></span>
						<span class="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>
			<ion-toast
				:is-open="isOpen"
				message="Invalid Activation Code, Try again"
				:duration="5000"
				@didDismiss="setOpen(false)"
			></ion-toast>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonIcon, IonPage, IonToast } from '@ionic/vue';
import { keyOutline } from 'ionicons/icons';
import { Storage } from '@ionic/storage';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = new Storage();
store.create();
const actvcode = ref('');

const router = useRouter();

const isOpen = ref(false);
const setOpen = (state: boolean) => {
	isOpen.value = state;
};
// const activated = store.get('activated');
const verifyCode = async () => {
	// console.log(actvcode.value);
	if (actvcode.value == '486512') {
		await store.set('bcbp-app-activated', true);
		// console.log(await store.get('activated'));
		router.push('/');
	} else {
		setOpen(true);
	}
};

onMounted(async () => {
	const is_active = await store.get('bcbp-app-activated');
	if (is_active) {
		router.push('/');
	}
});
</script>

<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	/* padding: 1rem; */
	overflow: hidden;
}

.screen {
	background: linear-gradient(90deg, #5d54a4, #7c78b8);
	position: relative;
	height: 100%;
	width: 100%;
	/* box-shadow: 0px 0px 24px #5c5696; */
}

.screen__content {
	z-index: 1;
	position: relative;
	height: 100%;
}

.screen__background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	-webkit-clip-path: inset(0 0 0 0);
	clip-path: inset(0 0 0 0);
}

.screen__background__shape {
	transform: rotate(45deg);
	position: absolute;
}

.screen__background__shape1 {
	height: 520px;
	width: 520px;
	background: #fafafa;
	top: -50px;
	right: 120px;
	border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
	height: 220px;
	width: 220px;
	background: #6c63ac;
	top: -172px;
	right: 0;
	border-radius: 32px;
}

.screen__background__shape3 {
	height: 540px;
	width: 190px;
	background: linear-gradient(270deg, #5d54a4, #6a679e);
	top: -24px;
	right: 0;
	border-radius: 32px;
}

.screen__background__shape4 {
	height: 400px;
	width: 200px;
	background: #7e7bb9;
	top: 420px;
	right: 50px;
	border-radius: 60px;
}

.login {
	width: 400px;
	padding: 30px;
	padding-top: 55px;
	margin-left: 50px;
}
.login img {
	margin-top: 20px;
	height: 150px;
}
.login__field {
	padding-top: 70px;
	position: relative;
}

.login__icon {
	position: absolute;
	top: 30px;
	color: #7875b5;
}

.login__input {
	border: none;
	border-bottom: 2px solid #d1d1d4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 70%;
	font-size: 2rem;
	text-align: center;
	transition: 0.2s;
	letter-spacing: 20px;
}
.login__input::placeholder {
	letter-spacing: normal;
	color: #aaa;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
	outline: none;
	border-bottom-color: #7875b5;
}

.login__submit {
	background: #fff;
	font-size: 16px;
	margin-top: 60px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #d4d3e8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 240px;
	color: #4c489d;
	box-shadow: 0px 2px 2px #5c5696;
	cursor: pointer;
	transition: 0.2s;
	letter-spacing: 2px;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
	border-color: #6a679e;
	outline: none;
}

.button__icon {
	font-size: 24px;
	margin-left: auto;
	color: #7875b5;
}
</style>
