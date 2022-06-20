import { useState } from "react"
import "./search.css"

import {  useNavigate } from "react-router-dom";
export const Search=()=>{
    let [data,setData] =useState({longitude:"",latitude:""})
    const navigate =useNavigate()
    // const [longitude,setLongitude] =useState("")
    // const [latitude,setLatitude] =useState("") 
     const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/search_results/${data}`)
        console.log(data)
     }

    const handleChange=(e)=>{
        let {id,value} =e.target
        setData({...data,[id]:value})
        // if(id =="latitude"){
        //     setLatitude(value)
        // }
        // if(id =="longitude"){
        //     setLongitude(value)
        // }
     
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="small_div">

                <label>
                 <p>Latitude</p>
                 <input type="number" id="latitude" onChange={handleChange} required />
                </label>
                <label>
                <p>Longitude</p>
                 <input type="number" id="longitude" onChange={handleChange} required />
                </label>
                </div>
                <br />
                <input className="form_button" type="submit" value="Submit" />
            </form>
        </div>
    )
}