import "./home.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const data = useParams();
  const navigate =useNavigate()
 console.log(data)
 
  const [weather,setWeather] =useState([])
  
 
//  let i=0


  useEffect(() => {
    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${data.longi}&longitude=${data.lati}&hourly=temperature_2m`).then((res)=>{
       
         const x=[]

        for(let i=0;i<10;i++){
            x.push({time:res.data.hourly.time[i],temperature_2m:res.data.hourly.temperature_2m[i]})
        }
        // console.log(x)
        setWeather([...x])
    });
  }, []);


//   if(val){
  return (
    <>
    {data.lati !=-0?
    (<div className="home_div">

      <h3 className="h3">Temperatures</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody id="tb">
          
           { weather.map((e,i)=>
           <tr>
                  <td> {e.time}  </td>
                  <td> {e.temperature_2m}  </td>
                       
           </tr> 
                  )}
              
            </tbody>
        
      </table>
    </div>)
    : (navigate("/"))
           }
    </>
  )
        }
        

