import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase/config'
import {getPosts} from '../services/getMethods/getPosts'
import {getUserPosts} from '../services/getMethods/getUserPosts'
import { useEffect, useState } from "react";
import {createPost} from '../services/createPost'
import { postProps } from "../services/types/postProps";
import { Avatar } from "@mui/material";
import { deletePost } from "../services/deletePost";
import { Sidebar } from "./Sidebar";

export function Profile(){

    const navigate = useNavigate()

    const user = auth.currentUser

    const [text,setText] = useState('')
    const [img,setImg] = useState<File>()
    const [posts, setPosts] = useState<postProps[]>([]);

    async function handleCreatePost() {
        await createPost({idOwner: user?.uid!, text: text,imageUpload:img!})
    }
    useEffect(() => {
        async function fetchPosts() {
            const posts = await getPosts();
            setPosts(posts);
        }
        fetchPosts();
    }, []);

    function out(){
        signOut(auth).then(() => {
            navigate('/Login')
        })
    }

    return(
        <div className="bg-black flex">
        <Sidebar/>
            <p>You should see me, only if you are logged in {user?.email}</p>
            <Avatar src={user?.photoURL!} sx={{width:'70px', height:'70px'}}/>
            <button onClick={out}>signOut</button>
            <label className="ml-2">text</label>
            <input type='text' onChange={(e) => setText(e.target.value)}/>
            <input type='file' onChange={(e) => setImg(e.target.files![0])}/>
            <button onClick={handleCreatePost}>Upload File</button>
            <div>
                {posts.map((post,i) => (
                    <div key={i}>
                        <img src={post.imageUpload}></img>
                        <h2>{post.text}</h2>
                        <button onClick={() => deletePost({imageUpload: post.imageUpload, document: post.id})}>
                            Delete Post
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
