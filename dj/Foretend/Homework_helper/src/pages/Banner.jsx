import React from 'react';

const Banner = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">Enhance Your Education with Our Homework Solutions</h2>
            <p className="mt-4 text-lg text-gray-200">Struggling with homework? We've got you covered! Our platform offers comprehensive solutions and resources to help you excel in your studies.</p>
            <div className="mt-6">
              <a href="#" className="inline-block bg-white text-blue-500 py-3 px-6 rounded-lg font-semibold text-lg mr-4 hover:bg-gray-200">Get Started</a>
              <a href="#" className="inline-block bg-transparent border border-white text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-500">Learn More</a>
            </div>
          </div>
          <div className="lg:w-1/2 opacity-0 transform translate-y-10 lg:translate-y-0 transition-opacity duration-1000 ease-in-out delay-300">
            <img src="src\assets\xx1x_q6z9_220226.jpg" alt="Education Banner" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
