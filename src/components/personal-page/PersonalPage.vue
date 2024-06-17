<script setup>
import ProgressSpinner from "primevue/progressspinner";

import { getUserData, saveUserData } from "../../firebase/firestoreService";
import { getUserIdFromLocalStorage } from "../../store/getLocalStorage";

import { ref, onMounted } from "vue";

const isInformationLoading = ref(false);

const userId = getUserIdFromLocalStorage();

const avatarUrl = ref("");
const firstName = ref("");
const secondName = ref("");
const country = ref("");
const gitHubLink = ref("");
const telegramLink = ref("");
const inputStatus = ref("");

const getUserSettings = async () => {
  const userData = await getUserData();
  console.log(userData);
  if (userData) {
    avatarUrl.value = userData.avatarUrl;
    firstName.value = userData.firstName;
    secondName.value = userData.secondName;
    country.value = userData.country;
    gitHubLink.value = userData.gitHub;
    telegramLink.value = userData.telegram;
    inputStatus.value = userData.status;
  }
  return userData;
};

const saveUserStatus = async () => {
  const userData = {
    status: inputStatus.value,
  };
  console.log(userData);
  if (userData) {
    try {
      await saveUserData(userId, userData);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("User data is not correctly");
  }
};

onMounted(async () => {
  isInformationLoading.value = true;
  try {
    await getUserSettings();
  } finally {
    isInformationLoading.value = false;
  }
});
</script>
<template>
  <ProgressSpinner v-if="isInformationLoading" class="text-slate-300" />
  <div class="container" v-else>
    <div class="flex">
      <div class="avatar-wrapper">
        <img class="avatar" :src="avatarUrl" />
      </div>
      <div class="personal-info ml-7">
        <div class="user-name flex text-3xl mt-2">
          <span class="first-name">{{ firstName }}</span>
          <span class="second-name ml-2">{{ secondName }}</span>
        </div>
        <div class="select-status flex">
          <input
            type="text"
            class="input-status"
            v-model="inputStatus"
            @keyup.enter="saveUserStatus"
          />
        </div>
        <div class="country">{{ country }}</div>
        <div class="add-info">
          <div class="github-link">{{ gitHubLink }}</div>
          <div class="telegram-link">{{ telegramLink }}</div>
        </div>
      </div>
    </div>
    <div class="topic-list"></div>
  </div>
</template>

<style scoped>
.avatar {
  margin-top: 10px;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  border-bottom: 2px solid transparent;
  border-radius: 4px;
}

.input-status {
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  font-size: 12px;
}

.input-status:focus {
  border-bottom: 2px solid #bab9b9;
}
</style>
