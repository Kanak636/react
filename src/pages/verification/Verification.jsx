import React from "react";
import Topbar from "../../components/Topbar/Topbar";


function Verification(){
    const [valid,setValid]=React.useState("");
    function handleClick(event){
        setValid("The inputed Hash is Correct !");
        event.preventDefault();
    }
    return(
       
        <>
        <Topbar />
           <form onSubmit={handleClick}>
            <h1>Verify :</h1>
            <input type="text" placeholder="Enter Hash key"></input>
            <button className="button" type="submit">GO</button>
           </form> 
           <div>
            <h2>{valid}</h2>
           </div>
        </>
    )
}
export default Verification;