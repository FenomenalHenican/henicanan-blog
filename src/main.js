import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import { createPinia } from "pinia";
import { useUserStore } from "./store/auth";
import { auth } from "./firebase";

import "./assets/style.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const userStore = useUserStore();

auth.onAuthStateChanged((user) => {
  if (user) {
    userStore.setUser(user);
  } else {
    userStore.clearUser();
  }
});

app.use(router);
app.use(PrimeVue);

app.mount("#app");
