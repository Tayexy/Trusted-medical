import React from 'react'
import { Link } from 'react-router';

function Footer() {
  return (
   <>
      <footer className="bg-gray-900 text-white p-10 mt-10  overflow-hidden">
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="basis-1/4">
            <ul>
              <li><Link to="/" className="text-white text-lg hover:text-amber-50">Services</Link></li>
              <li><Link to="" className="text-white text-lg hover:text-amber-50">About Us</Link></li>
              <li><Link to="" className="text-white text-lg hover:text-amber-50">Contact Us</Link></li>
            </ul>
          </div>
          <div className="basis-1/4">
            <ul>
              <li><Link to="" className="text-white text-lg hover:text-amber-50">Privacy Policy</Link></li>
              <li><Link to="" className="text-white text-lg hover:text-amber-50">Terms & Conditions</Link></li>
            </ul>
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