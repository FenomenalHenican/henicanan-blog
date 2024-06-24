import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getUserIdFromLocalStorage } from "../store/getLocalStorage";

const removeEmptyFields = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter((_, v) => v != null && v !== "")
  );
};

const saveUserData = async (userId, userData) => {
  try {
    const cleanedUserData = removeEmptyFields(userData);
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, cleanedUserData, { merge: true });
    console.log("User data succesfully saved: ", userData);
  } catch (err) {
    console.log(err);
  }
};

const getUserData = async () => {
  try {
    const userId = getUserIdFromLocalStorage();
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const setTopic = async (topicData) => {
  try {
    const cleanedTopicData = removeEmptyFields(topicData);
    const topicRef = doc(
      db,
      "topics",
      topicData.userId + "_" + new Date().getTime()
    );
    await setDoc(topicRef, cleanedTopicData);
    console.log("Topic succesfully added", topicData);
  } catch (err) {
    console.log(err);
  }
};

const getTopic = async (topicData) => {
  if (getTopic) {
    try {
      const topicRef = doc(
        db,
        "topics",
        topicData.userId + "_" + new Date().getTime()
      );
      const userSnap = await getDoc(topicRef);

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
  } else {
    console.log("Data is defineded");
  }
};

export { getUserData, saveUserData, setTopic, getTopic };
