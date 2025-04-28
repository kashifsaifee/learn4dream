import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs/lib/anime.es.js';
import '../Styles/Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const coursesRef = useRef(null);
  const ctaRef = useRef(null);
  const shapeRefs = useRef([]);

  // Add shape to ref array
  const addToShapeRefs = (el) => {
    if (el && !shapeRefs.current.includes(el)) {
      shapeRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current.querySelectorAll(".hero-content > *"), {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Floating shapes animation
    shapeRefs.current.forEach((shape, i) => {
      gsap.to(shape, {
        y: Math.random() * 40 - 20,
        x: Math.random() * 30 - 15,
        rotation: Math.random() * 15 - 7.5,
        duration: 8 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      });
    });

    // Features animation
    gsap.from(featuresRef.current.querySelectorAll(".feature-card"), {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%"
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1)"
    });

    // Courses animation
    const courses = coursesRef.current.querySelectorAll(".course-card");
    courses.forEach((course, i) => {
      gsap.from(course, {
        scrollTrigger: {
          trigger: coursesRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1
      });
    });

    // CTA animation
    anime({
      targets: ctaRef.current.querySelectorAll(".cta-button"),
      translateY: [10, -10],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });

    // Background text animation
    const bgText = document.querySelectorAll(".background-text");
    bgText.forEach(text => {
      gsap.to(text, {
        scrollTrigger: {
          trigger: text,
          scrub: true
        },
        x: 100,
        duration: 2
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      shapeRefs.current = [];
    };
  }, []);

  return (
    <div className="home-page">
      {/* Floating background shapes */}
      <div className="shape shape-1" ref={addToShapeRefs}></div>
      <div className="shape shape-2" ref={addToShapeRefs}></div>
      <div className="shape shape-3" ref={addToShapeRefs}></div>
      <div className="shape shape-4" ref={addToShapeRefs}></div>
      
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Learning Experience
            </h1>
            <p className="hero-subtitle">
              Access world-class courses from industry experts and take your skills to the next level
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Explore Courses</button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
          </div>
        </div>
        <div className="background-text">LEARNING</div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef}>
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform</h2>
          <p className="section-subtitle">Designed to help you achieve your learning goals</p>
          
          <div className="features-grid">
            {[
              {
                icon: "📚",
                title: "Comprehensive Courses",
                desc: "Access hundreds of courses across various disciplines"
              },
              {
                icon: "🎓",
                title: "Expert Instructors",
                desc: "Learn from industry professionals and academic experts"
              },
              {
                icon: "⏱️",
                title: "Flexible Learning",
                desc: "Study at your own pace, anytime and anywhere"
              },
              {
                icon: "📱",
                title: "Mobile Friendly",
                desc: "Access courses on any device with our responsive platform"
              },
              {
                icon: "📈",
                title: "Progress Tracking",
                desc: "Monitor your learning journey with detailed analytics"
              },
              {
                icon: "🏆",
                title: "Certification",
                desc: "Earn recognized certificates upon course completion"
              }
            ].map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="background-text">KNOWLEDGE</div>
      </section>

      {/* Courses Section */}
      <section className="courses-section" ref={coursesRef}>
        <div className="container">
          <h2 className="section-title">Popular Courses</h2>
          <p className="section-subtitle">Start learning with our most popular courses</p>
          
          <div className="courses-grid">
            {[
              {
                title: "Web Development Bootcamp",
                category: "Technology",
                duration: "8 Weeks",
                level: "Beginner"
              },
              {
                title: "Data Science Fundamentals",
                category: "Data",
                duration: "10 Weeks",
                level: "Intermediate"
              },
              {
                title: "Digital Marketing Mastery",
                category: "Marketing",
                duration: "6 Weeks",
                level: "Beginner"
              },
              {
                title: "Mobile App Development",
                category: "Technology",
                duration: "12 Weeks",
                level: "Advanced"
              }
            ].map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-badge">New</div>
                <div className="course-image"></div>
                <div className="course-content">
                  <span className="course-category">{course.category}</span>
                  <h3>{course.title}</h3>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <button className="course-button">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of students advancing their careers with our courses</p>
          <div className="cta-buttons">
            <button className="cta-button">Sign Up Free</button>
            <button className="cta-button outline">Browse Courses</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;