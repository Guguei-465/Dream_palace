import React, { useEffect, useState } from 'react'
import image from '../logo.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
//  declaring state variables
const[Food, setProcucts]=useState([]);
const[loading,setLoading]=useState("");
const[error,setError]=useState("")

// image url
const img_url="https://ryacksonfungo.alwaysdata.net/static/images/"
// navigation
const navigate = useNavigate()


// function to get Foods from database
const getFood =async ()=>{
  setLoading("Please wait we are retrieving the Food...")
  try{
     const response = await axios.get("https://ryacksonfungo.alwaysdata.net/api/menu")
     setProcucts(response.data)
     setLoading("")
  }catch(error){
    setError(error.message)
  } 
}

// pre-allocate resources using useEffect
useEffect(()=>{
 getFood()
},[]);
  return (
    <div className='row'>
      <h3>Available Foods</h3>
      {loading}
      {error}
 

      {/* Foods card design */}

      {Food.map( (Food)=>(
      <div className='col-md-3 justify-center mb-4'>
        <div className='card shardow card-margin'>
          {/* Food image */}
          
          {/* Foods details */}
          <img className="Food_img"
           src={img_url+Food.Food_photo} 
           alt={Food.Food_photo} />

          <div className='card-body'>

          <h5 className='mt-2'> {Food.food_name}</h5>
          <p className='text-muted'>{Food.Food_description}</p>
          <b className='text-warning'>$.{Food.Food_cost}</b>

          <button className='btn btn-dark mt-2 w-100' 
          onClick={()=>navigate("/Mpesa",{state:{Food}})}>Book Now
          </button>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Menu

