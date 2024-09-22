// BodySection.jsx
import React from 'react';
import traveller from '../../assets/images/traveller.jpg'

const BodySection = () => {
  return (
    <section>
    <section className="flex items-center py-12 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Picture */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={traveller}
            alt="Descriptive Alt Text"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* Write-Up */}
        <div className="md:w-1/2 md:pl-8">
        <h3 className='text-2xl text-slate-900'>WHY CHOOSE TRAVEL EASY</h3>
          <p className="text-gray-700">
            Over time, Travel Easy has shown that it is a fast, safe and reliable booking platform <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, numquam. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sint! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cum. <br /> We assure you that, your trip would be enjoyed!
          </p>
        </div>
      </div>
    </section>
    
      <div className="container mx-auto my-8">
      <h2 className="text-center text-2xl font-bold mb-6">Which bus <br/> <span className='text-center text-4xl font-extrabold mb-8 text-slate-700'>type is right for <br />me?</span> </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            className="rounded-t-lg w-full h-80 object-cover ml-7"
            src="https://autojosh.com/wp-content/uploads/2019/05/2019-toyota-hiace-bus-5.jpg"
            alt="Option 1"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-slate-800">Hiace</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 mx-12">
          <img
            className="rounded-t-lg w-full h-80 object-cover"
            src="https://i0.wp.com/wiseride.com.ng/wp-content/uploads/2020/09/2020-toyota-sienna-se-fwd-8-passenger-natl-angular-front-exterior-view_100703186_m.jpg?w=640&ssl=1"
            alt="Option 2"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-slate-800">Sienna</h3>
            
          </div>
        </div>
      </div>
    </div>
    </section>
    
    
  );
};

export default BodySection;
