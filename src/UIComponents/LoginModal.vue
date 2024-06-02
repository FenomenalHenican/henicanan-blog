<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";

import {
  auth,
  provider,
  signInWithPopup as signInWithGoogle,
  signOut,
} from "../firebase";
import { useUserStore } from "../store/auth";

import { ref, computed } from "vue";

const userStore = useUserStore();

const toogleLoginModal = ref(false);

const handleSignInWithGoogle = async () => {
  try {
    const result = await signInWithGoogle(auth, provider);
    const user = result.user;
    userStore.setUser(user);
    console.log("User:", user);
    console.log(user.reloadUserInfo);
    localStorage.setItem(
      "userTokens",
      JSON.stringify({
        accessToken: user.stsTokenManager.accessToken,
        refreshToken: user.stsTokenManager.refreshToken,
        email: user.email,
        userId: user.uid,
      })
    );
    toogleLoginModal.value = false;
  } catch (err) {
    console.log(err);
  }
};

const user = computed(() => useUserStore.user);
</script>

<template>
  <div>
    <div class="btn-login" v-if="!user">
      <i class="pi pi-sign-in" @click="toogleLoginModal = true" />
    </div>
    <div class="user-logout" v-else>
      <Button @click="signOut"></Button>
    </div>
    <Dialog
      v-model:visible="toogleLoginModal"
      modal
      :pt="{
        root: 'border-none',
        mask: {
          style: 'backdrop-filter: blur(2px)',
        },
      }"
    >
      <template #container="{ closeCallback }">
        <div
          class="modal-auth"
          style="border-radius: 14px; background-image: white"
        >
          <div class="close-modal-auth">
            <i class="pi pi-times" @click="closeCallback" />
          </div>
          <div class="wrapper-username-input">
            <label for="username" class="label-input-username">Username</label>
            <InputText id="username" class="input-username" />
          </div>
          <div class="wrapper-password-input">
            <label for="password" class="label-input-password">Password</label>
            <InputText id="password" class="input-password" type="password" />
          </div>
          <div class="wrapper-auth-service">
            <Button class="btn-auth-github"><i class="pi pi-github" /></Button>
            <Button class="btn-auth-google" @click="handleSignInWithGoogle"
              ><i class="pi pi-google"
            /></Button>
          </div>
          <div class="btn-nav">
            <Button label="Sign-In" text class="btn-signin w-40" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<style scoped>
.btn-login i {
  font-size: 22px;
  font-weight: 500;
}

.btn-login i:hover {
  background-color: rgb(199, 199, 199);
  border-radius: 5px;
  padding: 6px;
  transition: 0.2s;
}

.modal-auth {
  display: flex;
  flex-direction: column;
  width: 70vh;
  height: fit-content;
}

.close-modal-auth {
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
}

.close-modal-auth i {
  font-size: 20px;
}

.wrapper-username-input {
  margin-top: 30px;
  margin-left: 40px;
}

.label-input-username {
  font-size: 24px;
}

.input-username {
  border: 2px black solid;
  margin-left: 15px;
}

.wrapper-password-input {
  margin-top: 15px;
  margin-left: 40px;
}

.label-input-password {
  font-size: 24px;
}

.input-password {
  border: 2px black solid;
  margin-left: 20px;
}

.wrapper-auth-service {
  margin-left: 40%;
  margin-top: 20px;
}

.btn-auth-github {
  background-color: rgb(232, 232, 232);
  padding: 7px;
}

.btn-auth-github i {
  font-size: 28px;
}

.btn-auth-google {
  margin-left: 20px;
  background-color: rgb(232, 232, 232);
  padding: 7px;
}

.btn-auth-google i {
  font-size: 28px;
}

.btn-nav {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.btn-signin {
  font-size: 22px;
  background-color: rgb(232, 232, 232);
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 20px;
}
</style>
