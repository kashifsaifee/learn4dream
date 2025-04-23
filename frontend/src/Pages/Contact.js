import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../Styles/Contact.css';

const AnimatedForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // GSAP animations for form entrance
    gsap.from(formRef.current, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    
    // Add submission animation
    gsap.to(formRef.current, {
      y: -10,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });
  };

  return (
    <div className="contact-container">
      {/* Subtle texture elements */}
      <div className="texture-box texture-1"></div>
      <div className="texture-box texture-2"></div>
      <div className="texture-box texture-3"></div>
      
      <div className="contact-content">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
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
        </div>

        {/* Right Side - Form */}
        <div className="form-wrapper" ref={formRef}>
          <div className="form-container">
            <div className="form-header">
              <h2>Send a Message</h2>
              <p>We'll respond within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Full Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email Address" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Phone Number" 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedForm;