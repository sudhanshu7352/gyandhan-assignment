import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./past_results.css"

export const Past_results=()=>{

    const [data,setData] =useState([])
    const navigate =useNavigate()
    const Date =JSON.parse(localStorage.getItem("Date"))
   // console.log(Date,"da")


    const handleDelete=(i)=>{
        Date.splice(i,1)
        // console.log(Date)
        localStorage.setItem("Date",JSON.stringify(Date));
        // console.log(i)
          setData([...Date])
   }
useEffect(()=>{
  setData([...Date])
},[])
    return (
        <div className="past_div">
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Longitude</th>
                <th>Latitude</th>
                <th>Searched at</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {data.map((e,i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.long}</td>
                    <td>{e.lati}</td>
                    <td>{e.time}</td>
                    <td><span onClick={()=>navigate(`/search_results/${e.long}/${e.lati}`)}>Show</span>/<span onClick={(i)=>handleDelete(i)} >Delete</span></td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
    )
}