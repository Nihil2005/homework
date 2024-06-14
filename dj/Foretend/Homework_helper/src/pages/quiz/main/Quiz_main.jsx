import React from 'react';

const Quiz_main = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Solve The Quiz</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-red-500 p-6 rounded-lg shadow-md">
            <a href='/gk-quiz'>
            <h2 className="text-xl font-semibold mb-4">Gk Quiz</h2>

            </a>
        </div>


        <div className="bg-purple-400 p-6 rounded-lg shadow-md">
            <a href='/india-quiz'>
            <h2 className="text-xl font-semibold mb-4">India Quiz</h2>

            </a>
        
 
        </div>
        <div className="bg-orange-400 p-6 rounded-lg shadow-md">
           <a href='/maths-quiz' >
           <h2 className="text-xl font-semibold mb-4">Maths Quiz</h2>

           </a>
        </div>
        <div className="bg-red-400 p-6 rounded-lg shadow-md">
            <a href='/sports-quiz'>
            <h2 className="text-xl font-semibold mb-4">Sports Quiz</h2>

            </a>
       
          
        </div>
      </div>
    </div>
  );
};

export default Quiz_main;
