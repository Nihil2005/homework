import React, { useState } from 'react';

function Flashcard() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, question: 'A for Apple', answer: 'https://img.freepik.com/free-vector/apple-colorful-vector-design_341269-1123.jpg?size=626&ext=jpg&ga=GA1.1.241835841.1711090511&semt=sph' },
    { id: 2, question: 'B for Banana', answer: 'https://img.freepik.com/free-photo/yellow-banana-fruit_1203-7489.jpg?t=st=1714694686~exp=1714698286~hmac=89b57b3400f9c72a8e309bebb5091d90f973847bd0470b924ea4ecf5a6babee7&w=996' },
    { id: 3, question: 'C for Cat', answer: 'https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13190.jpg?t=st=1714694806~exp=1714698406~hmac=5035b6fd83c0e4cc37f8ab86203502a25279430eb2194f5b12ace22cb16fb101&w=360' },
    { id: 1, question: 'D for Dog', answer: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-2_1562-691.jpg?t=st=1714694940~exp=1714698540~hmac=1e84c8064dff53433e5f7c67d749c8ff21483b7f63b836a3d4000eec9f7d008a&w=996' },
    // Add more cards similarly
  ]);
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setShowAnswer(false); // Reset showAnswer to false when moving to next card
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setShowAnswer(false); // Reset showAnswer to false when moving to previous card
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcards</h1>
      <div className="bg-white rounded-lg shadow-md p-6 md:w-1/2 lg:w-1/3 mx-auto">
        {/* Show image or text based on showAnswer state */}
        <img src={cards[currentCard].answer} alt={cards[currentCard].question} className="w-full h-auto object-cover mb-4 md:h-64 lg:h-80" />
        {!showAnswer && (
          <p className="text-gray-800 text-lg mb-4">{cards[currentCard].question}</p>
        )}
        <div className="flex flex-wrap justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-2 md:mb-0" onClick={handlePrevCard}>
            Previous
          </button>
          {!showAnswer && (
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-2 md:mb-0" onClick={handleShowAnswer}>
              Show Answer
            </button>
          )}
          {showAnswer && (
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-2 md:mb-0" onClick={handleShowAnswer}>
              Show Question
            </button>
          )}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-2 md:mb-0" onClick={handleNextCard}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
