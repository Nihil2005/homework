import React, { useState } from 'react';


const questions = [
    [
        {
            question: "What is the capital of India?",
            options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
            answer: "New Delhi"
        },
        {
            question: "Which river is known as the 'Ganga' in India?",
            options: ["Yamuna", "Brahmaputra", "Indus", "Ganges"],
            answer: "Ganges"
        },
        {
            question: "Which city is known as the 'City of Dreams' in India?",
            options: ["Jaipur", "Bangalore", "Mumbai", "Hyderabad"],
            answer: "Mumbai"
        },
        {
            question: "Who is known as the Father of the Indian Constitution?",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Vallabhbhai Patel"],
            answer: "B.R. Ambedkar"
        },
        {
            question: "Which Indian state is famous for the backwaters?",
            options: ["Kerala", "Goa", "Tamil Nadu", "Maharashtra"],
            answer: "Kerala"
        },
        {
            question: "What is the national animal of India?",
            options: ["Lion", "Tiger", "Elephant", "Leopard"],
            answer: "Tiger"
        },
        {
            question: "Who wrote the Indian national anthem?",
            options: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
            answer: "Rabindranath Tagore"
        },
        {
            question: "What is the highest mountain peak in India?",
            options: ["Kanchenjunga", "Mount Everest", "Nanda Devi", "K2"],
            answer: "Kanchenjunga"
        },
        {
            question: "Which city is known as the 'Pink City' in India?",
            options: ["Jaipur", "Agra", "Lucknow", "Delhi"],
            answer: "Jaipur"
        },
        {
            question: "Who was the first Prime Minister of India?",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Vallabhbhai Patel"],
            answer: "Jawaharlal Nehru"
        },
        {
            question: "What is the currency of India?",
            options: ["Dollar", "Euro", "Pound", "Rupee"],
            answer: "Rupee"
        },
        {
            question: "Which Indian state is known as the 'Land of Five Rivers'?",
            options: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
            answer: "Punjab"
        },
        {
            question: "What is the largest city in India by population?",
            options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
            answer: "Mumbai"
        },
        {
            question: "Who is known as the 'Nightingale of India'?",
            options: ["Sarojini Naidu", "Indira Gandhi", "Lata Mangeshkar", "Mother Teresa"],
            answer: "Sarojini Naidu"
        },
        {
            question: "What is the national flower of India?",
            options: ["Lotus", "Rose", "Jasmine", "Sunflower"],
            answer: "Lotus"
        },
        {
            question: "Which state in India is known for its tea production?",
            options: ["Assam", "Kerala", "Tamil Nadu", "Karnataka"],
            answer: "Assam"
        },
        {
            question: "Who is known as the 'Missile Man of India'?",
            options: ["Indira Gandhi", "A.P.J. Abdul Kalam", "Narendra Modi", "Atal Bihari Vajpayee"],
            answer: "A.P.J. Abdul Kalam"
        },
        {
            question: "Where is the Red Fort located?",
            options: ["Mumbai", "Delhi", "Jaipur", "Agra"],
            answer: "Delhi"
        },
        {
            question: "What is the national bird of India?",
            options: ["Peacock", "Sparrow", "Crow", "Parrot"],
            answer: "Peacock"
        },
        {
            question: "Who composed the Indian national song 'Vande Mataram'?",
            options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Mahatma Gandhi"],
            answer: "Bankim Chandra Chattopadhyay"
        }
    ]
    
];

function IndiaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container mx-auto max-w-md">
      {showScore ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">You scored {score} out of {questions.length}</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</h1>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndiaQuiz;
