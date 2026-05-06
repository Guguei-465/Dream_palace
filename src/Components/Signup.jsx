 import axios from 'axios';
import React, { useState } from 'react'
 import{Link} from 'react-router-dom'
 
 const Signup = () => {
  // declaring state variables
  const [Username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");

//status messages
  const [loading,setLoading]= useState("")
  const [error,setError]= useState("")
  const [success,setSuccess]= useState("")
  
  // function to submit
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    try{
      // fetching user details
      const formData = new FormData();
      formData.append("username",Username)
      formData.append("email",email)
      formData.append("phone",phone)
      formData.append("password",password);

      // adding base url
      const response = await axios.post("https://ryacksonfungo.alwaysdata.net/api/signup", formData);
      setSuccess(response.data.success)
      setLoading("")
    
    }catch(error){
      setError(error)
    
    }
  }

  
   return (
     <div className='row justify-content-center '>
       <div className='col-md-6 card shadow m-2 p4 bg-light'>
        <h1 className='text-light font-callibri'>Signup</h1>

      {/* bindings messeges */}
      {loading}
      {error}
      {success}
    

      {/* signup form */}
        <form id='form' onSubmit={handleSubmit}>
          <input type="text" 
          placeholder='Enter Username'
          className='form-control text-dark'
          onChange={(e)=> setUsername(e.target.value)}/><br /><br />

          <input type="email" 
          placeholder='Enter E-mail' 
          className='form-control text-dark' 
          onChange={(e)=> setEmail(e.target.value)}/><br /><br />

          <input type="tel" 
          placeholder='Enter Phone' 
          className='form-control text-dark' 
          onChange={(e)=> setPhone(e.target.value)}/><br /><br />

          <input type="password" 
          placeholder='Enter password' 
          className='form-control text-dark' 
          onChange={(e)=> setPassword(e.target.value)}/><br /><br />

          <input type='submit' 
          value={loading? "login...":"signup"} 
          disabled={loading}
          className='btn btn-primary w-75 text-light'/><br/><br />

          {/* incase someone has already an account */}
          Already an account?<Link to='/Signin' className='text-lt'>Login</Link>
        </form>
       </div>
     </div>
   )
 }
 
 export default Signup
 