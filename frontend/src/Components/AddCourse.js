import React, { useState } from 'react';

export default function AddCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem('currentUser'); 

    const res = await fetch('http://localhost:5000/add-course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, email }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Course Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add Course</button>
    </form>
  );
}
