import { Box, Typography, Grid, Paper, Avatar, Button, Container } from "@mui/material";
import { School, FamilyRestroom, PersonPin, EmojiObjects, Public } from "@mui/icons-material";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  const sections = [
    {
      icon: <School fontSize="large" />,
      title: "For Students",
      description:
        "Gamified quizzes, interactive lessons, and personalized paths to keep students curious and motivated.",
    },
    {
      icon: <FamilyRestroom fontSize="large" />,
      title: "For Parents",
      description:
        "Track progress, set goals, and be a partner in your child’s learning journey with real-time insights.",
    },
    {
      icon: <PersonPin fontSize="large" />,
      title: "For Educators",
      description:
        "Access modern teaching tools, share resources, and create meaningful impact in every lesson you deliver.",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #fff7f1, #e0f2ff)",
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" align="center" fontWeight="bold" color="#FFA559" gutterBottom>
          About Learn4Dream
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 4,
            backgroundColor: "#FFA559",
            mx: "auto",
            mb: 4,
            borderRadius: 2,
          }}
        />
      </motion.div>

      {/* Intro */}
      <Typography
        variant="h6"
        align="center"
        maxWidth="800px"
        mx="auto"
        mb={6}
        sx={{ color: "#444", lineHeight: 1.8 }}
      >
        Learn4Dream is an innovative educational platform designed to make learning accessible,
        inspiring, and effective. We believe that learning should adapt to every individual—whether you're a
        curious student, a guiding parent, or a passionate educator.
      </Typography>

      {/* Feature Cards */}
      <Grid container spacing={4} justifyContent="center">
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionPaper
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
              sx={{
                p: 4,
                pt: 6,
                borderRadius: 4,
                backgroundColor: "#ffffffee",
                backdropFilter: "blur(8px)",
                textAlign: "center",
                position: "relative",
                overflow: "visible",
              }}
              elevation={4}
            >
              <Avatar
                sx={{
                  bgcolor: "#FFA559",
                  width: 56,
                  height: 56,
                  position: "absolute",
                  top: -28,
                  left: "calc(50% - 28px)",
                }}
              >
                {section.icon}
              </Avatar>
              <Typography variant="h6" fontWeight="bold" color="#FFA559" mb={2}>
                {section.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.6 }}>
                {section.description}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>

      {/* Mission & Vision */}
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <EmojiObjects fontSize="large" color="warning" />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Mission
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Our mission is to democratize quality education and build a platform where learning is tailored,
              trackable, and joyful. We aim to empower individuals with knowledge, curiosity, and the confidence
              to pursue their dreams.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Public fontSize="large" color="primary" />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Vision
            </Typography>
            <Typography sx={{ color: "#555" }}>
              We envision a world where learning is no longer limited by geography or background. By leveraging
              technology and creativity, we strive to build a connected community of learners, mentors, and innovators.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Journey Section */}
      <Container maxWidth="md" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#FFA559" mb={4}>
          Our Journey
        </Typography>
        <Typography align="center" sx={{ color: "#555", lineHeight: 1.8 }}>
          Founded in 2024, Learn4Dream started with a simple idea: to bridge the gap between traditional education
          and modern learners' needs. Today, we’ve impacted thousands of learners globally, collaborated with
          educational institutions, and created a platform that supports everyone—from early learners to career changers.
        </Typography>
      </Container>

      {/* Meet the Team (Optional) */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="#FFA559" mb={4}>
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 4 }}>
                <Avatar
                  src={`https://randomuser.me/api/portraits/lego/${i + 1}.jpg`}
                  sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                />
                <Typography fontWeight="bold">Team Member {i + 1}</Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Role or description of the team member's expertise and contribution to Learn4Dream.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        mt={10}
        textAlign="center"
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h5" fontWeight="medium" mb={2}>
          Ready to unlock your potential?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#FFA559",
            color: "#fff",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: "#ff8c1a",
            },
          }}
        >
          Get Started with Learn4Dream
        </Button>
      </Box>
    </Box>
  );
};

export default About;
