import React from 'react'
import { Routes, Route, Router } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Privacy from './components/Privacy';
import Termsandcondition from './components/Termsandcondition';
import ScrollToTop from './components/ScrollToTop';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Auth from './components/Auth';



function App() {
  return (
   <>
       <Navigation />
       <ScrollToTop />
       <ToastContainer />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsandcondition" element={<Termsandcondition />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
      </>

  )
}

export default App