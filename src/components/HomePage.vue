<script setup>
import "primeicons/primeicons.css";

import InputText from "primevue/inputtext";
import Tag from "primevue/tag";

import RecentTopic from "../UIComponents/RecentTopic.vue";
import LoginModal from "../UIComponents/LoginModal.vue";

import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
import router from "../router";

const route = useRoute();

const inputSearch = ref("");

const navigateTo = (section) => {
  router.push({ name: section });
};

const isActive = (section) => {
  return route.name === section;
};

watchEffect(() => {
  route.name,
    (newValueRoute) => {
      if (!newValueRoute) {
        navigateTo("ListTopic");
      }
    };
});
</script>

<template>
  <div class="container">
    <div class="left-nav">
      <ul class="top-colomn-left-nav">
        <li :class="{ active: isActive('PersonalArea') }">
          <i class="pi pi-home" @click="navigateTo('PersonalArea')" />
        </li>
        <li><i class="pi pi-bell" /></li>
        <li><i class="pi pi-bookmark" /></li>
        <li :class="{ active: isActive('ListTopic') }">
          <i class="pi pi-receipt" @click="navigateTo('ListTopic')" />
        </li>
        <li :class="{ active: isActive('UserSettings') }">
          <i class="pi pi-user-edit" @click="navigateTo('UserSettings')" />
        </li>
        <li><div class="underline-left-nav" /></li>
        <li class="btn-login">
          <LoginModal />
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view />
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

.top-colomn-left-nav li {
  padding: 3px;
  margin-top: 25px;
  border-radius: 6px;
}

.top-colomn-left-nav li i {
  font-size: 28px;
}

.top-colomn-left-nav li i:hover {
  background-color: rgb(199, 199, 199);
  border-radius: 5px;
  padding: 2px;
  transition: 0.2s;
}

.active {
  background-color: rgb(199, 199, 199);
  width: fit-content;
  height: auto;
}

.underline-left-nav {
  border-top: 2px solid rgb(178, 178, 178);
  width: 55%;
  margin-top: 10px;
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
