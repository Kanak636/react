import React from "react";
import "./details.css";
import Topbar from "../../components/Topbar/Topbar";

function Details(){
    const [id,afterid]=React.useState("");
   
    function handleClick(){
        afterid("c7c5537a55bbf8e23f6db6836cef80f1e62b45fceaeb9721afa11f5896df3bd4");
    }
   
    return (
        <>
            <Topbar />
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Certificate Generation Form</h3>
              <div>
              <h3>Your IPFS hash is</h3>
               <p>{id}</p> 
              </div>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder="First Name" className="loginInput" />
                <input placeholder="Last Name" className="loginInput" />
                <input placeholder="Organisation" className="loginInput" />
                <input placeholder="Certified for" className="loginInput" />
                <input placeholder="Assigned date" className="loginInput"  type="date"/>
                <input placeholder="Duration date" className="loginInput" />
                <input placeholder="Email Address" className="loginInput" />
                <input type="file" name="file" className="input"/>
                <button className="loginButton1">UPLOAD CERTIFICATE</button>
                <button className="loginButton" onClick={handleClick}>SUMBIT</button>
              </div>
            </div>
          </div>
        </div>
        </>
      );
}
export default Details;