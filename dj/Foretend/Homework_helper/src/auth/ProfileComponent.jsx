import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import axios from 'axios';

const ProfileComponent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snapScore, setSnapScore] = useState(0); // Initialize snap score state
  const [homeworkTip, setHomeworkTip] = useState(''); // Initialize homework tip state

  useEffect(() => {
    fetchUserData();
    generateSnapScore(); // Generate snap score on component mount
    generateHomeworkTip(); // Generate homework tip on component mount
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.get('http://00/api', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      setError('Failed to fetch user data');
      setLoading(false);
    }
  };

  const generateSnapScore = () => {
    // Generate a random snap score between 1000 and 10000
    const randomScore = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    setSnapScore(randomScore);
  };

  const generateHomeworkTip = () => {
    // Array of homework tips
    const tips = [
      "Set specific goals for each study session to stay focused.",
      "Break down larger tasks into smaller, manageable chunks.",
      "Find a quiet and comfortable study space to minimize distractions.",
      "Take short breaks between study sessions to rest and recharge.",
      "Use mnemonic devices or visual aids to help remember information.",
    ];
    // Select a random tip from the array
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setHomeworkTip(randomTip);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const aiachatbot = () => {
    window.location.href = '/aiachatbot';
  };

  // Function to determine icon based on snap score
  const getSnapScoreIcon = () => {
    if (snapScore < 5000) {
      return <FaStar className="text-yellow-500 h-5" />; // Low score icon
    } else if (snapScore >= 5000 && snapScore < 8000) {
      return <FaStarHalfAlt className="text-yellow-500" />; // Medium score icon
    } else {
      return <FaStar className="text-green-500 h-5" />; // High score icon
    }
  };

  return (
    <div className="flex flex-col mt-6 lg:flex-row min-h-screen bg-black">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-900 text-green-400">
        <div className="p-4 text-2xl font-bold">Student Dashboard</div>
        <ul className="mt-4">
          <li className="px-4 py-2 bg-grey-400 hover:bg-gray-700">Dashboard</li>
          <li className="px-4 py-2 bg-grey-400 hover:bg-gray-700 cursor-pointer" onClick={aiachatbot}>AI Assistant</li>
        </ul>
        <button className="mt-4 ml-4 bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={handleLogout}>Logout</button>
        {/* Homework Tips */}
        <div className="mt-4 p-4 bg-gray-800 rounded-md">
          <h3 className="text-xl font-semibold text-gray-200 mb-2">Homework Tips</h3>
          <p className="text-sm text-gray-300">{homeworkTip}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-gray-600 shadow-lg rounded-xl p-4 lg:p-8 mb-4">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Student Profile</h2>
          {loading && <div className="text-center mt-4 text-gray-200">Loading...</div>}
          {error && <div className="text-center mt-4 text-red-500">Error: {error}</div>}
          {userData && (
            <div className='text-gray-200'>
              <p><span className="font-bold text-xl">Email:</span> {userData.email}</p>
              <p><span className="font-bold text-xl">First Name:</span> {userData.first_name}</p>
              <p><span className="font-bold text-xl">Last Name:</span> {userData.last_name}</p>
              <div className="flex items-center">
                {getSnapScoreIcon()} {/* Display icon based on score */}
                <p className="ml-2"><span className="font-bold text-2xl">Streak Score:</span> {snapScore}</p> {/* Display snap score */}
              </div>
            </div>
          )}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Box 1 */}
          <div className="bg-purple-700 p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href='/aiachatbot'>
              <img src='src\assets\icons8-ai-96.png' alt='kk' />
              <h3 className="text-white text-xl font-bold mb-2">AI Assistant</h3>
            </a>
          </div>

          {/* Box 2 */}
          <div className="bg-blue-600 p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href="/main-notes">
              <img src='src\assets\icons8-quiz-96.png' alt='jk'/>
              <h3 className="text-white text-xl font-bold mb-2">Notes Resources</h3>
            </a>
          </div>

          {/* Box 3 */}
          <div className="bg-pink-600 p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href='/flashmain'>
              <img src='src\assets\icons8-learning-flashcards-78.png' alt='kk' />
              <h3 className="text-white text-xl font-bold mb-2">Flash Cards</h3>
            </a>
          </div>

          {/* Box 4 */}
          <div className="bg-green-600 p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href='/comunity'>
              <img src='src\assets\icons8-community-96.png' alt='kk'/>
              <h3 className="text-white text-xl font-bold mb-2">Student Community</h3>
            </a>
          </div>

          <div className="bg-yellow-600 p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href='/quiz'>
              <img className='h-16 w-18' src="src\assets\icons8-quiz-48.png" alt="gaeg" />
              <h3 className="text-white text-xl font-bold mb-2">Quizzes</h3>
            </a>
          </div>

          <div className="bg-red-600 p-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href='/work'>
              <img src='src\assets\icons8-resources-96.png' alt='kk'/>
              <h3 className="text-white text-xl font-bold mb-2">Homework Organizer</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
