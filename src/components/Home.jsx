import React, {useState} from 'react'
import image1 from "../assets/medical2.jpg";
import { Link } from 'react-router';
import { useForm, ValidationError } from '@formspree/react';

function Home() {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_USEFORM);
  if (state.succeeded) {
      return <p className="text-center text-white bg-gray-900 p-10">Thank you for joining our free medical insight list</p>;
  }

 
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative  min-h-screen bg-cover  bg-fixed bg-center overflow-hidden"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md sm:max-w-xl p-6 sm:p-8 text-center">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold leading-tight">
              Welcome To Trusted Medical Consulting for Better Health Decisions
            </h1>

            <p className="text-gray-200 text-sm sm:text-base mt-4">
              We provide professional medical consulting services to help individuals,
              families, and organizations make informed healthcare decisions.
            </p>

            <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-md text-sm sm:text-base hover:bg-white hover:text-black transition"><Link to="/booking" className="text-white hover:text-black"> Book a Consultation</Link>
             
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 px-4  overflow-hidden">
        <div className="basis-1/3 bg-gray-900 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
          ✔ Expert Medical Advice
        </div>
        <div className="basis-1/3 bg-gray-900 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
          ✔ Personalized Health Guidance
        </div>
        <div className="basis-1/3 bg-gray-900 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
          ✔ Confidential & Reliable
        </div>
      </section>

      {/* About Section */}
      <section className="mt-4">
        <h2 className="text-center text-black text-2xl font-bold mt-20">About Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-lg mt-10">
          <div className="basis-1/3 text-black text-left pl-4">
            <p>
              At Trusted Medical, we connect you with experienced medical professionals who help you understand your health options, treatment plans,
              and next steps. Our goal is to make healthcare decisions easier and stress-free.
            </p>
            <button className="bg-gray-900 text-white mt-5 px-4 py-2 rounded shadow-lg hover:bg-black"><Link to="/About" className="text-white hover:text-amber-50">Read More</Link>
            </button>
          </div>
          <div className="basis-1/4 text-black">
            <h2 className="bg-gray-900 text-white  p-3 rounded-sm">Our Services</h2>
            <ul className="list-disc list-inside space-y-2 l mt-4">
              <li>Second Medical Opinion</li>
              <li>Health Advisory Services</li>
              <li>Corporate Medical Consulting</li>
            </ul>
            <button className="bg-gray-900 text-white mt-5 px-4 py-2 rounded shadow-lg hover:bg-black"><Link to="/services" className="text-white hover:text-white hover:bg-black">View All Services</Link>
              
            </button>
          </div>
        </div>
      </section>

{/* how we work Section */}
        <section className="text-center text-black  mt-7">
      <h2 className="text-2xl font-bold">How We Work</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 px-4  overflow-hidden">
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
          <h3 className="bg-gray-900  w-10 h-10 flex flex-col items-center justify-center rounded-full">1 </h3>
            <h4 className="text-black font-bold">BOOK A SECTION</h4>
            <p className="text-black text-center">Choose a convenient time and submit your health concerns.</p>
        </div>
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
          <h3 className="bg-gray-900  w-10 h-10 flex flex-col items-center justify-center rounded-full ">2 </h3>
            <h4 className="text-black font-bold">SPEAK WITH AN EXPERT</h4>
            <p className="text-black text-center">Consult with a qualified medical professional via video, phone, or in person.</p>
        </div>
        <div className="basis-1/3  text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
        <h3 className="bg-gray-900  w-10 h-10 flex flex-col items-center justify-center rounded-full">3 </h3>
            <h4 className="text-black font-bold">GET CLEAR GUIDANCE</h4>
            <p className="text-black text-center">Receive professional advice, recommendations, and next steps.</p>
        </div>
        </div>
      </section>
     

      {/* Newsletter Section */}
      <div className="text-center text-black text-2xl mt-10 px-4  overflow-hidden">
        <p>Get Free Expert Insight About Your Health Straight To Your Inbox</p>
        <form  onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            className="text-lg w-full sm:w-2/3 border border-gray-300 rounded px-4 py-2"
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>

           <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
           <button
          type="submit"
          disabled={state.submitting}
            className="bg-gray-900 text-white text-lg px-6 py-2 rounded shadow-lg hover:bg-black transition"
          >
            Get Insight
          </button>
        </form>
      </div>

      <section className="mt-10">
        <h3 className="text-center text-black text-2xl font-bold">What Our Clients Say</h3>
        <div className="flex justify-center items-center">
          <h4 className="">“The consultation was clear and professional. I finally understood my treatment options.”</h4>
          <p>Elmida Terry</p>
           <h4 className="">““Their second opinion helped me make the right health decision.”</h4>
          <p>Amanda</p>
           <h4 className="">““Excellent service and very easy to use.”</h4>
          <p>Clement</p>
        </div>
      </section>

      
    </>
  )
}

export default Home
