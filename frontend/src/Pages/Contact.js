import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../Styles/Contact.css';
import Footer from '../Components/Footer';


const AnimatedForm = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Page-level animation: entire content slides up
    gsap.fromTo(
      pageRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Form entrance animation
    gsap.fromTo(
      formRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submission animation
    gsap.to(formRef.current, {
      y: -5,
      duration: 0.2,
      repeat: 1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    console.log('Form submitted');
  };

  return (
    <>
    <section className="contact-container" ref={pageRef}>
      {/* Decorative Textures */}
      <div className="texture-box texture-1"></div>
      <div className="texture-box texture-2"></div>
      <div className="texture-box texture-3"></div>

      <div className="contact-content">
        {/* Contact Info */}
        <aside className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-section">
            <h3>Email Us</h3>
            <p>info@yourcompany.com</p>
            <p>support@yourcompany.com</p>
          </div>
          <div className="info-section">
            <h3>Call Us</h3>
            <p>+1 (123) 456-7890</p>
            <p>+1 (987) 654-3210</p>
          </div>
          <div className="info-section">
            <h3>Visit Us</h3>
            <p>123 Business Avenue</p>
            <p>Suite 456, New York, NY 10001</p>
          </div>
        </aside>

        {/* Contact Form */}
        <div className="form-wrapper" ref={formRef}>
          <form className="form-container" onSubmit={handleSubmit} noValidate>
            <header className="form-header">
              <h2>Send a Message</h2>
              <p>We'll respond within 24 hours</p>
            </header>

            <div className="form-group">
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    {/* Footer */}
    <Footer />
    </>
  );
};

export default AnimatedForm;
