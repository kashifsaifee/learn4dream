// src/Pages/Courses.js
import React, { useState } from 'react';


const courses = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description:
      'Master both frontend and backend development with modern technologies including React, Node.js, and MongoDB.',
    price: '$999',
    image: 'https://dummyimage.com/600x400/000/fff&text=Tushar',
  },
  {
    id: 'cs',
    title: 'Computer Science',
    description:
      'Build a strong foundation in computer science fundamentals, algorithms, and data structures.',
    price: '$799',
    image: 'https://dummyimage.com/600x400/000/fff&text=Tushar',
  },
  {
    id: 'data',
    title: 'Data Science',
    description:
      'Learn data analysis, machine learning, and statistical modeling with Python and R.',
    price: '$899',
    image: 'https://dummyimage.com/600x400/000/fff&text=Tushar',
  },
];

export default function Courses() {
  const [loading, setLoading] = useState(null);

  const enrollCourse = async (courseId) => {
    setLoading(courseId);
    try {
      // simulate API call
      await new Promise((r) => setTimeout(r, 1500));
      alert('Successfully enrolled!');
    } catch {
      alert('Error enrolling in course');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="text-center mb-5">
        <h2 className="display-5 text-white hover-heading">
          Transform Your Career with Our Courses
        </h2>


        <p className="lead">
          Discover industry‑leading courses designed to help you master today’s digital skills.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text flex-grow-1">{course.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h6 text-primary mb-0">{course.price}</span>
                  <button
                    className="btn btn-primary"
                    onClick={() => enrollCourse(course.id)}
                    disabled={loading === course.id}
                  >
                    {loading === course.id && (
                      <span className="spinner-border spinner-border-sm me-2" role="status" />
                    )}
                    {loading === course.id ? 'Enrolling...' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
