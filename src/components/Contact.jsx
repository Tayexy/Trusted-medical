import React, { useState } from 'react';
import { FaClock, FaPhone, FaAddressBook, FaMailBulk } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_CONTACT);

  if (state.succeeded) {
    return <p className="text-center mt-10 text-white bg-gray-900 p-10">Thank You. You will hear from us soonest</p>;
  }

  return (
    <>
      <section className="bg-gray-900 text-white text-center p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          SEND US A MESSAGE
        </h2>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center px-10 mt-10">
        <div className="flex flex-col bg-gray-900 text-white p-5 rounded-2xl text-center shadow-4xl">
          <FaAddressBook />
          <h3>Address</h3>
          <p>No 1. Street of the North</p>
        </div>
        <div className="flex flex-col bg-gray-900 text-white p-5 rounded-2xl text-center">
          <FaPhone />
          <h3>Call us </h3>
          <p>+12345678</p>
        </div>
        <div className="flex flex-col bg-gray-900 text-white p-5 rounded-2xl text-center">
          <FaMailBulk />
          <h3>Email us</h3>
          <p>trustmedical@site</p>
        </div>
        <div className="flex flex-col bg-gray-900 text-white p-5 rounded-2xl text-center">
          <FaClock />
          <h3>Working hours</h3>
          <p>Mon - Friday</p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          <div className="flex flex-col">
            <h3 className="text-center">First Name</h3>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border p-2 rounded mt-2"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-center">Last Name</h3>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border p-2 rounded mt-2"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-center">Email</h3>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded mt-2"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="flex flex-col">
            <h3 className="text-center">Your message</h3>
            <textarea
              name="message"
              placeholder="Type in your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border p-2 rounded mt-2"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="mt-8 bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Contact;
