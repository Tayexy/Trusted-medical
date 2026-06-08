import React, {useState} from 'react'
import image1 from "../assets/medical2.jpg";
import { Link } from 'react-router';
import { useForm, ValidationError } from '@formspree/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import blogPosts from "./blogData";
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';




function Home() {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_USEFORM);
  const {ref, inView} = useInView ({threshold: 0.5, triggerOnce: false});
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

<div>
  <h2 ref={ref} className="text-center text-black text-3xl font-bold mt-10">
    Trusted By {inView && (<CountUp key={inView} start={20} end={5000} duration={3} />)}+ Users
  </h2>
</div>





      {/* About Section */}
      <section className="mt-4">
        <h2 className="text-center text-black text-2xl font-bold mt-20">About Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-lg mt-10">
          <div className="basis-1/3 text-black text-left pl-4">
            <p>
            Trusted Medical is an NGO base services, we connect you with experienced medical professionals who help you understand your health options, treatment plans,
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
      <h3 className="text-center text-black text-2xl font-bold mb-6">
        What Our Clients Say
      </h3>

      <div className="w-full  mx-auto">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <div className="text-center px-6 py-8">
              <h4 className="text-lg italic">
                “The consultation was clear and professional. I finally understood my treatment options.”
              </h4>
              <p className="mt-2 font-semibold">Elmida Terry</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center px-6 py-8">
              <h4 className="text-lg italic">
                “Their second opinion helped me make the right health decision.”
              </h4>
              <p className="mt-2 font-semibold">Amanda</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center px-6 py-8">
              <h4 className="text-lg italic">
                “Excellent service and very easy to use.”
              </h4>
              <p className="mt-2 font-semibold">Clement</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section className="mt-16 px-4">
  <h2 className="text-2xl font-bold text-center mb-8 text-black">
    Latest Health Articles
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {blogPosts.slice(0,3).map((post) => (
      <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">

          <h3 className="font-semibold text-lg mb-2">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {post.excerpt}
          </p>

          <Link
            to={`/blog/${post.id}`}
            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>

        </div>
      </div>
    ))}

  </div>

  <div className="text-center mt-8">
    <Link
      to="/blog"
      className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-black"
    >
      View All Articles
    </Link>
  </div>
</section>


      
    </>
  )
}

export default Home
