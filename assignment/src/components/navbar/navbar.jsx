import "./navbar.css"
import {  useNavigate } from "react-router-dom";
export const Navbar=()=>{
 const navigate =useNavigate()

    return(
        <div className="nav_main">
            <div onClick={()=>navigate("/search_results/:lati/:longi")}>Home</div>
            <div  onClick={()=>navigate("/past_results")}>Past Results</div>
        </div>
    )
}