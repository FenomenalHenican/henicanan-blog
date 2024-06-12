<script setup>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";

import SelectCountry from "./SelectCountry.vue";

import { saveUserData, getUserData } from "../../firebase/firestoreService";
import { getUserIdFromLocalStorage } from "../../store/getLocalStorage";
import { uploadFile } from "../../firebase/firebaseStorage";
import { onMounted, ref } from "vue";

const userId = getUserIdFromLocalStorage();

const bool = false;

const avatarUrl = ref("");
const inputFirstName = ref("");
const inputSecondName = ref("");
const inputTelegram = ref("");
const inputGithub = ref("");
const textAreaDescription = ref("");
const selectedCountry = ref(null);

const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      avatarUrl.value = await uploadFile(file, userId);
    } catch (err) {
      console.log(err);
    }
  }
};

const updateSelectedCountry = (newValue) => {
  selectedCountry.value = newValue;
};

const saveUserSettings = async () => {
  const userData = {
    firstName: inputFirstName.value,
    secondName: inputSecondName.value,
    telegram: inputTelegram.value,
    gitHub: inputGithub.value,
    discription: textAreaDescription.value,
    country: selectedCountry.value ? selectedCountry.value.name : "",
    userId: userId,
    avatarUrl: avatarUrl.value,
  };
  if (typeof userData === "object") {
    try {
      await saveUserData(userId, userData);
      console.log("Data sucсessfully save");
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("userData is a not object");
  }
};
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
        <div class="wrapper-select-country">
          <span class="title-select-country">Country</span>
          <SelectCountry
            class="select-country"
            @update:selectedCountry="updateSelectedCountry"
          />
        </div>
      </div>
    </div>
    <div class="upload-file">
      <input class="input-img-avatar" type="file" @change="handleFileChange" />
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
      <div class="wrapper-discriptions">
        <span class="discription-title"> About me</span>
        <Textarea
          v-model="textAreaDescription"
          class="text-area-discription"
          rows="5"
          cols="30"
        />
      </div>
    </div>
    <Button label="Save data" class="btn-sava-data" @click="saveUserSettings" />
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  background-color: #e2e2e2;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}

.user-data {
  display: flex;
  margin-top: 40px;
  margin-left: 70px;
}

.avatar-user {
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.upload-file {
  margin-left: 110px;
}

.wrapper-input-name {
  margin-left: 40px;
}

.wrapper-input-first-name {
  width: fit-content;
  display: flex;
  flex-direction: column;
}

.title-input-first-name,
.title-input-second-name,
.title-select-country {
  font-weight: 600;
}

.input-first-name,
.input-second-name {
  height: 30px;
  width: 300px;
  margin-top: 10px;
}

.wrapper-select-country {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.select-country {
  margin-top: 10px;
}

.wrapper-input-second-name {
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.personal-data {
  margin-top: 40px;
}

.wrapper-input-telegram {
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
}

.input-telegram-title,
.input-github-title {
  font-weight: 600;
}

.input-telegram,
.input-github {
  margin-top: 10px;
  padding-left: 10px;
  height: 40px;
  width: 400px;
}

.wrapper-input-github {
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 20px;
}

.wrapper-discriptions {
  margin-left: 50px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}

.discription-title {
  font-weight: 600;
}

.text-area-discription {
  width: 80%;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 20px;
}

.btn-save-data {
  margin-top: 30px;
}
</style>
