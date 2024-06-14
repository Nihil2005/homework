import React, { useState } from 'react';


const questions = [
    [
        {
            question: "Which sport is known as the 'king of sports'?",
            options: ["Football", "Cricket", "Tennis", "Basketball"],
            answer: "Football"
        },
        {
            question: "Who is often referred to as the 'GOAT' (Greatest Of All Time) in basketball?",
            options: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Magic Johnson"],
            answer: "Michael Jordan"
        },
        {
            question: "In which country did the sport of tennis originate?",
            options: ["France", "United Kingdom", "United States", "Australia"],
            answer: "United Kingdom"
        },
        {
            question: "Which athlete has won the most Olympic gold medals?",
            options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Serena Williams"],
            answer: "Michael Phelps"
        },
        {
            question: "What is the diameter of a basketball hoop in inches?",
            options: ["16 inches", "18 inches", "20 inches", "22 inches"],
            answer: "18 inches"
        },
        {
            question: "Which country won the first FIFA World Cup?",
            options: ["Brazil", "Germany", "Uruguay", "Argentina"],
            answer: "Uruguay"
        },
        {
            question: "Who has won the most Grand Slam titles in men's tennis?",
            options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
            answer: "Roger Federer"
        },
        {
            question: "Which sport uses a shuttlecock?",
            options: ["Badminton", "Table Tennis", "Squash", "Volleyball"],
            answer: "Badminton"
        },
        {
            question: "Which country is known as the 'Mecca of Cricket'?",
            options: ["Australia", "India", "England", "South Africa"],
            answer: "England"
        },
        {
            question: "Who is the only boxer to have won world titles in eight different weight divisions?",
            options: ["Floyd Mayweather Jr.", "Manny Pacquiao", "Muhammad Ali", "Mike Tyson"],
            answer: "Manny Pacquiao"
        },
        {
            question: "Which sport is associated with the term 'Grand Slam'?",
            options: ["Tennis", "Golf", "Rugby", "Hockey"],
            answer: "Tennis"
        },
        {
            question: "Who has won the most Formula 1 World Championships?",
            options: ["Lewis Hamilton", "Michael Schumacher", "Ayrton Senna", "Sebastian Vettel"],
            answer: "Lewis Hamilton"
        },
        {
            question: "In which year did cricket's first Test match take place?",
            options: ["1868", "1877", "1892", "1901"],
            answer: "1877"
        },
        {
            question: "Which country has won the most FIFA World Cup titles?",
            options: ["Brazil", "Germany", "Argentina", "Italy"],
            answer: "Brazil"
        },
        {
            question: "What is the standard weight of an Olympic barbell used in weightlifting?",
            options: ["25 kilograms", "30 kilograms", "35 kilograms", "20 kilograms"],
            answer: "20 kilograms"
        },
        {
            question: "Who is the fastest man in recorded history?",
            options: ["Usain Bolt", "Carl Lewis", "Asafa Powell", "Justin Gatlin"],
            answer: "Usain Bolt"
        },
        {
            question: "Which sport is played on a diamond?",
            options: ["Baseball", "American Football", "Ice Hockey", "Rugby"],
            answer: "Baseball"
        },
        {
            question: "Which country has won the most Olympic gold medals in basketball?",
            options: ["United States", "Russia", "Spain", "Argentina"],
            answer: "United States"
        },
        {
            question: "Who is the only soccer player to have won three FIFA World Cups?",
            options: ["Pele", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo"],
            answer: "Pele"
        },
        {
            question: "What is the highest possible break in snooker?",
            options: ["147", "155", "162", "169"],
            answer: "147"
        }
    ]
    
 
];

function SportsQuiz() {
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

export default SportsQuiz;
