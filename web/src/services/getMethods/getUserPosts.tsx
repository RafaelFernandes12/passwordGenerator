import { collection, getDocs,query, where } from "firebase/firestore"
import { db,auth } from "../../firebase/config"
import { postProps } from "../types/postProps";



export async function getUserPosts(): Promise<postProps[]>{

    const user = auth.currentUser

    const posts: postProps[] = []
    try{
        const q = query(collection(db, "posts"), where(`idOwner`, "==", `${user?.uid}`));
        console.log(q)
        const docRef = await getDocs(q)
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
