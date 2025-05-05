import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";
import { useInView } from "react-intersection-observer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMounted, setIsMounted] = useState(false);

  // Company logos for marquee
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Apple",
    "Facebook",
    "Tesla",
    "Adobe",
    "IBM",
    "Intel",
  ];

  // Features data
  const features = [
    {
      title: "Interactive Learning",
      description: "Engage with hands-on projects and real-world scenarios.",
      icon: "📚",
    },
    {
      title: "Expert Mentors",
      description:
        "Learn from industry professionals with years of experience.",
      icon: "👨‍🏫",
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of learners and professionals.",
      icon: "👥",
    },
    {
      title: "Career Growth",
      description: "Get the skills you need to advance in your career.",
      icon: "📈",
    },
  ];

  // Programs data
  const programs = [
    {
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, and modern frameworks.",
      image: "https://source.unsplash.com/400x300/?web,development",
    },
    {
      title: "Data Science",
      description: "Learn data analysis, visualization, and machine learning.",
      image: "https://source.unsplash.com/400x300/?data,science",
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive and aesthetic digital experiences.",
      image: "https://source.unsplash.com/400x300/?design,ui",
    },
    {
      title: "Cloud Computing",
      description: "Explore AWS, Azure, and cloud architecture best practices.",
      image: "https://source.unsplash.com/400x300/?cloud,computing",
    },
  ];

  // Initialize animations only after component mounts
  useEffect(() => {
    setIsMounted(true);

    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Hero section animations
  useEffect(() => {
    if (!isMounted) return;

    // Framer Motion animation
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });

    // GSAP grid animation
    const gridItems = gsap.utils.toArray(".grid-item");
    gsap.from(gridItems, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Anime.js floating elements
    anime({
      targets: ".floating-element",
      translateY: [-10, 10],
      duration: 3000,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
  }, [isMounted, controls]);

  // Marquee animation
  useEffect(() => {
    if (!isMounted || !marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const content = marquee.firstChild;
    const contentWidth = content.offsetWidth;

    // Duplicate content for seamless looping
    content.innerHTML += content.innerHTML;

    gsap.to(content, {
      x: -contentWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, [isMounted]);

  // 3D card hover effects
  useEffect(() => {
    if (!isMounted || !cardsRef.current.length) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      card.addEventListener("mousemove", (e) => {
        const x = e.clientX - card.getBoundingClientRect().left;
        const y = e.clientY - card.getBoundingClientRect().top;

        const centerX = card.offsetWidth / 2;
        const centerY = card.offsetHeight / 2;

        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;

        gsap.to(card, {
          rotationX: angleX,
          rotationY: angleY,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.5,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          ease: "power2.out",
          duration: 0.5,
        });
      });
    });
  }, [isMounted]);

  // Scroll-triggered animations
  useEffect(() => {
    if (!isMounted) return;

    gsap.utils.toArray(".scroll-trigger").forEach((element, i) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
      });
    });
  }, [isMounted]);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at center, #1a1a1a 0%, #000 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Animated grid background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(20, 1fr)",
            gridTemplateRows: "repeat(20, 1fr)",
            zIndex: 0,
            opacity: 0.2,
          }}
        >
          {Array.from({ length: 400 }).map((_, i) => (
            <Box
              key={i}
              className="grid-item"
              sx={{
                border: "1px solid rgba(255, 255, 255, 0.05)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>

        {/* Floating elements */}
        <Box
          className="floating-element"
          sx={{
            position: "absolute",
            width: 100,
            height: 100,
            background:
              "radial-gradient(circle, rgba(100, 200, 255, 0.8) 0%, rgba(100, 200, 255, 0) 70%)",
            borderRadius: "50%",
            top: "20%",
            left: "10%",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />
        <Box
          className="floating-element"
          sx={{
            position: "absolute",
            width: 150,
            height: 150,
            background:
              "radial-gradient(circle, rgba(255, 100, 200, 0.6) 0%, rgba(255, 100, 200, 0) 70%)",
            borderRadius: "50%",
            bottom: "15%",
            right: "10%",
            filter: "blur(25px)",
            zIndex: 0,
          }}
        />

        {/* Hero content */}
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            ref={ref}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                padding: theme.spacing(4),
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                  background: "linear-gradient(90deg, #fff, #aaa)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Transform Your Career With Cutting-Edge Skills
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  mb: 4,
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                Join thousands of professionals who have accelerated their
                careers with our industry-leading programs and mentorship.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    padding: "12px 32px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow: "0 4px 20px rgba(0, 150, 255, 0.3)",
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    padding: "12px 32px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderWidth: "2px",
                    "&:hover": { borderWidth: "2px" },
                  }}
                >
                  Explore Programs
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

     

      {/* Features Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container>
          <motion.div
            className="scroll-trigger"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 8,
                fontWeight: 700,
              }}
            >
              Why Choose Us?
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  className="scroll-trigger"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: "2rem",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          mb: 3,
                          fontSize: "3rem",
                        }}
                      >
                        {feature.icon}
                      </Typography>

                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                        }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      

     {/* Programs Section */}
<Box
  sx={{
    minHeight: "100vh",
    py: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
  }}
>
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 8,
          fontWeight: 700,
        }}
      >
        Our Programs
      </Typography>
    </motion.div>

    <Grid container spacing={4} justifyContent="center">
      {programs.map((program, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ width: "100%" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={program.image}
                alt={program.title}
                sx={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  p: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {program.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 2,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {program.description}
                </Typography>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderRadius: "30px",
                      fontWeight: 600,
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


      

      {/* Testimonials Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container>
          <motion.div
            className="scroll-trigger"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 8,
                fontWeight: 700,
              }}
            >
              What Our Students Say
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {[1, 2, 3].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  className="scroll-trigger"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      padding: "2rem",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: 100,
                        height: 100,
                        background:
                          "radial-gradient(circle, rgba(0, 150, 255, 0.1) 0%, rgba(0, 150, 255, 0) 70%)",
                        borderRadius: "50%",
                        transform: "translate(50%, -50%)",
                      }}
                    />

                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontSize: "4rem",
                        lineHeight: 1,
                        color: theme.palette.primary.main,
                        opacity: 0.2,
                      }}
                    >
                      "
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                        fontStyle: "italic",
                      }}
                    >
                      This program completely transformed my career. The
                      hands-on projects and expert mentorship gave me the
                      confidence and skills to land my dream job at a top tech
                      company.
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: theme.palette.grey[300],
                          mr: 2,
                        }}
                      />

                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          Sarah Johnson
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          Software Engineer at Google
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

       {/* Marquee Section */}
       <Box
        sx={{
          py: 4,
          backgroundColor: theme.palette.background.default,
          overflow: "hidden",
        }}
      >
        <Box
          ref={marqueeRef}
          sx={{
            display: "flex",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "0 2rem",
              whiteSpace: "nowrap",
            }}
          >
            {companies.concat(companies).map((company, index) => (
              <Typography
                key={`${company}-${index}`}
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.secondary,
                  opacity: 0.8,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {company}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 15,
          background: "linear-gradient(135deg, #0066ff 0%, #00ccff 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            zIndex: 0,
          }}
        />

        <Container>
          <motion.div
            className="scroll-trigger"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Ready to Transform Your Career?
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 5,
                  opacity: 0.9,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                Join thousands of professionals who have accelerated their
                careers with our industry-leading programs.
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  borderRadius: "50px",
                  padding: "16px 48px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
