import React, { useState } from 'react';


const questions = [
    [
        {
            question: "What is the result of 5 + 7?",
            options: ["10", "11", "12", "13"],
            answer: "12"
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            answer: "8"
        },
        {
            question: "What is the value of π (pi) rounded to two decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            answer: "3.14"
        },
        {
            question: "What is the result of 8 × 9?",
            options: ["64", "72", "80", "88"],
            answer: "72"
        },
        {
            question: "What is the next prime number after 17?",
            options: ["19", "20", "21", "22"],
            answer: "19"
        },
        {
            question: "What is the product of 3 × 4 × 5?",
            options: ["60", "62", "64", "66"],
            answer: "60"
        },
        {
            question: "What is the value of 2 to the power of 5?",
            options: ["24", "26", "28", "32"],
            answer: "32"
        },
        {
            question: "What is the result of (10 - 4) ÷ 2?",
            options: ["3", "4", "5", "6"],
            answer: "3"
        },
        {
            question: "What is the area of a rectangle with length 6 units and width 4 units?",
            options: ["20 square units", "22 square units", "24 square units", "26 square units"],
            answer: "24 square units"
        },
        {
            question: "What is the sum of the first 10 positive integers?",
            options: ["45", "50", "55", "60"],
            answer: "55"
        },
        {
            question: "What is the result of 15 divided by 3?",
            options: ["3", "4", "5", "6"],
            answer: "5"
        },
        {
            question: "What is the value of 7 squared?",
            options: ["42", "49", "56", "63"],
            answer: "49"
        },
        {
            question: "What is the result of 20% of 150?",
            options: ["15", "20", "25", "30"],
            answer: "30"
        },
        {
            question: "What is the perimeter of a square with side length 10 units?",
            options: ["30 units", "40 units", "50 units", "60 units"],
            answer: "40 units"
        },
        {
            question: "What is the value of 3 factorial (3!)?",
            options: ["3", "6", "9", "12"],
            answer: "6"
        },
        {
            question: "What is the result of 25 divided by 5?",
            options: ["3", "4", "5", "6"],
            answer: "5"
        },
        {
            question: "What is the value of log base 10 of 100?",
            options: ["1", "2", "3", "4"],
            answer: "2"
        },
        {
            question: "What is the result of 12 × 3 + 8?",
            options: ["32", "36", "40", "44"],
            answer: "44"
        },
        {
            question: "What is the value of sin(90 degrees)?",
            options: ["0", "0.5", "1", "2"],
            answer: "1"
        },
        {
            question: "What is the result of 9 squared minus 7 squared?",
            options: ["10", "20", "30", "40"],
            answer: "40"
        }
    ]
    
  
];

function MathsQuiz() {
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

export default MathsQuiz;
