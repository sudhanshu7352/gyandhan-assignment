import "./navbar.css"
import {  useNavigate, useParams } from "react-router-dom";
export const Navbar=()=>{
    const data = useParams();
    const navigate =useNavigate()
//    console.log(data)
//    let flag
//    data?flag=true:flag=false
//     // if(flag==true){
//           document.getElementById("home2").style.backgroundColor ="#9452d1"
//     // }
    return(
        <div className="nav_main">
            <div id="home2" onClick={()=>navigate("/search_results/-0/-0")}>Home</div>
            <div id="past"  onClick={()=>navigate("/past_results")}>Past Results</div>
        </div>
    )
}