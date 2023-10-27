import React from "react";
import "./topbar.css";
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
    
    </div>
 </div>
    )
}
export default Topbar;
