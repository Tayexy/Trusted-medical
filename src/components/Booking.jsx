import React, {useState} from 'react'


function Booking() {
 const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [number, setNumber] =useState("");
  const [appointment, setAppointment] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [message, setMessage] = useState("");


function handleSubmit(e) {
  e.preventDefault();
  alert('Your Appointment has been booked');
  setName("");
  setEmail("");
  setNumber("");
  setAppointment("");
  setConsultationType("");
  setMessage("");
}

  return (
    <>
   <section className="bg-gray-900 text-white text-center p-6 md:p-10">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
    TALK TO OUR PROFESSIONALS
  </h2>
  <p className="text-base md:text-lg lg:text-xl">
    Book a session with us now!
  </p>
</section>


   <form onSubmit={handleSubmit}className="flex flex-col items-center justify-center text-black mt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
    <div className="flex flex-col ">
      <h3 className="text-center ">Name</h3>
      <input type="text" autocomplete="name" placeholder="Your full name" value={name} onChange={(e)=> setName(e.target.value) }className="border p-2 rounded mt-2" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-center">Email</h3>
      <input type="text" placeholder="Your email" value={email} onChange={(e)=> setEmail(e.target.value)} className="border p-2 rounded mt-2" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-center">phone</h3>
      <input type="number" placeholder="Your phone number" value={number} onChange={(e)=> setNumber(e.target.value)} className="border p-2 rounded mt-2" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-center" >Consultation Type</h3>
      <select value={consultationType} onChange={(e)=> setConsultationType(e.target.value)} className="border p-2 rounded mt-2">
        <option>virtual</option>
        <option>Physical</option>
      </select>
     </div>

     <div className="flex flex-col ">
      <h3 className="text-center ">Preferred Appointment</h3>
      <input type="datetime-local"value={appointment} onChange={(e)=> setAppointment(e.target.value)} className="border p-2 rounded mt-2" />
    </div>
     <div className="flex flex-col">
      <h3 className="text-center">How do you feel?</h3>
      <textarea  placeholder="Describe how you feel" value={message} onChange={(e)=> setMessage(e.target.value)} className="border p-2 rounded mt-2" textarea/>
    </div>
  </div>

  <button
    type="submit"
    className="mt-8 bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700"
  >
    Book a Session
  </button>
</form>


   </>
  )
}

export default Booking