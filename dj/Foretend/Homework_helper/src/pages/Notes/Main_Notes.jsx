import React from 'react';

const Main_Notes = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="mt-9 mx-20 grid grid-cols-6 gap-4">
        {/* School 1 */}
        <div className="bg-blue-200 rounded-3xl p-4">School of Engineering</div>

        {/* School 2 */}
        <div className="bg-green-200 rounded-3xl p-4">School of Business</div>

        {/* School 3 */}
        <div className="bg-yellow-200 rounded-3xl p-4">School of Medicine</div>

        {/* School 4 */}
        <div className="bg-purple-200 rounded-3xl p-4">School of Arts</div>

        {/* School 5 */}
        <div className="bg-indigo-200 rounded-3xl p-4">School of Law</div>

        {/* School 6 */}
        <div className="bg-pink-200 rounded-3xl p-4">School of Education</div>

        {/* College Department 1 */}
        <div className="bg-red-200 rounded-3xl p-4 col-span-2">Computer Science Department</div>

        {/* College Department 2 */}
        <div className="bg-teal-200 rounded-3xl p-4 col-span-2">Psychology Department</div>

        {/* College Department 3 */}
        <div className="bg-gray-200 rounded-3xl p-4 col-span-2">History Department</div>

        {/* College Department 4 */}
        <div className="bg-orange-200 rounded-3xl p-4 col-span-2">Mathematics Department</div>

        {/* College Department 5 */}
        <a href='/notes'>
        <div className="bg-blue-300 p-4 rounded-3xl col-span-2">Physics Department</div>

        </a>
      

        {/* College Department 6 */}
        <div className="bg-green-300 p-4 rounded-3xl col-span-2">Biology Department</div>

        {/* College Department 7 */}
        <div className="bg-yellow-300 p-4 rounded-3xl col-span-2">Chemistry Department</div>

        {/* College Department 8 */}
        <div className="bg-purple-300 p-4 rounded-3xl col-span-2">Economics Department</div>

        {/* College Department 9 */}
        <div className="bg-indigo-300 p-4 rounded-3xl col-span-2">Sociology Department</div>

        {/* College Department 10 */}
        <div className="bg-pink-300 p-4 rounded-3xl col-span-2">Literature Department</div>
      </div>
    </div>
  );
};

export default Main_Notes;
