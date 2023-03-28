import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { postProps } from "../types/postProps";



export async function getPosts(): Promise<postProps[]>{

    const posts: postProps[] = []
    try{
        const docRef = await getDocs(collection(db,'posts'))
        docRef.forEach((doc) => {
            const post = {...doc.data() as postProps, id: doc.id}
            posts.push(post)
        })
        console.log(posts)
    }catch(e){
        console.log(e)
    }
    return posts
}
