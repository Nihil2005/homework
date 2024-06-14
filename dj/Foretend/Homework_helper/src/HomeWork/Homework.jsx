import React, { useState, useEffect } from 'react';

function Work() {
  const [homeworks, setHomeworks] = useState([]);
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    const storedHomeworks = localStorage.getItem('homeworks');
    if (storedHomeworks) {
      setHomeworks(JSON.parse(storedHomeworks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('homeworks', JSON.stringify(homeworks));
  }, [homeworks]);

  const addHomework = () => {
    if (!subject || !dueDate || !priority) return;
    const newHomework = {
      id: Date.now(),
      subject,
      dueDate,
      priority,
    };
    setHomeworks([...homeworks, newHomework]);
    setSubject('');
    setDueDate('');
    setPriority('');
  };

  const deleteHomework = (id) => {
    setHomeworks(homeworks.filter((homework) => homework.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHomework();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Homework Organizer</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border font-bold rounded-2xl px-4 py-2 flex-grow"
        />
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded-2xl px-4 py-2 flex-grow"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded-2xl px-4 py-2 flex-grow"
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-3xl flex-none">
          Add Homework
        </button>
      </form>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homeworks.map((homework) => (
          <div key={homework.id} className="border rounded p-4">
            <h2 className="text-lg font-bold text-white">Subject: {homework.subject}</h2>
            <p className="text-lg text-white">Due Date: {homework.dueDate}</p>
            <p className="text-lg text-white">Priority: {homework.priority}</p>
            <button
              className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
              onClick={() => deleteHomework(homework.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
