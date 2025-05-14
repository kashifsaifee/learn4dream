import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";
import DotHoverButton from "../Components/DotHoverButton";
import { Favorite, Forest, BeachAccessRounded } from "@mui/icons-material";
import AnimatedCard from "../Components/AnimatedCard";
import Lottie from "lottie-react";
import animationData from "../assets/animation/animation.json";


import {
  CodeIcon,
  DesignServicesIcon,
  LanguageIcon,
  SchoolIcon,
} from "../utils/icon";
import CountUp from "react-countup";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const theme = useTheme();
  const controls = useAnimation();
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

  // Testimonials data

  const testimonials = [
    {
      id: 1,
      quote:
        "This program completely transformed my career. The hands-on projects and expert mentorship gave me the confidence and skills to land my dream job at a top tech company.",
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
    },
    {
      id: 2,
      quote:
        "Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Mark Tanker",
      role: "DevOps Engineer atCalifornia",
    },
    {
      id: 3,
      quote:
        "The curriculum was perfectly balanced between theory and practice. I went from beginner to job-ready in just six months, and now I'm working remotely for an international company.",
      name: "Alex Chen",
      role: "Frontend Developer at Shopify",
    },
  ];

  // Animated cards data

  const cardData = [
    {
      id: 1,
      icon: <Favorite />,
      title: "Data Science",
      description:
        "Data science is the study of data to extract meaningful insights for business",
    },
    {
      id: 2,
      icon: <BeachAccessRounded />,
      title: "Web Development",
      description:
        "Build responsive and interactive websites using modern technologies.",
    },
    {
      id: 3,
      icon: <Forest />,
      title: "AI & Machine Learning",
      description:
        "Learn how to build intelligent systems that learn from data and improve over time.",
    },
  ];

  // Programs data
  const programs = [
    {
      title: "Web Dev",
      description: "Master front-end and back-end development skills.",
      image: "webdev.jpg",
      icon: <CodeIcon sx={{ color: "#1976d2", mr: 1 }} />,
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive and aesthetic digital experiences.",
      image: "design.jpg",
      icon: <DesignServicesIcon sx={{ color: "#9c27b0", mr: 1 }} />,
    },
    {
      title: "AI-ML",
      description: "Build intelligent systems using AI and machine learning.",
      image: "languages.jpg",
      icon: <LanguageIcon sx={{ color: "#ff9800", mr: 1 }} />,
    },
    {
      title: "Data Science",
      description: "Analyze and visualize data to drive business decisions.",
      image: "support.jpg",
      icon: <SchoolIcon sx={{ color: "#2e7d32", mr: 1 }} />,
    },
  ];

  // Statistics data
  const stats = [
    { label: "Happy Clients", value: 10, suffix: "+" },
    { label: "Projects Completed", value: 35, suffix: "+" },
    { label: "Team Members", value: 12, suffix: "+" },
    { label: "Years of Experience", value: 5, suffix: "+" },
  ];
  // Lottie animation reference
 const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

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

    cardsRef.current.forEach((card) => {
      if (!card) return;

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
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
    <Box sx={{ overflowX: "auto", width: "100%" }}>
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at center,rgb(255, 255, 255) 0%, #ffffff 80%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left Side - Text and Buttons */}
            <Box
              sx={{
                flex: 1,
                zIndex: 0,
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3,
                    background:
                      "linear-gradient(90deg,rgb(78, 133, 185), rgba(0, 0, 0, 0.65))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Learn4Dream
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    maxWidth: "600px",
                    mb: 4,
                    color: "rgba(0, 0, 0, 0.8)",
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  Join a community of learners and professionals who are
                  passionate about advancing their careers.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <DotHoverButton text="Get Started" />
                  <DotHoverButton text="Explore Programs" />
                </Box>
              </motion.div>
            </Box>

            {/* Right Side - Lottie Animation */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "500px",
              }}
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(to right, #ffffff, #e6f0f6)", // White background with a soft gradient
        }}
      >
        <Container>
          <motion.div
            className="scroll-trigger"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 8,
                fontWeight: 800,
                fontSize: "2.5rem",
                background: "linear-gradient(90deg,rgb(0, 0, 0),rgb(0, 0, 0))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Choose Us?
            </Typography>
          </motion.div>

          {/* Animated cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {cardData.map((card, index) => (
              <AnimatedCard
                key={index}
                image={card.image}
                title={card.title}
                subheader={card.subheader}
                description={card.description}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box
        sx={{
          minHeight: "70vh",
          py: 10,
          background: "linear-gradient(90deg,rgb(113, 120, 128), #7B848C)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Single transparent container for all counters */}
        <Card
          sx={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "space-between", // Align counters in a row
            width: "80%", // Adjust width as per your design
          }}
        >
          {/* Loop through the counters inside the single transparent box */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              style={{ flex: 1, textAlign: "center" }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#ffffff",
                    fontSize: "2.5rem",
                  }}
                >
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={3}
                    suffix={stat.suffix}
                  />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#12191F",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  {stat.label}
                </Typography>
              </CardContent>
            </motion.div>
          ))}
        </Card>
      </Box>

      {/* Programs Section */}
      <Box
        sx={{
          minHeight: "60vh",
          py: 8,
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
          background: "linear-gradient(90deg,#e3ddd2,rgb(255, 255, 255))",
        }}
      >
        <Container>
          <motion.div
            className="scroll-trigger"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 8,
                fontWeight: 800,
                fontSize: "2.5rem",
                background: "linear-gradient(90deg,rgb(0, 0, 0),rgb(0, 0, 0))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Programs
            </Typography>
          </motion.div>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
            wrap="nowrap"
          >
            {programs.map((program, index) => (
              <Grid
                item
                xs={8}
                sm={6}
                md={3}
                key={index}
                sx={{ display: "flex" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ width: "100%", display: "flex" }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      width: "100%",
                      borderRadius: 4,
                      background: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      overflow: "hidden",
                      padding: 0,
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexGrow: 1,
                        p: 3,
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          justifyContent: "center",
                        }}
                      >
                        <Box sx={{ fontSize: "2rem" }}>{program.icon}</Box>

                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {program.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            px: 1,
                          }}
                        >
                          {program.description}
                        </Typography>
                      </Box>

                      <Box sx={{ mt: 3 }}>
                        <Button
                          variant="outlined"
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
          py: 8,
          backgroundColor: "background.paper",
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
              What Our Students Say
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <motion.div
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
                      boxShadow: "0 8px 32px rgba(36, 50, 64, 0.3)",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 0,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "-2px",
                        left: "-2px",
                        right: "-2px",
                        bottom: "-2px",
                        background:
                          "linear-gradient(135deg, #243240, #394653, #4f5a66, #656f79, #7b848c, #e3ddd2)",
                        backgroundSize: "400%",
                        borderRadius: "18px",
                        zIndex: 0,
                        opacity: 0,
                        transition: "opacity 0.4s ease-in-out",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "2px",
                        left: "2px",
                        right: "2px",
                        bottom: "2px",
                        backgroundColor: "#fff",
                        borderRadius: "14px",
                        zIndex: 1,
                      },
                      "&:hover::before": {
                        animation: "shimmerBorder 6s linear infinite",
                        opacity: 1,
                      },
                      "& > *": {
                        position: "relative",
                        zIndex: 2,
                      },
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
                        color: "primary.main",
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
                      {testimonial.quote}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: "grey.300",
                          mr: 2,
                        }}
                      />

                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {testimonial.role}
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

      {/* Marquee Section - Updated Version */}

      <Box
        sx={{
          py: 1,
          backgroundColor: "white",
          position: "relative",
          overflow: "hidden",
          "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 100,
            zIndex: 2,
          },
          "&:before": {
            left: 0,
            background: "linear-gradient(to right, white, transparent)",
          },
          "&:after": {
            right: 0,
            background: "linear-gradient(to left, white, transparent)",
          },
        }}
      />

      <Box
        sx={{
          pt: 4,
          pb: 4,
          backgroundColor: "rgb(223, 223, 223)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 60, // reduced width of gradient fade
            zIndex: 2,
            pointerEvents: "none",
          },
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
              gap: { xs: 3, md: 3 },
              padding: "0 1rem",
              whiteSpace: "nowrap",
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <Box
                key={`${index}-${
                  typeof company === "string"
                    ? company
                    : JSON.stringify(company)
                }`}
                sx={{
                  px: 1.5,
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    right: -10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                  },
                  "&:last-of-type:after": {
                    display: "none",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: "#243240",
                    fontSize: { xs: "2rem", md: "1.2rem" },
                    transition: "all 0.2s ease",
                    lineHeight: 1,
                    "&:hover": {
                      color: "primary.main",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {typeof company === "string" ? company : company.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 15,
          background: "linear-gradient(to bottom, #fff7f1, #e0f2ff)",
          color: "black",
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
                maxHeight: "100vh",
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

              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <DotHoverButton text="Enroll Now" />
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
