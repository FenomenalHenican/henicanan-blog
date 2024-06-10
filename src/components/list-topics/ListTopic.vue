<script setup>
import Button from "primevue/button";
import Message from "primevue/message";
import SelectButton from "primevue/selectbutton";

import Topic from "../../UIComponents/Topic.vue";

import "primeicons/primeicons.css";

import { ref } from "vue";

const valueOfNavCatalog = ref("Recommended");
const optionsNavCatalog = ref(["Following", "Recommended"]);
</script>

<template>
  <div class="add-topic">
    <div class="wrapper-btn-add-topic">
      <Button
        icon="pi pi-plus"
        severity="secondary"
        rounded
        aria-label="Bookmark"
        class="btn-add-topic"
      />
      <span class="add-topic-title">Click to create a discussion topic</span>
    </div>
    <Message severity="secondary" class="add-topic-warning"
      >Click on the plus icon to create a discussion topic. After filling out
      the fields and sending them for moderation, you will receive a response in
      your personal account. Users will be able to reply to you and discuss your
      topic.</Message
    >
  </div>
  <div class="nav-catalog">
    <SelectButton v-model="valueOfNavCatalog" :options="optionsNavCatalog" />
  </div>
  <div class="topic-list">
    <Topic />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.add-topic {
  display: flex;
  flex-direction: column;
}

.wrapper-btn-add-topic {
  display: flex;
  align-items: center;
}

.btn-add-topic {
  width: fit-content;
  height: fit-content;
}

.add-topic-title {
  margin-left: 10px;
  font-size: 16px;
}

.add-topic-warning {
  margin-top: 20px;
  font-size: 18px;
  font-family: serif;
}

.nav-catalog {
  margin-top: 25px;
}
</style>
