import React from 'react'
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
   <>
      <footer className="bg-gray-900 text-white p-10 mt-10  overflow-hidden">
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="basis-1/4">
          <h3 className="text-2xl font-bold ">Trusted Medical</h3>
            <ul>
              <li><Link to="/services" className="text-white text-lg hover:text-amber-50">Services</Link></li>
              <li><Link to="/about" className="text-white text-lg hover:text-amber-50">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-lg hover:text-amber-50">Contact</Link></li>
              <li><Link to="/booking" className="text-white text-lg hover:text-amber-50">Booking</Link></li>
            </ul>
          </div>
          <div className="basis-1/4">
            <ul>
              <li><Link to="/privacy" className="text-white text-lg hover:text-amber-50">Privacy Policy</Link></li>
              <li><Link to="/termsandcondition" className="text-white text-lg hover:text-amber-50">Terms & Conditions</Link></li>
            </ul>
            <h3>Connect With Us</h3>
            <div className=" flex items-center mt-5">
              <div className="flex items-center gap-5">
            <FaFacebook  size="20"/> 
            <FaInstagram size="20"/>
            <FaLinkedinIn size="20"/>
            </div>
            </div> 
          </div>
          <div className="basis-1/4">
            <h2>Frequently Asked Questions (FAQ)</h2>
            <details className="bg-white text-black p-4 rounded-md mt-5">
              <summary className="cursor-pointer font-semibold">Is my consultation confidential?</summary>
              <p className="mt-2">Yes. All consultations are private and secure.</p>
            </details>
            <details className="bg-white text-black p-4 rounded-md mt-2">
              <summary className="cursor-pointer font-semibold">Do I need a referral?</summary>
              <p className="mt-2">No referral is required to book a consultation.</p>
            </details>
            <details className="bg-white text-black p-4 rounded-md mt-2">
              <summary className="cursor-pointer font-semibold">Can I consult online?</summary>
              <p className="mt-2">Yes, we offer online and in-person consultations.</p>
            </details>
          </div>
        </div>
        <p className="text-center text-white text-sm mt-6">
          © 2026 Trusted Medical. All rights reserved.
        </p>
      </footer>
      </>
  )
}

export default Footer