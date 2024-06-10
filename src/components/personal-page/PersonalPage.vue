<script setup>
import InputText from "primevue/inputtext";

import { ref } from "vue";

const bool = false;
const avatarUrl =
  "https://static-images.vnncdn.net/files/publish/2023/9/10/real-madrid-danh-cap-ngoc-quy-cua-pep-guardiola-775.jpg";

const inputFirstName = ref("");
const inputSecondName = ref("");
const inputTelegram = ref("");
</script>
<template>
  <div class="container">
    <div class="user-data">
      <div
        class="avatar-user"
        :style="{ backgroundImage: `url(${avatarUrl})` }"
      />
      <div class="wrapper-input-name">
        <div class="wrapper-input-first-name">
          <span class="title-input-first-name">FIRST NAME</span>
          <InputText
            class="input-first-name"
            type="text"
            v-model="inputFirstName"
          />
        </div>
        <div class="wrapper-input-second-name">
          <span class="title-input-second-name">SECOND NAME</span>
          <InputText
            class="input-second-name"
            type="text"
            v-model="inputSecondName"
          />
        </div>
      </div>
    </div>
    <div class="integration-service" v-if="bool">
      <span class="integration-title">User is autorizated with</span>
      <div class="service-title">Google</div>
    </div>
    <div class="personal-data">
      <div class="wrapper-input-telegram">
        <span class="input-telegram-title">Telegram link</span>
        <InputText
          class="input-telegram"
          v-model="inputTelegram"
          placeholder="@henicanan"
        />
      </div>
      <div class="wrapper-input-github">
        <span class="input-github-title">GitHub link</span>
        <InputText
          class="input-github"
          v-model="inputGithub"
          placeholder="@https://github.com/FenomenalHenican"
        />
      </div>
    </div>
  </div>
</template>
