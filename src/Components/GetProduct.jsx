import React, { useEffect, useState } from 'react'
import image from '../logo.svg'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const GetProduct = () => {
//  declaring state variables
const[products, setProcucts]=useState([]);
const[loading,setLoading]=useState("");
const[error,setError]=useState("")

// image url
const img_url="https://ryacksonfungo.alwaysdata.net/static/images/"
// navigation
const navigate = useNavigate()


// function to get products from database
const getProduct =async ()=>{
  setLoading("Please wait we are retrieving the products...")
  try{
     const response = await axios.get("https://ryacksonfungo.alwaysdata.net/api/get_product_details")
     setProcucts(response.data)
     setLoading("")
  }catch(error){
    setError(error.message)
  } 
}

// pre-allocate resources using useEffect
useEffect(()=>{
 getProduct()
},[]);
  return (
    <div className='row'>
      <h4 className='text-warning'>Welcome to Dream Palace</h4>
      {loading}
      {error}
 

      {/* products card design */}

      {products.map( (product)=>(
      <div className='col-md-4 justify-center mb-4'>
        <div className='justify-center mb-4 p-4'>
        <div className='card shardow card-margin'>
          {/* product image */}
          
          {/* products details */}
          <img className="products_img" id='hover_img hover-img:hover' 
           src={img_url+product.product_photo} 
           alt={product.product_photo} />

          <div className='card-body'>

          <h5 className='mt-2'> {product.product_name}</h5>
          <p className='text-muted'>{product.product_description}</p>
          <b className='text-warning'>{product.product_cost}</b>

          {/* <button className='btn btn-warning mt-2 w-45' 
          onClick={()=>navigate("/Mpesa",{state:{product}})}>Book Now
          </button> */}
          </div>
        </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default GetProduct
