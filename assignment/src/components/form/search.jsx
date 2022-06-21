import { useState } from "react"
import "./search.css"

import {  useNavigate } from "react-router-dom";
export const Search=()=>{
    let [data,setData] =useState({longitude:"",latitude:""})
    const navigate =useNavigate()
    let arr=[]
     const handleSubmit=(e)=>{
        e.preventDefault()
        let long =data.longitude
        let lati =data.latitude
        navigate(`/search_results/${long}/${lati}`)
      
        const obj ={
            long :long,
            lati:lati,
            time : Time()
        }
        var arr=  JSON.parse(localStorage.getItem('Date')) ||[];
        // arr=[get]
        arr.push(obj)
        localStorage.setItem("Date",JSON.stringify(arr))
        //console.log(data)
     }
            const Time =()=>{
                var date = new Date();
        var d = date.getDate();
        var day = (d < 10) ? '0' + d : d;
        var m = date.getMonth() + 1;
        var month = (m < 10) ? '0' + m : m;
        var year = date.getFullYear();
        var h = date.getHours();
        var hour = (h < 10) ? '0' + h : h;
        var mi = date.getMinutes();
        var minute = (mi < 10) ? '0' + mi : mi;
        var sc = date.getSeconds();
        var second = (sc < 10) ? '0' + sc : sc;
        var loctime =  hour+":" + minute +","+day +"/"+ month+"/"+year ;
        return loctime
      //  console.log(loctime)
            }
    const handleChange=(e)=>{
        let {id,value} =e.target
        setData({...data,[id]:value})
        
        
     
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="small_div">

                <label>
                 <p>Latitude</p>
                 <input type="float" id="latitude" onChange={handleChange} required />
                </label>
                <label>
                <p>Longitude</p>
                 <input type="float" id="longitude" onChange={handleChange} required />
                </label>
                </div>
                <br />
                <input className="form_button" type="submit" value="Submit" />
            </form>
        </div>
    )
}