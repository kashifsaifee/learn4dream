import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { gsap } from "gsap";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const ContactSection = () => {
  const iconRefs = useRef([]);
  const [openSnackbar, setOpenSnackbar] = useState(false); // ✨ For success alert

  useEffect(() => {
    gsap.fromTo(
      iconRefs.current,
      { y: 50, opacity: 0, scale: 0.3 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.2,
      }
    );
  }, []);
  const socialIcons = [
    {
      Icon: FaInstagram,
      color: "#E1306C",
      name: "Instagram",
    },
    {
      Icon: FaFacebookF,
      color: "#1877F2",
      name: "Facebook",
    },
    {
      Icon: FaLinkedinIn,
      color: "#0A66C2",
      name: "LinkedIn",
    },
    {
      Icon: FaTwitter,
      color: "#1DA1F2",
      name: "Twitter",
    },
  ];

  const handleCloseSnackbar = () => setOpenSnackbar(false); // ✨ Snackbar handler

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#ffffff",
          py: 6,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            maxWidth: 1100,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {/* Left Panel */}
          <Box
            sx={{
              bgcolor: "rgba(101, 128, 153, 0.64)",
              color: "white",
              flex: 1,
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "12px", // Rounded corners for the box
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)", // Soft shadow for depth
            }}
          >
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "0.5px",

                  color: "#243240",
                  animation: "fadeIn 1s ease-out",
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                mb={3}
                sx={{
                  fontWeight: "200",
                  color: "black",
                  animation: "fadeIn 1s ease-out 0.5s",
                  fontSize: "15px",
                }}
              >
                We’d love to hear from you. Whether it’s feedback or just a
                hello, feel free to reach out.
              </Typography>

              <Box mb={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#243240",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Address
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "black", fontSize: "14px" }}
                >
                  123 Main Street, Dream City
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#243240",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Phone No
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "black", fontSize: "14px" }}
                >
                  +1 234 567 8900 <br></br>
                  +1 234 567 8900
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography variant="body2" sx={{ color: "black" }}>
                  <Box mb={4}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "#243240",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Visit Us
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black", fontSize: "14px" }}
                    >
                      Mon - Fri, 9am - 6pm{" "}
                    </Typography>
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* social Icons */}
            <Box mt={3} display="flex" gap={3} justifyContent="flex-start">
              {socialIcons.map(({ Icon, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "src",
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.2,
                    color: color,
                    transition: { type: "src", stiffness: 300 },
                  }}
                  style={{
                    color: "#243240",
                    fontSize: "20px",
                    cursor: "pointer",
                    display: "inline-flex",
                  }}
                >
                  <Icon />
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Right Panel */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1.2,
              p: { xs: 3, md: 5 },
              bgcolor: "white",
              backdropFilter: "blur(1px)",
            }}
          >
            <Typography variant="h4" mb={4} fontWeight="bold">
              Contact Us
            </Typography>

            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form Submitted", values);
                resetForm();
                setOpenSnackbar(true);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
              }) => (
                <Form>
                  <Grid container spacing={2} direction="column">
                    {[
                      { name: "name", label: "Name" },
                      { name: "email", label: "Email" },
                      { name: "phone", label: "Phone Number" },
                    ].map(({ name, label }) => (
                      <Grid item xs={8} key={name}>
                        <TextField
                          fullWidth
                          label={label}
                          name={name}
                          value={values[name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched[name] && Boolean(errors[name])}
                          helperText={touched[name] && errors[name]}
                          variant="outlined"
                          InputLabelProps={{ shrink: true }} // ✨ Floating label
                        />
                      </Grid>
                    ))}

                    <Grid item xs={8}>
                      <TextField
                        fullWidth
                        multiline
                        rows={2}
                        label="Message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>

                    {/* submit button */}
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isSubmitting}
                          sx={{
                            py: 0.8,
                            fontWeight: "bold",
                            borderRadius: "5px",
                            fontSize: "15px",
                            textTransform: "none",
                            bgcolor: "#243240",
                            "&:hover": {
                              bgcolor: "#7F93A6",
                            },
                            width: "200px", // Set a fixed width
                            margin: "0 auto", // Center the button
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send message"}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>

            {/* ✨ Snackbar */}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                severity="success"
                onClose={handleCloseSnackbar}
                sx={{ width: "100%" }}
              >
                Message sent successfully!
              </Alert>
            </Snackbar>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ContactSection;
