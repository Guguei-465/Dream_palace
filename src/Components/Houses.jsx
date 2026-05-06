 import React, { useEffect, useState } from 'react'
 import image from '../logo.svg'
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 
 
 const Houses = () => {
 //  declaring state variables
 const[house, setProcucts]=useState([]);
 const[loading,setLoading]=useState("");
 const[error,setError]=useState("")
 
 // image url
 const img_url="https://ryacksonfungo.alwaysdata.net/static/images/"
 // navigation
 const navigate = useNavigate()
 
 
 // function to get houses from database
 const gethouse =async ()=>{
   setLoading("Please wait we are retrieving the house...")
   try{
      const response = await axios.get("https://ryacksonfungo.alwaysdata.net/api/house")
      setProcucts(response.data)
      setLoading("")
   }catch(error){
     setError(error.message)
   } 
 }
 
 // pre-allocate resources using useEffect
 useEffect(()=>{
  gethouse()
 },[]);
   return (
     <div className='row'>
       <h3>Available houses</h3>
       {loading}
       {error}
  
 
       {/* houses card design */}
 
       {house.map( (house)=>(
       <div className='col-md-3 justify-center mb-4'>
         <div className='card shardow card-margin'>
           {/* house image */}
           
           {/* houses details */}
           <img className="house_img"
            src={img_url+house.house_photo} 
            alt={house.house_photo} />
 
           <div className='card-body'>
 
           {/* <h5 className='mt-2'> {house.house_name}</h5> */}
           <p className='text-muted'>{house.house_description}</p>
           <p className='text-muted'>{house.house_number}</p>
           <b className='text-warning'>$.{house.house_payment}</b>
 
           <button className='btn btn-dark mt-2 w-100' 
           onClick={()=>navigate("/Mpesa",{state:{house}})}>Book Now
           </button>
           </div>
         </div>
       </div>
       ))}
     </div>
   )
 }
 
 export default Houses
 
 