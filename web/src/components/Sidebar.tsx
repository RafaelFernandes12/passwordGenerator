import { MdHome } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import { auth } from "../firebase/config";

export function Sidebar(){
    const user = auth.currentUser?.uid
    return (
        <div className="h-screen w-60 border-r-2 border-menuBorder flex content-center flex-col ml-10 text-white">
            <h2 className="mt-10 text-3xl">𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</h2>
            <ul className="mt-10 h-5/6">
                <a href="/Home">
                    <li className="mt-5 flex content-center items-center cursor-pointer">
                        <MdHome className="w-10 h-10 mr-3" />
                        Home
                    </li>
                </a>
                <a href="/Login">
                    <li className="mt-5 flex content-center items-center">
                        <MdSearch className="w-10 h-10 mr-3" />
                        Search
                    </li>
                </a>
                <a href={`Profile/${user}`}>
                    <li className="mt-5 flex content-center items-center">
                        <Avatar sx={{marginRight: '12px'}} />
                        Profile
                    </li>
                </a>
            </ul>
            <div className="flex content-center items-center mr-3 mb-10">
                <MdMenu className="w-10 h-10 mr-3"/>
                More
            </div>
        </div>
    )
}