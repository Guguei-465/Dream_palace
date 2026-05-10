import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Houses from './Components/Houses';
import Menu from './Components/Menu';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import GetProduct from './Components/GetProduct';
import Mpesa from './Components/Mpesa';
import AddProduct from './Components/AddProduct';
import AddMenu from './Components/AddMenu';   
import AddHouses from './Components/AddHouses';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Carousel from './Components/Carousel';
import Search from "./Components/Search";
import Dashboard from './Components/Dashboard';

function App() {

  return (
    <Router>
      <div className="App">

        {/* NAVBAR */}
        <Navbar />

        {/* CAROUSEL */}
        <Carousel />

        {/* ROUTES */}
        <Routes>

          <Route path="/" element={<GetProduct />} />

          <Route path="/Houses" element={<Houses />} />

          <Route path="/Menu" element={<Menu />} />

          <Route path="/Signup" element={<Signup />} />

          <Route path="/Signin" element={<Signin />} />

          <Route path="/GetProduct" element={<GetProduct />} />

          <Route path="/Videos" element={<Videos />} />

          <Route path="/AddProduct" element={<AddProduct />} />

          <Route path="/AddHouses" element={<AddHouses />} />

          <Route path="/AddMenu" element={<AddMenu />} />

          <Route path="/Mpesa" element={<Mpesa />} />

          <Route path="/Search" element={<Search />} />

          <Route path="/Dashboard" element={<Dashboard />} />

        </Routes>

        {/* FOOTER */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;