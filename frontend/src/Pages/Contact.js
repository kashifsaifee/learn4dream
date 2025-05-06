// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import '../Styles/Contact.css';
// import Footer from '../Components/Footer';


// const AnimatedForm = () => {
//   const pageRef = useRef(null);
//   const formRef = useRef(null);

//   useEffect(() => {
//     // Page-level animation: entire content slides up
//     gsap.fromTo(
//       pageRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
//     );

//     // Form entrance animation
//     gsap.fromTo(
//       formRef.current,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
//     );
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Submission animation
//     gsap.to(formRef.current, {
//       y: -5,
//       duration: 0.2,
//       repeat: 1,
//       yoyo: true,
//       ease: 'power1.inOut',
//     });

//     console.log('Form submitted');
//   };

//   return (
//     <>
//     <section className="contact-container" ref={pageRef}>
//       {/* Decorative Textures */}
//       <div className="texture-box texture-1"></div>
//       <div className="texture-box texture-2"></div>
//       <div className="texture-box texture-3"></div>

//       <div className="contact-content">
//         {/* Contact Info */}
//         <aside className="contact-info">
//           <h2>Get in Touch</h2>
//           <div className="info-section">
//             <h3>Email Us</h3>
//             <p>info@yourcompany.com</p>
//             <p>support@yourcompany.com</p>
//           </div>
//           <div className="info-section">
//             <h3>Call Us</h3>
//             <p>+1 (123) 456-7890</p>
//             <p>+1 (987) 654-3210</p>
//           </div>
//           <div className="info-section">
//             <h3>Visit Us</h3>
//             <p>123 Business Avenue</p>
//             <p>Suite 456, New York, NY 10001</p>
//           </div>
//         </aside>

//         {/* Contact Form */}
//         <div className="form-wrapper" ref={formRef}>
//           <form className="form-container" onSubmit={handleSubmit} noValidate>
//             <header className="form-header">
//               <h2>Send a Message</h2>
//               <p>We'll respond within 24 hours</p>
//             </header>

//             <div className="form-group">
//               <input type="text" name="name" placeholder="Full Name" required />
//             </div>
//             <div className="form-group">
//               <input type="email" name="email" placeholder="Email Address" required />
//             </div>
//             <div className="form-group">
//               <input type="tel" name="phone" placeholder="Phone Number" />
//             </div>
//             <div className="form-group">
//               <textarea name="message" placeholder="Your Message" required></textarea>
//             </div>

//             <button type="submit" className="submit-btn">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//     {/* Footer */}
//     <Footer />
//     </>
//   );
// };

// export default AnimatedForm;
import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { gsap } from 'gsap';
import Footer from '../Components/Footer';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #0f0f0f;
    font-family: 'Segoe UI', sans-serif;
  }
`;

const Page = styled.section`
  background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
  color: #ffffff;
  min-height: 120dvh;
  padding: 5rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

const Texture = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
  z-index: 0;

  &.texture-1 {
    width: 300px;
    height: 300px;
    background: #ff6ec4;
    top: -50px;
    left: -50px;
  }

  &.texture-2 {
    width: 400px;
    height: 400px;
    background: #7873f5;
    bottom: 0;
    right: -100px;
  }

  &.texture-3 {
    width: 250px;
    height: 250px;
    background: #00d2ff;
    top: 20%;
    left: 60%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const GlassPanel = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.header`
  margin-bottom: 1rem;
  h2 {
    font-size: 1.6rem;
    color: #03dac6;
  }

  p {
    color: #aaa;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  min-height: 120px;
  resize: none;
  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6ec4, #7873f5);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 110, 196, 0.4);
  }
`;

const ContactDetails = styled.div`
  h2 {
    color: #ff6ec4;
    margin-bottom: 1rem;
  }

  div {
    margin-bottom: 1.5rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    color: #bb86fc;
  }

  p {
    margin: 0.25rem 0;
  }
`;

const AnimatedForm = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.texture',
      { opacity: 0, scale: 0.5 },
      { opacity: 0.3, scale: 1, duration: 1, stagger: 0.2, ease: 'power2.out' },
      '-=0.8'
    );

    gsap.fromTo(
      formRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      <GlobalStyle />
      <Page ref={pageRef}>
        <Texture className="texture texture-1" />
        <Texture className="texture texture-2" />
        <Texture className="texture texture-3" />

        <Wrapper>
          <GlassPanel ref={formRef}>
            <Form onSubmit={handleSubmit} noValidate>
              <Header>
                <h2>Send Us a Message</h2>
                <p>We usually reply within 24 hours.</p>
              </Header>
              <Input type="text" name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Your Email" required />
              <Input type="tel" name="phone" placeholder="Phone Number" />
              <Textarea name="message" placeholder="Your Message" required />
              <Button type="submit">Submit</Button>
            </Form>
          </GlassPanel>

          <GlassPanel>
            <ContactDetails>
              <h2>Contact Info</h2>

              <div>
                <h4>Email</h4>
                <p>info@yourcompany.com</p>
                <p>support@yourcompany.com</p>
              </div>

              <div>
                <h4>Phone</h4>
                <p>+1 (123) 456-7890</p>
                <p>+1 (987) 654-3210</p>
              </div>

              <div>
                <h4>Office</h4>
                <p>123 Business Avenue</p>
                <p>Suite 456, New York, NY</p>
              </div>
            </ContactDetails>
          </GlassPanel>
        </Wrapper>
      </Page>
      <Footer />
    </>
  );
};

export default AnimatedForm;
