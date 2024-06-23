import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../components/HomePage.vue"),
      children: [
        {
          path: "",
          redirect: { name: "ListTopic" },
        },
        {
          path: "/list-topic",
          name: "ListTopic",
          component: () => import("../components/list-topics/ListTopic.vue"),
          children: [
            {
              path: "/create-topic",
              name: "createtopic",
              component: () =>
                import("../components/create-topic/CreateTopic.vue"),
            },
          ],
        },
        {
          path: "/personal-area",
          name: "PersonalArea",
          component: () =>
            import("../components/personal-page/PersonalPage.vue"),
        },
        {
          path: "/user-settings",
          name: "UserSettings",
          component: () =>
            import("../components/user-settings/UserSettings.vue"),
        },
      ],
    },
  ],
});

export default router;
