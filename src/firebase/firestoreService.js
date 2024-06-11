import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getUserIdFromLocalStorage } from "../store/getLocalStorage";

export const saveUserData = async (userId, userData) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, userData);
    console.log("User data succesfully saved: ", userData);
  } catch (err) {
    console.log(err);
  }
};

export const getUserData = async () => {
  try {
    const userId = getUserIdFromLocalStorage();
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log("No such document");
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
