import { defineStore } from "pinia";
import { ref } from "vue";
import {
  auth,
  provider,
  signInWithPopup as signInWithGoogle,
  signOut,
  signInWithEmailAndPassword,
} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);

  const setUser = (newUser) => {
    user.value = newUser;
  };

  const clearUser = () => {
    user.value = null;
    localStorage.removeItem("userTokens");
  };

  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  const hadleSignInWithEmailAndPassword = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUser(user);
      localStorage.setItem(
        "userTokens",
        JSON.stringify({
          accessToken: user.stsTokenManager.accessToken,
          refreshToken: user.stsTokenManager.refreshToken,
          email: user.email,
          userId: user.uid,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogleAction = async () => {
    try {
      const result = await signInWithGoogle(auth, provider);
      const user = result.user;
      setUser(user);
      localStorage.setItem(
        "userTokens",
        JSON.stringify({
          accessToken: user.stsTokenManager.accessToken,
          refreshToken: user.stsTokenManager.refreshToken,
          email: user.email,
          userId: user.uid,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const signOutAction = async () => {
    try {
      await signOut(auth);
      clearUser();
    } catch (err) {
      console.log(err);
    }
  };
  return {
    user,
    setUser,
    clearUser,
    signInWithGoogleAction,
    registerWithEmailAndPassword,
    hadleSignInWithEmailAndPassword,
    signOutAction,
  };
});
