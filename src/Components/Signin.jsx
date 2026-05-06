 import React, { useState } from 'react'
 import{Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
 
 const Signin = () =>{
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

   // status messages
    const [loading,setLoading] = useState("")
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")

    // navigation
    const navigate = useNavigate();

   
   
    // function to sign in

    const handleSignin = async(e)=>{
      e.preventDefault()
      setLoading("Please wait...")
      try{
      // fetching user details
      const formData = new FormData();
      formData.append("email",email)
      formData.append("password",password)

      // adding base url
      const response = await axios.post("https://ryacksonfungo.alwaysdata.net/api/signin",formData);
      if (response.data.user){
        setSuccess(response.data.message)
        // saving user in local storage
        localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate("/")
        setLoading("")
      }else{
        setError(error.message)
      }
    }catch(error){
      setError(error.message)
    }

    }
  
   return (
    
     <div className='row justify-content-center '>
       <div className='col-md-6 card shadow m-2 p-4 bg-light'>
          <h1 className='text-light'>Signin</h1>
          {/* binding */}
          {email}<br/>
          {password}
          {success}
          {error}
          {loading}

        <form onSubmit={handleSignin}>
          <input type="email"
           placeholder='Enter Email' 
           className='form-control' 
           onChange={(e=>setEmail(e.target.value))}/><br />

          <input type="password" 
          placeholder='Enter Password' 
          className='form-control'
          onChange={(e=>setPassword(e.target.value))}/><br />

          <input type='submit' 
          value={loading? "Login...":"signin"} 
          disable={loading}
          className='btn btn-primary w-75'/><br />
          
          Don't have an account?<Link to='/Signup' className='text-infor'>Create one</Link>
        </form>
       </div>
     </div>
   )
 }
 
 export default Signin