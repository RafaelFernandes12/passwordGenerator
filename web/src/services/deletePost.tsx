import { deleteDoc, doc } from "firebase/firestore";
import {deleteObject, ref } from "firebase/storage";
import {db} from "../firebase/config";

interface deletePostProps{
    imageUpload: any
    document: any
}

export async function deletePost({imageUpload,document}:deletePostProps){
    

    try{
        const docRef = doc(db,'posts',document)
        await deleteDoc(docRef);
        await deleteObject(imageUpload)
        console.log('feito')
    }catch(e){
        console.log(e)
    }
}