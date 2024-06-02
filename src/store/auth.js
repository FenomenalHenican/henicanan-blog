import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  //state
  const user = ref(null);

  //action
  const setUser = (newUser) => {
    user.value = newUser;
  };

  const clearUser = () => {
    user.value = null;
    localStorage.removeItem("userTokens");
  };

  return {
    user,
    setUser,
    clearUser,
  };
});
