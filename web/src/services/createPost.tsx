import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage,user } from "../firebase/config";
import { postProps } from "./types/postProps";

export async function createPost({ idOwner, text, imageUpload}: postProps){


  const imageRef = ref(storage, `${user?.uid}/${imageUpload!.name}`);
  let imageUrl = '';

  if (imageUpload === undefined) return '';

  try {
    const snapshot = await uploadBytes(imageRef, imageUpload!);
    imageUrl = await getDownloadURL(snapshot.ref);
  } catch (e) {
    console.error('Error uploading image: ', e);
  }

  try {
    await addDoc(collection(db, 'posts'), {
      idOwner: idOwner,
      text: text,
      imageUpload: imageUrl,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
    return ''
  }
}
