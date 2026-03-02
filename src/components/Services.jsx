import React from 'react'
import image3 from "../assets/dentist2.jpg";

function Services() {
  return (
    <>
    <section
               className="relative  h-80 bg-cover  bg-fixed bg-center"
               style={{ backgroundImage: `url(${image3})` }}
             >
               {/* Dark overlay */}
               <div className="absolute inset-0 bg-black/70"></div>
       
               {/* Content */}
               <div className="relative z-10 flex items-center justify-center px-4">
                 <div className="w-full max-w-md sm:max-w-xl p-6 sm:p-8 text-center">
                   <h1 className="text-white text-xl sm:text-2xl md:text-5xl font-semibold leading-tight">
                     Medical Consultation
                   </h1>
       
                   <p className="text-gray-200 text-sm sm:text-lg mt-4">
                    We offer one on one medical consultations to help you understand symptoms, diagnoses, and treatment options. Our experts guide you clearly and professionally.
                   </p>
       
                   
                 </div>
               </div>
             </section>

              <section className="flex flex-col items-center justify-center text-black mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="flex flex-col text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold text-2xl">Second Medical Opinion</h4>
            <p className="text-black text-center">Not sure about a diagnosis or treatment plan? We provide independent second opinions to help you make confident healthcare decisions.</p>
        </div>
        <div className="flex flex-col text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold text-2xl">Health Advisory Services</h4>
            <p className="text-black text-center">Personalized health advice based on your medical history, lifestyle, and wellness goals.</p>
        </div>
        <div className="flex flex-col text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold text-2xl">Corporate Medical Consulting</h4>
            <p className="text-black text-center">We support organizations with workplace health advisory, employee wellness programs, and medical policy guidance.</p>
        </div>
        <div className="flex flex-col text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold text-2xl">Telemedicine Support</h4>
            <p className="text-black text-center">Get medical guidance remotely through secure online consultations, saving time and reducing stress.</p>
        </div>
       </div>
       </section>

       <section className="text-center text-black  mt-7">
      <h2 className="text-2xl font-bold">Why Choose Us</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 px-4  overflow-hidden">
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Experienced medical professionals</h4>
        </div>
        <div className="basis-1/3 text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Fast and easy consultation process</h4>
        </div>
        <div className="basis-1/3  text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Patient-centered approach</h4>
        </div>
         <div className="basis-1/3  text-white p-5 rounded-sm shadow-lg transform hover:-translate-y-1 transition duration-300 text-center">
            <h4 className="text-black font-bold">Affordable and transparent pricing</h4>
        </div>
        </div>
      </section>
     
             </>
  )
}

export default Services