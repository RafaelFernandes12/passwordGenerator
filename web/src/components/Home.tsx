import { Avatar } from "@mui/material";
import { useEffect,useState } from "react";
import { auth } from "../firebase/config";
import { getPosts } from "../services/getMethods/getPosts";
import { postProps } from "../services/types/postProps";
import { Sidebar } from "./Sidebar"


export function Home(){
    
    const user = auth.currentUser

    const [posts, setPosts] = useState<postProps[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const posts = await getPosts();
            setPosts(posts);
        }
        fetchPosts();
    }, []);


    return (
        <div className="bg-black text-white flex">
            <Sidebar />
            <div className="h-screen w-2/5 m-auto ">
                {posts.map((post,i) => (
                    <div key={i} 
                        className='flex content-center items-center flex-col w-full h-96'
                    >
                        <div className="block mr-96">
                            <Avatar src={user?.photoURL!}/>
                        </div>
                        <img src={post.imageUpload}
                        className='w-2/3 h-postH flex content-center tems-center'
                        />
                        <h2 className="text-center">{post.text}</h2>
                    </div>
                ))}
            </div>
            <div>
                oiasdiuawg
            </div>
        </div>
    )
}