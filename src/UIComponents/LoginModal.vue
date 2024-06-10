<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";

import { useUserStore } from "../store/auth";

import { ref, computed } from "vue";

const userStore = useUserStore();

const tooggleLoginModal = ref(false);
const tooggleRegistrForm = ref(false);

const login = ref("");
const password = ref("");

const handleSignInWithGoogle = async () => {
  await userStore.signInWithGoogleAction();
  tooggleLoginModal.value = false;
};

const handleRegister = async () => {
  try {
    await userStore.registerWithEmailAndPassword(login.value, password.value);
    tooggleRegistrForm.value = false;
  } catch (err) {
    console.log(err);
  }
};

const handleSignIn = async () => {
  try {
    await userStore.hadleSignInWithEmailAndPassword(
      login.value,
      password.value
    );
    tooggleLoginModal.value = false;
  } catch (err) {
    console.log(err);
  }
};

const handleSignOut = async () => {
  await userStore.signOutAction();
};

const user = computed(() => userStore.user);
</script>

<template>
  <div>
    <div class="btn-login" v-if="!user">
      <i class="pi pi-sign-in" @click="tooggleLoginModal = true" />
    </div>
    <div class="user-logout" v-else>
      <Button @click="handleSignOut"> <i class="pi pi-times" /></Button>
    </div>
    <Dialog
      v-model:visible="tooggleLoginModal"
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
            <InputText id="username" class="input-username" v-model="login" />
          </div>
          <div class="wrapper-password-input">
            <label for="password" class="label-input-password">Password</label>
            <InputText
              id="password"
              class="input-password"
              type="password"
              v-model="password"
            />
          </div>
          <div class="wrapper-auth-service">
            <Button class="btn-auth-github"><i class="pi pi-github" /></Button>
            <Button class="btn-auth-google" @click="handleSignInWithGoogle"
              ><i class="pi pi-google"
            /></Button>
          </div>
          <div class="btn-nav">
            <Button
              label="Sign-In"
              text
              class="btn-signin w-40"
              @click="handleSignIn"
            />
          </div>
          <div class="registration-wrapper mb-5 mt-6 ml-4">
            <span class="registration-title" @click="tooggleRegistrForm = true"
              >Still not registered? Go ahead and register</span
            >
            <div class="registration-form" v-if="tooggleRegistrForm">
              <div class="flex">
                <label for="label-regist-input-username">Username</label>
                <InputText
                  id="label-registr-input-username"
                  placeholder="Enter username"
                  class="registr-input-username ml-3"
                  v-model="login"
                />
              </div>
              <div>
                <label for="label-regist-input-password">Password</label>
                <InputText
                  id="label-registr-input-password"
                  placeholder="Enter password"
                  class="registr-input-password ml-4"
                  v-model="password"
                />
              </div>
              <Button
                label="Registr"
                class="btn-registr"
                @click="handleRegister"
              />
            </div>
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

.registration-form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.registr-input-username {
  border: 2px solid black;
  max-width: 30%;
  padding-left: 10px;
}

.registr-input-password {
  border: 2px solid black;
  max-width: 30%;
  padding-left: 10px;
  margin-top: 10px;
}

.btn-registr {
  margin-top: 20px;
  margin-left: 10%;
  width: 20vh;
  background-color: rgb(232, 232, 232);
}
</style>
