<script setup>
import Avatar from "primevue/avatar";
import Tag from "primevue/tag";

import "primeicons/primeicons.css";
</script>

<template>
  <div class="topic-card">
    <div class="header-card">
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        size="normal"
        shape="circle"
      />
      <div class="username">Artyom Henicanan</div>
      <div class="date-post">4 days ago</div>
    </div>
    <span class="title-card"
      >Your Portfolio is stopping you from geting that job</span
    >
    <span class="description-card"
      >An intense way to learn about the process and practice your designs
      skills — My 1st hackathon Hackathons have been on my mind since I heard it
      was a good way to gain experience as a junior UX designer. As my
      portfolio...</span
    >
    <div class="footer-card">
      <div class="left-footer-card">
        <Tag class="tag" severity="secondary" value="Portfolio" />
        <span class="reading-time">3 min read</span>
        <span class="recomendation">Selected for you</span>
      </div>
      <div class="rigth-footer-card">
        <ul>
          <li><i class="pi pi-bookmark" /></li>
          <li class="options"><i class="pi pi-ellipsis-h" /></li>
        </ul>
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

.topic-card {
  margin-top: 30px;
  border-top: 2px solid rgb(178, 178, 178);
  border-bottom: 2px solid rgb(178, 178, 178);
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.header-card {
  display: flex;
  align-items: center;
}

.username {
  margin-left: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 17px;
}

.date-post {
  margin-left: 10px;
  color: rgb(116, 115, 115);
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.title-card {
  margin-top: 10px;
  font-size: 22px;
  font-weight: 500;
}

.description-card {
  margin-top: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.footer-card {
  display: flex;
  margin-top: 15px;
}

.left-footer-card {
  display: flex;
  align-items: center;
}

.tag {
  font-size: 15px;
}

.reading-time {
  margin-left: 10px;
  color: rgb(116, 115, 115);
  font-size: 16px;
  font-weight: 250;
}

.recomendation {
  margin-left: 10px;
  color: rgb(116, 115, 115);
  font-size: 16px;
  font-weight: 350;
}

.rigth-footer-card {
  margin-left: auto;
}

.rigth-footer-card ul {
  display: flex;
}

.rigth-footer-card li {
  list-style: none;
}

.options {
  margin-left: 13px;
}
</style>
