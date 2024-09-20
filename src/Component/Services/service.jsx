import React from 'react';

const servicesData = [
  {
    image: 'https://autojosh.com/wp-content/uploads/2019/05/2019-toyota-hiace-bus-5.jpg',
    title: 'INTERSTATE TRAVEL',
    description: 'At TRAVEL EASY, our employees are our most valuable assets and we stop at nothing to relentlessly create an environment for learning and development by utilizing a combination of internal and external training measures, all year round..'
  },
  {
    image: 'https://i0.wp.com/wiseride.com.ng/wp-content/uploads/2020/09/2020-toyota-sienna-se-fwd-8-passenger-natl-angular-front-exterior-view_100703186_m.jpg?w=640&ssl=1',
    title: 'Luxury Van Rentals',
    description: 'Travel like an elite from your desired location to your choice destination at affordable prices, Whether you are travelling for business or pleasure, it is always sensible to arrive early.'
  },
  {
    image: 'https://guotransport.com/images/nysc.png',
    title: 'Student Transport Discounts',
    description: 'We offer special discounted rates for students & Corp members traveling to and from school locations.'
  },
  {
    image: 'https://guotransport.com/images/child-booking.png',
    title: 'Family-Friendly Packages',
    description: 'Our family-friendly packages provide affordable travel for families, with safety and comfort in mind.'
  }
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600">Explore the range of services we offer to help you get where you need to go!</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={service.image} alt={service.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
