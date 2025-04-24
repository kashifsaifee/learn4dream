import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosSearch } from 'react-icons/io';
import { IoBagOutline } from 'react-icons/io5';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Courses.css';
import CourseHeader from '../Components/CourseHeader'; // remove if you don’t have it

const courses = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description:
      'Master both frontend and backend development with modern technologies including React, Node.js, and MongoDB.',
    price: '$999',
    image: 'https://dummyimage.com/600x400/007bff/fff&text=Full+Stack',
  },
  {
    id: 'cs',
    title: 'Computer Science',
    description:
      'Build a strong foundation in computer science fundamentals, algorithms, and data structures.',
    price: '$799',
    image: 'https://dummyimage.com/600x400/28a745/fff&text=Computer+Science',
  },
  {
    id: 'data',
    title: 'Data Science',
    description:
      'Learn data analysis, machine learning, and statistical modeling with Python and R.',
    price: '$899',
    image: 'https://dummyimage.com/600x400/ffc107/000&text=Data+Science',
  },
];

export default function Courses() {
  const [loading, setLoading] = useState(null);

  const enrollCourse = async (courseId) => {
    setLoading(courseId);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      alert('Successfully enrolled!');
    } catch {
      alert('Error enrolling in course');
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      {/* optional header/banner */}
      {CourseHeader && <CourseHeader />}

      <motion.div
        className="container py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ---------- Hero ---------- */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">
            Transform Your Career with Our Courses
          </h1>
          <p className="lead text-muted">
            Discover industry‑leading courses designed to help you master today’s digital skills.
          </p>
        </header>

        {/* ---------- Dropdown ---------- */}
        <div className="dropdown-center mb-4 text-center">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Courses
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/courses/data">Data Science</Link></li>
            <li><Link className="dropdown-item" to="/courses/ml">Machine Learning</Link></li>
            <li><Link className="dropdown-item" to="/courses/ai">Artificial Intelligence</Link></li>
          </ul>
        </div>

        {/* ---------- Course Cards ---------- */}
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-lg border-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: 200, objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold">{course.title}</h5>
                  <p className="text-muted flex-grow-1">{course.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-success mb-0">{course.price}</span>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => enrollCourse(course.id)}
                      disabled={loading === course.id}
                    >
                      {loading === course.id && (
                        <span className="spinner-border spinner-border-sm me-2" />
                      )}
                      {loading === course.id ? 'Enrolling…' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Animated Search Hint ---------- */}
        <div className="search mt-5 text-center">
          <IoIosSearch size={20} />
          <TypeAnimation
            sequence={[
              'Search Courses', 1000,
              'Data Science', 1000,
              'Machine Learning', 1000,
              'Artificial Intelligence', 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* ---------- Cart Link ---------- */}
        <div className="cart mt-4 text-center">
          <Link to="/my-courses" className="btn btn-link p-0 fw-bold text-decoration-none">
            <IoBagOutline size={25} className="me-1" />
            Your Courses
          </Link>
        </div>
      </motion.div>
    </>
  );
}
