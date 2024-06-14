import React from 'react';

const Flashmain = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Responsive Container Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <a href="/flashcard">
        <div className="bg-red-400 text-2xl rounded-2xl p-9">Alphabet</div>

        </a>
      

        <div className="bg-sky-400 text-2xl rounded-2xl p-9">Animals</div>
        <div className="bg-purple-400 text-2xl rounded-2xl p-9">Country Flag</div>
        <div className="bg-yellow-400 text-2xl rounded-2xl p-9">Fruits</div>
      </div>
    </div>
  );
};

export default Flashmain;
