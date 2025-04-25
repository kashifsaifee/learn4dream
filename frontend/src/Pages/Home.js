import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <motion.section
          className="hero-section container py-5"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <motion.h1
                className="display-4 fw-bold text-primary mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Level Up Your Career
              </motion.h1>
              <TypeAnimation
                sequence={[
                  'with Full Stack Development', 1500,
                  'with Data Science', 1500,
                  'with AI & Machine Learning', 1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="lead d-block mb-4 animated-text"
              />
              <Link to="/courses" className="btn btn-primary btn-lg mt-2">
                Explore Courses
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <motion.img
                src="https://dummyimage.com/600x400/007bff/fff&text=Learn4Dream"
                alt="Learning Banner"
                className="img-fluid rounded"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="container py-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 p-4">
                <h5 className="fw-bold text-primary">Expert Instructors</h5>
                <p className="text-muted">Learn from industry professionals and educators.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 p-4">
                <h5 className="fw-bold text-primary">Flexible Learning</h5>
                <p className="text-muted">Access courses anytime, anywhere on any device.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 p-4">
                <h5 className="fw-bold text-primary">Certification</h5>
                <p className="text-muted">Earn certificates to showcase your skills.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
