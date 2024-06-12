import { storage } from "./firebase";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const uploadFile = async (file, userId) => {
  if (!file) throw new Error("No file provided");

  const storageReference = storageRef(
    storage,
    `avatars/${userId}/${file.name}`
  );
  await uploadBytes(storageReference, file);
  const downloadURL = await getDownloadURL(storageReference);
  return downloadURL;
};

export { uploadFile };
