import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa"
import { MdDynamicFeed } from "react-icons/md";
import { BsStopwatchFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { LuActivity } from "react-icons/lu";
import { PiTreeFill } from "react-icons/pi";


const Sidebar = () => {
    return (
        <div>
            <div id='sidebarLeft' >
                <li><CgProfile size={35} /><div className='sidebarText'>Profile</div></li>
                <li>
                    <svg width="30px" height="30px">
                        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#7a6ded" offset="0%" />
                            <stop stopColor="#591885" offset="100%" />
                        </linearGradient>
                        <FaUserFriends size={30} style={{ fill: "url(#blue-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Friends</div>
                </li>
                <li>
                    <svg width="30px" height="30px">
                        <linearGradient id="red-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#0f0c29" offset="0%" />
                            <stop stopColor="#fbd786" offset="100%" />
                        </linearGradient>
                        <MdDynamicFeed size={30} style={{ fill: "url(#red-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Feed</div>
                </li>
                <li>
                    <svg width="30px" height="30px">
                        <linearGradient id="sky-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="rgba(156,252,248,1)" offset="0%" />
                            <stop stopColor="rgba(110,123,251,1)" offset="100%" />
                        </linearGradient>
                        <BsStopwatchFill size={30} style={{ fill: "url(#sky-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Memories</div>
                </li>
                <li>
                    <svg width="27px" height="27px">
                        <linearGradient id="in-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#9796f0" offset="0%" />
                            <stop stopColor="#fbc7d4" offset="100%" />
                        </linearGradient>
                        <FaBookmark size={27} style={{ fill: "url(#in-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Saved</div>
                </li>
                <li>
                    <svg width="30px" height="30px">
                        <linearGradient id="light-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#83a4d4" offset="0%" />
                            <stop stopColor="#b6fbff" offset="100%" />
                        </linearGradient>
                        <FaPeopleGroup size={30} style={{ fill: "url(#light-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Groups</div>
                </li>
                <li>
                    <svg width="30px" height="30px">
                        <linearGradient id="-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#7a6ded" offset="0%" />
                            <stop stopColor="#591885" offset="100%" />
                        </linearGradient>
                        <MdOutlineVideoLibrary size={30} style={{ fill: "url(#-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Videos</div>
                </li>
                <li>
                    <svg width="30px" height="30px">
                        <linearGradient id="-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#7a6ded" offset="0%" />
                            <stop stopColor="#591885" offset="100%" />
                        </linearGradient>
                        <FaShop size={30} style={{ fill: "url(#-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Marlet Place</div>
                </li>
                <li><AiFillMessage size={30} color='blue'/><div className='sidebarText'>Messages</div></li>
                <li><LuActivity size={30} /><div className='sidebarText'>Recent Activity</div></li>
                <li>
                    <svg width="30px" height="30px">
                        <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="rgba(140,209,131,1) " offset="10%" />
                            <stop stopColor="rgba(144,213,130,1)" offset="100%" />
                        </linearGradient>
                        <PiTreeFill size={30} style={{ fill: "url(#green-gradient)" }} />
                    </svg>
                    <div className='sidebarText'>Environment</div>
                </li>
            </div>
        </div>
    )
}

export default Sidebar
