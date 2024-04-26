import React from 'react'
import { IoHome } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <header id='header'>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img id='logo' src="images/logo.webp" alt="" />
                    <h2 style={{fontSize:'30px'}}>OO𝐍ΣC𝐓</h2>
                </div>
                <div id='icon' >
                    <IoHome size={22.5} color='rgb(170, 168, 168)'/>
                    <ImSearch size={22.5} color='rgb(170, 168, 168)'/>
                    <IoNotifications size={22.5} color='rgb(170, 168, 168)'/>
                    <BiSolidMessage size={22.5} color='rgb(170, 168, 168)'/>
                    <FaUserFriends size={22.5} color='rgb(170, 168, 168)'/>
                </div>
                <img id='logo' src="images/logo.webp" alt="" />
            </header>
        </div>
    )
}

export default Header
