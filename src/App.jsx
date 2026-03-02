import React from 'react'
import { Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";


function App() {
  return (
   <>
       <Navigation />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      </>

  )
}

export default App