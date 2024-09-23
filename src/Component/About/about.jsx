import React from 'react';
import { FaClock, FaBullseye, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* First Card - Clock Icon with Write-up */}
      <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden mb-12 p-6">
        <div className="text-blue-600 text-5xl mr-6">
          <FaClock />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">About Us</h3>
          <p className="text-gray-600">
            We are committed to providing exceptional transport services, ensuring our customers have a seamless and pleasant travel experience. Over time we have proven to be the very best.
          </p>
        </div>
      </div>

      {/* Second Section - Mission and Vision Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {/* Mission Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-blue-600 text-4xl mr-4">
              <FaBullseye />
            </div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            To provide safe, reliable, and affordable transportation services to our customers, with a focus on customer satisfaction and innovation.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="text-blue-600 text-4xl mr-4">
              <FaEye />
            </div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-gray-600">
            To be the leading transport service provider in the region, recognized for quality, efficiency, and customer-centric solutions.
          </p>
        </div>
      </div>

      {/* Third Section - Our Stories and Experience / Travel Policy */}
<div className="grid grid-cols-1 sm:grid-cols-2 py-8">
  {/* Our Stories and Experience */}
  <div>
    <h3 className="text-2xl font-bold mb-2 lg:ml-36">OUR STORIES AND <br /> EXPERIENCE</h3>
  </div>

  {/* Flexible Travel Policy */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Missed your Trip or Can’t Travel?</h3>
    <p className="text-gray-600">
      No problem! Travel Easy Transport customers benefit from a flexible change and cancellation policy, including no-fee changes and cancellations for most trips.
    </p>
  </div>
</div>

    </div>
  );
};

export default About;
