<script setup>
import Avatar from "primevue/avatar";
import ProgressSpinner from "primevue/progressspinner";

import { getUserData } from "../../firebase/firestoreService";

import { ref, onMounted } from "vue";

const isInformationLoading = ref(false);

const avatarUrl = ref("");
const firstName = ref("");
const secondName = ref("");
const country = ref("");
const gitHubLink = ref("");
const telegramLink = ref("");

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
  }
  return userData;
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
  <ProgressSpinner v-if="isInformationLoading" />
  <div class="container" v-else>
    <div>
      <div class="avatar-wrapper">
        <Avatar :image="avatarUrl" size="normal" shape="circle" />
      </div>
      <div class="personal-info">
        <div class="user-name">
          <span class="first-name">{{ firstName }}</span>
          <div class="second-name">{{ secondName }}</div>
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
