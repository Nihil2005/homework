import React, { useState } from 'react';


const questions = [
    
        {
            question: "Who is the current President of the United States?",
            options: ["Joe Biden", "Donald Trump", "Barack Obama", "Hillary Clinton"],
            answer: "Joe Biden"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: "Canberra"
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Mars", "Jupiter", "Venus", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["J.K. Rowling", "Harper Lee", "Stephen King", "J.R.R. Tolkien"],
            answer: "Harper Lee"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the national flower of Japan?",
            options: ["Rose", "Cherry Blossom", "Tulip", "Lotus"],
            answer: "Cherry Blossom"
        },
        {
            question: "Who is the author of 'The Great Gatsby'?",
            options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "William Faulkner"],
            answer: "F. Scott Fitzgerald"
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            options: ["China", "India", "Japan", "South Korea"],
            answer: "Japan"
        },
        {
            question: "Who discovered penicillin?",
            options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
            answer: "Alexander Fleming"
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest"
        },
        {
            question: "What is the currency of Brazil?",
            options: ["Euro", "Peso", "Real", "Rupee"],
            answer: "Real"
        },
        {
            question: "Who wrote '1984'?",
            options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
            answer: "George Orwell"
        },
        {
            question: "Which is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Cu"],
            answer: "Au"
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Jane Goodall"],
            answer: "Marie Curie"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Liver", "Lungs", "Skin", "Heart"],
            answer: "Skin"
        },
        {
            question: "What is the national animal of Canada?",
            options: ["Bald Eagle", "Moose", "Beaver", "Polar Bear"],
            answer: "Beaver"
        },
        {
            question: "Which element is the most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Nitrogen"
        },
        {
            question: "Who is known as the 'Father of Computers'?",
            options: ["Bill Gates", "Charles Babbage", "Tim Berners-Lee", "Steve Jobs"],
            answer: "Charles Babbage"
        }
    
    
 
];

function GKQuiz() {
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
        <div className="container px-5 py-4 mx-auto max-w-xl mt-7">
            {showScore ? (
                <div className="text-center">
                    <h1 className="text-3xl text-white font-semibold mb-6">You scored {score} out of {questions.length}</h1>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={restartQuiz}
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-3xl text-white font-semibold mb-6">{questions[currentQuestion].question}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {questions[currentQuestion].options.map((option) => (
                            <button
                                key={option}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded"
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








export default GKQuiz;
