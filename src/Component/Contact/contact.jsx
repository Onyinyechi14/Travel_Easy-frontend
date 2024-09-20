import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Contact Info Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">We're always here to help. Reach out to us any time!</p>
      </div>

      {/* Icons and Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
        {/* Location */}
        <div>
          <FaMapMarkerAlt className="text-6xl text-blue-600 mx-auto mb-4" />
          <hr />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600">123 Main Street, Cityville, ST 12345</p>
        </div>

        {/* Email */}
        <div>
          <FaEnvelope className="text-6xl text-blue-600 mx-auto mb-4" />
          <hr />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">contact@travel-easy.com</p>
        </div>

        {/* Call Center */}
        <div>
          <FaPhoneAlt className="text-6xl text-blue-600 mx-auto mb-4" />
          <hr />
          <h3 className="text-xl font-semibold mb-2">Call Centers</h3>
          <p className="text-gray-600">+123 456 7890</p>
          <p className="text-gray-600">+098 765 4321</p>
        </div>

        {/* Working Hours */}
        <div>
          <FaClock className="text-6xl text-blue-600 mx-auto mb-4" />
          <hr />
          <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
        </div>
      </div>

        <hr />
      {/* Say Hello Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-12 mt-7">
        {/* Left Side */}
        <div className="text-gray-600">
          <h3 className="text-2xl font-semibold mb-4">Say Hello</h3>
          <p className='text-4xl font-bold'>CONTACT US ANYTIME YOU <br />NEED OUR SERVICE.</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
