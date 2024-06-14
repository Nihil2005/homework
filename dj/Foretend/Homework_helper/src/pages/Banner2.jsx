import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';

const Banner2 = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-6">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <motion.div className="bg-white rounded-lg shadow-lg py-6 px-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaBook className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Solutions</h3>
            <p className="text-gray-600">Access a wide range of study materials and resources tailored to your educational needs.</p>
          </motion.div>
          <motion.div className="bg-white rounded-lg shadow-lg py-6 px-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaUserGraduate className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Assistance</h3>
            <p className="text-gray-600">Get help from experienced tutors and educators to clarify doubts and understand concepts better.</p>
          </motion.div>
          <motion.div className="bg-white rounded-lg shadow-lg py-6 px-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaChalkboardTeacher className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Learning</h3>
            <p className="text-gray-600">Engage in interactive learning sessions and activities to enhance your understanding.</p>
          </motion.div>
          <motion.div className="bg-white rounded-lg shadow-lg py-6 px-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaChartLine className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Track your progress and performance with detailed analytics and insights.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner2;
