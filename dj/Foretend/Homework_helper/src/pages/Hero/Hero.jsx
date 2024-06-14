import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="mt-6 p-2 rounded-md bg-black flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16 flex-col lg:flex-row">
          <div className="lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Ready To
              <span className="text-5xl sm:text-7xl">Achieve</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
              Join thousands of students who have already boosted their grades and confidence with Solvera. Get started today and unlock your full potential!
            </p>
            <div className="flex mt-8">
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                Get started
              </a>
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                Read more
              </a>
            </div>
          </div>
          <div className="lg:w-3/5 relative mt-8 lg:mt-0 transform transition-transform duration-1000 translate-x-0 lg:translate-x-16">
            {/* Show image on all screens */}
            <img src="src\assets\portrait-cheerful-young-girl-holding-books-removebg-preview.png" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full m-auto block" alt="Girl with books"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
