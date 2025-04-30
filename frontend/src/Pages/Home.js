import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css';
import Footer from '../Components/Footer';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    { title: "🚀 Career-Oriented Curriculum", description: "Built to get you hired, promoted, and growing fast." },
    { title: "🎯 Personalized Learning Paths", description: "Customized journeys according to your goals and skills." },
    { title: "🌐 Real-World Projects", description: "Work on live projects and build a powerful portfolio." },
    { title: "🤝 24/7 Mentorship", description: "Industry mentors guiding you at every step." },
    { title: "🏆 Job Guarantee Programs", description: "Dedicated placement support with top companies." }
  ];

  const cardData = [
    { title: 'Master Full Stack', description: 'Learn frontend, backend, databases, and deployment.', img: 'https://dummyimage.com/300x200/007bff/fff&text=Full+Stack' },
    { title: 'Data Science Pro', description: 'Become a Data Scientist with real-world skills.', img: 'https://dummyimage.com/300x200/28a745/fff&text=Data+Science' },
    { title: 'AI & ML Expert', description: 'Master Artificial Intelligence and Machine Learning.', img: 'https://dummyimage.com/300x200/ffc107/fff&text=AI+%26+ML' }
  ];

  useEffect(() => {
    const handleScroll = (event) => {
      if (sliderRef.current && isSliderActive) {
        const delta = event.deltaY;
        if (delta > 0) {
          if (scrollPosition < slides.length - 1) {
            setScrollPosition(prev => prev + 1);
          }
        } else {
          if (scrollPosition > 0) {
            setScrollPosition(prev => prev - 1);
          }
        }
        event.preventDefault();
      }
    };

    const handleWheel = (event) => {
      handleScroll(event);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isSliderActive, scrollPosition, slides.length]);

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

        {/* Cards Section */}
        <section className="cards-section container py-5">
          <h2 className="text-center fw-bold text-primary mb-5">
            Explore Our Programs
          </h2>
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <motion.div
                  className="card h-100 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img src={card.img} className="card-img-top" alt={card.title} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US Section */}
        <motion.section
          className="whyus-section py-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container whyus-container py-5 px-4">
            <h2 className="text-center fw-bold text-primary mb-5">
              Why Choose Us?
            </h2>

            {/* Slider Container */}
            <div
              className="slider-container"
              ref={sliderRef}
              onMouseEnter={() => setIsSliderActive(true)}
              onMouseLeave={() => setIsSliderActive(false)}
            >
              <div className="slides-wrapper" style={{ transform: `translateX(-${scrollPosition * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div className="whyus-slide" key={index}>
                    <h4 className="slide-title">{slide.title}</h4>
                    <p className="slide-description">{slide.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
