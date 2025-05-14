import { Box, Typography, Grid, Paper, Avatar, Button } from "@mui/material";
import { School, FamilyRestroom, PersonPin } from "@mui/icons-material";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";

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
    <Layout>
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
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            color="#FFA559"
            gutterBottom
          >
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

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Typography
            variant="h6"
            align="center"
            maxWidth="800px"
            mx="auto"
            mb={6}
            sx={{ color: "#444", lineHeight: 1.8 }}
          >
            Learn4Dream is where passion meets purpose. Whether you're a student
            striving for success, a parent guiding the way, or an educator
            shaping minds—we're here for you. With interactive tools and a
            vibrant community, we’re reimagining learning to make it accessible,
            exciting, and empowering for all.
          </Typography>
        </motion.div>

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
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#FFA559"
                  mb={2}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#444", lineHeight: 1.6 }}
                >
                  {section.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

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
    </Layout>
  );
};

export default About;
