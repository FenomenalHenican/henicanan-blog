import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";

const storage = getStorage();

export const uploadImageToStorage = async (file) => {
  try {
    const storageRef = ref(storage, "userAvatars/" + file.name);
    const snapshot = await uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (err) {
    console.log(err);
  }
};
