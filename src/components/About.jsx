import React from 'react'
import image2 from "../assets/medical1.jpg";

function About() {
  return (
    <>
    <section
           className="relative  h-80 bg-cover  bg-fixed bg-center"
           style={{ backgroundImage: `url(${image2})` }}
         >
           {/* Dark overlay */}
           <div className="absolute inset-0 bg-black/70"></div>
   
           {/* Content */}
           <div className="relative z-10 flex items-center justify-center px-4">
             <div className="w-full max-w-md sm:max-w-xl p-6 sm:p-8 text-center">
               <h1 className="text-white text-xl sm:text-4xl md:text-6xl font-semibold leading-tight">
                 Who We Are
               </h1>
   
               <p className="text-gray-200 text-sm sm:text-lg mt-4">
                Trusted Medical is a professional medical consulting firm dedicated to helping people make better healthcare decisions. We work with qualified doctors, specialists, and healthcare professionals to provide trusted medical guidance.
               </p>
   
               
             </div>
           </div>
         </section>

         <section className="text-center text-black  mt-7">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 px-4  overflow-hidden">
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold text-2xl">Our Mission</h4>
            <p className="text-black text-center">To provide accessible, reliable, and expert medical consulting services that improve health outcomes and patient confidence.</p>
        </div>
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold text-2xl">Our Vision</h4>
            <p className="text-black text-center">To become a trusted medical consulting platform known for quality advice, compassion, and innovation in healthcare support.</p>
        </div>
       </div>
       </section>

       <section className="text-center text-black  mt-7">
      <h2 className="text-2xl font-bold">Our Values</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 px-4  overflow-hidden">
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Integrity</h4>
        </div>
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Excellence</h4>
        </div>
        <div className="basis-1/3  text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Confidentiality</h4>
        </div>
         <div className="basis-1/3  text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Professionalism</h4>
        </div>
        </div>
      </section>
     
         </>
  )
}

export default About