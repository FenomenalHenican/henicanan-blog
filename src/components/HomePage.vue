<script setup>
import "primeicons/primeicons.css";

import InputText from "primevue/inputtext";
import Tag from "primevue/tag";

import ListTopic from "./ListTopics/ListTopic.vue";
import RecentTopic from "../UIComponents/RecentTopic.vue";
import LoginModal from "../UIComponents/LoginModal.vue";

import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const inputSearch = ref("");
</script>

<template>
  <div class="container">
    <div class="left-nav">
      <ul class="top-colomn-left-nav">
        <li><i class="pi pi-home" /></li>
        <li><i class="pi pi-bell" /></li>
        <li><i class="pi pi-bookmark" /></li>
        <li><i class="pi pi-receipt" /></li>
        <li><div class="underline-left-nav" /></li>
        <li class="btn-login mt-9">
          <LoginModal />
        </li>
      </ul>
    </div>
    <div class="content">
      <ListTopic />
    </div>
    <div class="rigth-nav">
      <InputText
        type="text"
        class="input-search"
        placeholder="Input search"
        v-model="inputSearch"
      />
      <div class="wrapper-recent-topic">
        <span class="recent-title">Latest added topics</span>
        <div class="recent-topic">
          <RecentTopic />
          <RecentTopic class="recent" />
          <RecentTopic class="recent" />
        </div>
      </div>
      <div class="recommended-topic">
        <span class="recommended-topic-title">Recommended Topic</span>
        <div class="tag-group">
          <div class="fist-group">
            <Tag severity="secondary" class="tag" value="Secondary"></Tag>
            <Tag severity="secondary" class="tag" value="Secondary"></Tag>
            <Tag severity="secondary" class="tag" value="Secondary"></Tag>
          </div>
          <div class="fist-group">
            <Tag severity="secondary" class="tag" value="Secondary"></Tag>
            <Tag severity="secondary" class="tag" value="Secondary"></Tag>
            <Tag severity="secondary" class="tag" value="Secondary"></Tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
}

.left-nav {
  height: 100vh;
  width: 14vh;
  border-right: 2px solid rgb(178, 178, 178);
}

.top-colomn-left-nav {
  margin-left: 20px;
  list-style: none;
  padding-top: 25vh;
}

.top-colomn-left-nav li i {
  font-size: 25px;
  margin-top: 30px;
}

.top-colomn-left-nav li i:hover {
  background-color: rgb(199, 199, 199);
  border-radius: 5px;
  padding: 6px;
  transition: 0.2s;
}

.underline-left-nav {
  border-top: 2px solid rgb(178, 178, 178);
  width: 50%;
  margin-top: 40px;
}

.btn-auth {
  margin-top: 20%;
}

.content {
  margin-top: 20px;
  margin-left: 10vh;
  width: 200vh;
}

.rigth-nav {
  margin-left: 4vh;
  border-left: 2px solid rgb(178, 178, 178);
  padding-left: 30px;
  height: 100%;
}

.input-search {
  padding-left: 10px;
  height: 30px;
  margin-top: 30vh;
  border: 2px solid rgb(178, 178, 178);
}

.wrapper-recent-topic {
  margin-top: 20px;
}

.recent-title {
  margin-left: 5px;
  font-weight: 400;
  font-size: 20px;
}

.recent-topic {
  border-top: 2px solid rgb(178, 178, 178);
  margin-top: 10px;
}

.recommended-topic {
  margin-top: 20px;
  font-weight: 500;
  font-size: 20px;
}

.tag-group {
  margin-top: 10px;
}

.tag {
  margin-right: 10px;
}

.btn-login {
  font-size: 20px;
}
</style>
