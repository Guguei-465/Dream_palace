import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, BrowserRouter} from 'react-router-dom';
import Houses from './Components/Houses';
import Menu from './Components/Menu';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import GetProduct from './Components/GetProduct';
import Mpesa from './Components/Mpesa';
import Addproduct from './Components/AddProduct';
import Navbar from './Components/Navbar';
import { Carousel } from 'bootstrap';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Courosel from './Components/Carousel';
import AddHouse from './Components/AddHouse';
import AddMenu from './Components/AddMenu';
import AddVideo from './Components/AddVideo';


 
function App() {
  const [image, setImage] = useState(null);
  return (
     
    
    <Router>
      <div className="App">
       

         {/* <Navbar/> */}
         {/* collapsed the entire navbar into a component */}
      <Navbar/>

        {/* carousel */}
        

        <Routes>
          <Route path="/" element={<GetProduct />} />
          <Route path="/Houses" element={<Houses />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/GetProduct" element={<GetProduct />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/AddProduct" element={<Addproduct />} />
          <Route path="/mpesa" element={<Mpesa />} />
        </Routes>
        
        {/* footer */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;