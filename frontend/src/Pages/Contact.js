import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfoIcon from '@mui/icons-material/Info';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const floatingElements = useRef([]); // Correcting to initialize as an array

  useEffect(() => {
    // Page-level animation
    gsap.fromTo(
      pageRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Form and info section animations
    gsap.fromTo(
      infoRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
    
    gsap.fromTo(
      formRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
    );

    // Floating animation for decorative elements
    floatingElements.current.forEach((el, index) => {
      gsap.to(el, {
        y: 10,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Input focus animations
    const inputs = gsap.utils.toArray(formRef.current.querySelectorAll('input, textarea')); // Using gsap.utils.toArray to select multiple elements
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.3,
          boxShadow: '0 5px 15px rgba(74, 108, 247, 0.2)'
        });
      });
      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.3,
          boxShadow: '0 2px 10px rgba(74, 108, 247, 0.1)'
        });
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enhanced submission animation
    gsap.to(formRef.current, {
      y: -10,
      duration: 0.2,
      repeat: 1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Floating particles effect on submit
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      particle.className = 'submit-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      formRef.current.appendChild(particle);

      gsap.to(particle, {
        y: -100,
        x: (Math.random() - 0.5) * 100,
        opacity: 0,
        duration: 1,
        onComplete: () => particle.remove()
      });
    }

    console.log('Form submitted');
  };

  return (
    <>
      <ContactContainer ref={pageRef}>
        {/* Floating decorative elements */}
        <FloatingOrb ref={el => floatingElements.current[0] = el} className="floating-orb orb-1" />
        <FloatingOrb ref={el => floatingElements.current[1] = el} className="floating-orb orb-2" />
        <FloatingOrb ref={el => floatingElements.current[2] = el} className="floating-orb orb-3" />
        <FloatingShape ref={el => floatingElements.current[3] = el} className="floating-shape shape-1" />
        <FloatingShape ref={el => floatingElements.current[4] = el} className="floating-shape shape-2" />

        <ContactContent>
          {/* Contact Info */}
          <ContactInfo ref={infoRef}>
            <h2>Get in Touch</h2>
            <div className="info-section">
              <InfoIcon className="icon-email" />
              <h3>Email Us</h3>
              <p>info@yourcompany.com</p>
              <p>support@yourcompany.com</p>
            </div>
            <div className="info-section">
              <InfoIcon className="icon-phone" />
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
              <p>+1 (987) 654-3210</p>
            </div>
            <div className="info-section">
              <InfoIcon className="icon-location" />
              <h3>Visit Us</h3>
              <p>123 Business Avenue</p>
              <p>Suite 456, New York, NY 10001</p>
            </div>
            
            <SocialLinks>
              <SocialIcon className="social-icon twitter" />
              <SocialIcon className="social-icon facebook" />
              <SocialIcon className="social-icon linkedin" />
              <SocialIcon className="social-icon instagram" />
            </SocialLinks>
          </ContactInfo>

          {/* Contact Form */}
          <FormWrapper ref={formRef}>
            <form className="form-container" onSubmit={handleSubmit} noValidate>
              <FormHeader>
                <h2>Send a Message</h2>
                <p>We'll respond within 24 hours</p>
              </FormHeader>

              <FormGroup>
                <input type="text" name="name" placeholder="Full Name" required />
                <FormUnderline />
              </FormGroup>
              <FormGroup>
                <input type="email" name="email" placeholder="Email Address" required />
                <FormUnderline />
              </FormGroup>
              <FormGroup>
                <input type="tel" name="phone" placeholder="Phone Number" />
                <FormUnderline />
              </FormGroup>
              <FormGroup>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <FormUnderline />
              </FormGroup>

              <SubmitBtn type="submit">
                <span>Send Message</span>
                <SubmitArrow />
              </SubmitBtn>
            </form>
          </FormWrapper>
        </ContactContent>
      </ContactContainer>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Enhanced Styled Components

const ContactContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f9faff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
`;

const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
  opacity: 0.6;
  z-index: 0;

  &.orb-1 {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, #003267 0%, transparent 70%);
    top: 10%;
    left: 5%;
  }

  &.orb-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #003267 0%, transparent 70%);
    bottom: 15%;
    right: 8%;
  }

  &.orb-3 {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, #00cec9 0%, transparent 70%);
    top: 60%;
    left: 25%;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  opacity: 0.1;
  z-index: 0;

  &.shape-1 {
    width: 100px;
    height: 100px;
    background: #003267;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    top: 20%;
    right: 15%;
  }

  &.shape-2 {
    width: 80px;
    height: 80px;
    background: #003267;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    bottom: 25%;
    left: 20%;
  }
`;

const ContactContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 1;
  position: relative;
`;

const ContactInfo = styled.aside`
  flex: 1;
  padding: 60px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #333;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #003267;
  }

  .info-section {
    display: flex;
    margin-bottom: 30px;
    align-items: center;

    .icon-email,
    .icon-phone,
    .icon-location {
      font-size: 35px;
      margin-right: 15px;
      color: #003267;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 5px;
      color: #003267;
    }

    p {
      font-size: 1rem;
      margin: 3px 0;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #003267;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.twitter {
    background-color: #1da1f2;
  }

  &.facebook {
    background-color: #1877f2;
  }

  &.linkedin {
    background-color: #0077b5;
  }

  &.instagram {
    background-color: #e1306c;
  }
`;

const FormWrapper = styled.div`
  flex: 2;
  padding: 60px;
  background: #ffffff;
`;

const FormHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
  
  h2 {
    font-size: 2.2rem;
    color: #003267;
  }

  p {
    font-size: 1.2rem;
    color: #777;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;

  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    background: #f7f7f7;
    transition: all 0.3s ease;
  }

  textarea {
    height: 150px;
    resize: none;
  }
`;

const FormUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #003267;
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.3s ease;
`;

const SubmitBtn = styled.button`
  background: linear-gradient(45deg, #00cec9, #003267);
  padding: 12px 30px;
  font-size: 1.2rem;
  border: none;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #003267, #00cec9);
  }
`;

const SubmitArrow = styled.div`
  margin-left: 10px;
  font-size: 1.5rem;
  transform: translateX(4px);
`;

export default Contact; 