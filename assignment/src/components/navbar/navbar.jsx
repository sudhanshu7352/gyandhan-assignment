import "./navbar.css"
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
export const Navbar=()=>{
    const data = useParams();
    const navigate =useNavigate()
//    console.log(data)
    let flag =false;
//    data?flag=true:flag=false
    
 useEffect(()=>{
    if(flag==false){
        document.getElementById("home2").style.backgroundColor ="#9452d1"
        document.getElementById("past").style.backgroundColor ="white"
   }
//   else if(flag==true){
//        document.getElementById("past").style.backgroundColor ="#9452d1"
//        document.getElementById("home2").style.backgroundColor ="white"
//    }
 },[])
const change =()=>{
    flag=true
    navigate("/past_results")
    document.getElementById("past").style.backgroundColor ="#9452d1"
      document.getElementById("home2").style.backgroundColor ="white"
}
const change2=()=>{
    flag=false
    navigate("/search_results/-99/-0")
    document.getElementById("home2").style.backgroundColor ="#9452d1"
      document.getElementById("past").style.backgroundColor ="white"
}
    return(
        <div className="nav_main">
            <div id="home2" onClick={()=>change2()}>Home</div>
            <div id="past"  onClick={()=>change()}>Past Results</div>
        </div>
    )
}