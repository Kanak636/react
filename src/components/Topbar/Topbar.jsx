import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./topbar.css";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";


function Topbar(){
    return (
<div className="topbarContainer">
    <div className="topbarLeft">
        <span className="logo">CERTIFY BLOCK</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
        <SearchIcon  className="searchIcon"/>
        <input className="searchInput" placeholder="search  "></input>
        </div>
    </div>
    
    <div className="topbarRight">
        <div className="topbarlinks">
            <span className="topbarLink"><Link to="/">Login</Link></span>
            <span className="topbarLink"><Link to="/details">GenerateCertificate</Link></span>
            <span className="topbarLink"><Link to="/upload">History</Link></span>
        </div>
        <div className="topbarIcons">
        <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
        </div>
        </div>
    </div>
 </div>
    )
}
export default Topbar;
