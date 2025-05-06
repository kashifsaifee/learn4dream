// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Divider,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';


// // import Footer from '../Components/Footer';



// // import Footer from '../Components/Footer';


// const MotionPaper = motion(Paper);
// const MotionBox = motion(Box);

// const blogs = [
//   {
//     id: 1,
//     title: 'Top 10 Skills to Learn in 2025',
//     excerpt:
//       'Discover the most in-demand skills for the future and how Learn4Dream can help you master them.',
//     link: '/blogs/top-skills-2025',
//     image:
//       'https://dummyimage.com/400x250/007bff/fff&text=Skills+2025',
//   },
//   {
//     id: 2,
//     title: 'How to Build a Career in Data Science',
//     excerpt:
//       'Data Science is booming. Learn how to start your journey and land a job in this exciting field.',
//     link: '/blogs/data-science-career',
//     image:
//       'https://dummyimage.com/400x250/28a745/fff&text=Data+Science',
//   },
//   {
//     id: 3,
//     title: 'Web Development Roadmap for Beginners',
//     excerpt:
//       'Step-by-step roadmap to becoming a professional web developer in 2025.',
//     link: '/blogs/web-development-roadmap',
//     image:
//       'https://dummyimage.com/400x250/ffc107/000&text=Web+Dev',
//   },
// ];

// const Blogs = () => {
//   return (
//     <Box sx={{ overflowX: 'hidden' }}>
//       <MotionBox
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         sx={{
//           bgcolor: 'primary.main',
//           color: 'primary.contrastText',
//           py: 12,
//           textAlign: 'center',
//         }}
//       >
//         <Container>
//           <Typography variant="h2" fontWeight="bold" gutterBottom>
//             Explore Our Blogs
//           </Typography>
//           <Typography variant="h5" paragraph>
//             Stay updated with our expert insights, guides, and tips to help you
//             learn and grow in the digital world.
//           </Typography>
//           <Button variant="outlined" color="secondary" size="large">
//             Start Learning
//           </Button>
//         </Container>
//       </MotionBox>

//       <Box sx={{ py: 12, bgcolor: 'background.default' }}>
//         <Container>
//           <Grid container spacing={4}>
//             {blogs.map((blog, index) => (
//               <Grid item xs={12} md={4} key={blog.id}>
//                 <MotionPaper
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   whileHover={{ scale: 1.05 }}
//                   elevation={6}
//                   sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <Card sx={{ display: 'flex', flexDirection: 'column' }}>
//                     <CardMedia
//                       component="img"
//                       image={blog.image}
//                       alt={blog.title}
//                       sx={{
//                         height: 200,
//                         objectFit: 'cover',
//                         width: '100%',
//                       }}
//                     />
//                     <CardContent sx={{ flexGrow: 1 }}>
//                       <Typography
//                         variant="h5"
//                         fontWeight="bold"
//                         color="text.primary"
//                         gutterBottom
//                       >
//                         {blog.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {blog.excerpt}
//                       </Typography>
//                     </CardContent>
//                     <Divider />
//                     <Box sx={{ p: 2 }}>
//                       <Button
//                         component={Link}
//                         to={blog.link}
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                       >
//                         Read More
//                       </Button>
//                     </Box>
//                   </Card>
//                 </MotionPaper>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Blogs;
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Sample blogs
const blogs = [
  {
    id: 1,
    title: 'Top 10 Skills to Learn in 2025',
    excerpt: 'Discover the most in-demand skills for the future and how Learn4Dream can help you master them.',
    link: '/blogs/top-skills-2025',
    image: 'https://dummyimage.com/600x350/1e1e2f/ffffff&text=Skills+2025',
  },
  {
    id: 2,
    title: 'How to Build a Career in Data Science',
    excerpt: 'Data Science is booming. Learn how to start your journey and land a job in this exciting field.',
    link: '/blogs/data-science-career',
    image: 'https://dummyimage.com/600x350/20232a/ffffff&text=Data+Science',
  },
  {
    id: 3,
    title: 'Web Development Roadmap for Beginners',
    excerpt: 'Step-by-step roadmap to becoming a professional web developer in 2025.',
    link: '/blogs/web-development-roadmap',
    image: 'https://dummyimage.com/600x350/2f3542/ffffff&text=Web+Dev',
  },
];

const MotionCard = motion(Card);

const Blogs = () => {
  return (
    <Box sx={{ bgcolor: '#0e0e10', minHeight: '100vh', pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(to right, #1e3c72, #2a5298)',
          py: 12,
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Explore Our Blogs
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
            Learn, grow, and stay ahead with our expert insights and learning guides.
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ borderRadius: 20 }}>
            Start Learning
          </Button>
        </Container>
      </Box>

      {/* Blog Grid */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} md={4} key={blog.id}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: 5,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#bbb' }}>
                    {blog.excerpt}
                  </Typography>
                </CardContent>
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                <Box sx={{ p: 2 }}>
                  <Button
                    fullWidth
                    component={Link}
                    to={blog.link}
                    variant="outlined"
                    color="secondary"
                    sx={{
                      borderRadius: 20,
                      color: '#fff',
                      borderColor: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
