import React from 'react';

const TrainBanner = () => {
  const students = [
    { name: 'Student 1', rating: 4, imageUrl: 'url_to_image1' },
    { name: 'Student 2', rating: 5, imageUrl: 'url_to_image2' },
    // Add more students as needed
  ];

  return (
    <div className="flex overflow-hidden train-animation">
      {students.map((student, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/8 mx-1 md:mx-2 my-2 md:my-0 bg-gray-300 rounded-lg"
          style={{ backgroundImage: `url(${student.imageUrl})`, backgroundSize: 'cover' }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white rounded-b-lg">
            <div className="flex items-center">
              <span className="text-sm md:text-base">{student.name}</span>
              <div className="flex ml-2">
                {Array.from({ length: student.rating }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 md:h-4 w-3 md:w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 2.293A1 1 0 016.707 3.707l-4 4a1 1 0 000 1.414l4 4a1 1 0 11-1.414 1.414L2.586 9l-3.293 3.293A1 1 0 010 11.586l4-4a1 1 0 011.414 0zm8 0a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L17.414 11l3.293-3.293A1 1 0 0120 8.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L18.586 7l3.293 3.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l3.293-3.293-3.293-3.293a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293h-.707V3a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainBanner;
