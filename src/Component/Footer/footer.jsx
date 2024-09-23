import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display alert after submission
      alert('Sent!');
  
      // Redirect to home after showing the alert
      navigate('/');
  };

  return (
    <footer className="bg-gray-900 text-white py-6 h-96">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <div>
            <h3 className="text-xl font-bold mb-3">Feedback Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                {/* <label htmlFor="name" className="block text-sm font-semibold mb-2">Enter Name</label> */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="email" className="block text-sm font-semibold mb-2">Enter Email</label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label> */}
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label> */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Your Message"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>

          {/* Social Media & Copyright */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">&copy; 2024 Travel Easy. </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
