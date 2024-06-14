import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDT5jIOjV6u-hAY2K0QBA4Xp3CLl-asaz8'; // Replace with your actual API key
const SEARCH_ENGINE_ID = 'c0e53b78481674f57'; // Replace with your actual search engine ID

function SubjectBot() {
  const [subject, setSubject] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://cse.google.com/cse.js?cx=${SEARCH_ENGINE_ID}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSearch = async () => {
    if (!subject) {
      setError('Please enter a subject');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
          key: API_KEY,
          cx: SEARCH_ENGINE_ID,
          q: subject,
        },
      });

      const { items } = response.data;

      if (!items || items.length === 0) {
        setError('No search results found.');
        setNotes([]);
        return;
      }

      // Filter out only the notes
      const filteredNotes = items.filter(item => item.title.includes('notes') || item.title.includes('Notes'));

      if (filteredNotes.length === 0) {
        setError('No notes found for the given subject');
      } else {
        setError('');
        setNotes(filteredNotes);
      }
    } catch (error) {
      console.error('Error searching subjects:', error);
      setError('Error searching subjects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter subject topic"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-l-md py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button onClick={handleSearch} disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4">
        {notes.map((note, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-gray-700">{note.snippet}</p>
            <a href={note.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Notes</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectBot;
