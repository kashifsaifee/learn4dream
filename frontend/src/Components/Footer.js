// import React from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Divider,
//   TextField,
//   Button,
//   IconButton
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   LinkedIn,
//   YouTube,
//   Email,
//   Phone,
//   LocationOn
// } from '@mui/icons-material';

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: 'primary.main',
//         color: 'primary.contrastText',
//         py: 6,
//         mt: 'auto'
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Brand & Socials */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Learn4Dream
//             </Typography>
//             <Typography variant="body2">
//               Empowering students through accessible education since 2023.
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               {[
//                 { icon: Facebook, label: 'Facebook', link: '#' },
//                 { icon: Twitter, label: 'Twitter', link: '#' },
//                 { icon: Instagram, label: 'Instagram', link: '#' },
//                 { icon: LinkedIn, label: 'LinkedIn', link: '#' },
//                 { icon: YouTube, label: 'YouTube', link: '#' }
//               ].map(({ icon: Icon, label, link }, index) => (
//                 <IconButton
//                   key={index}
//                   aria-label={label}
//                   color="inherit"
//                   href={link}
//                   sx={{
//                     mr: 1,
//                     '&:hover': {
//                       color: 'secondary.main'
//                     }
//                   }}
//                 >
//                   <Icon />
//                 </IconButton>
//               ))}
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Quick Links
//             </Typography>
//             <Box component="ul" sx={{ listStyle: 'none', pl: 0, m: 0 }}>
//               {[
//                 { text: 'Courses', to: './courses' },
//                 { text: 'About Us', to: './about' },
//                 { text: 'Blog', to: './blog' },
//                 { text: 'Contact', to: './contact' },
//                 { text: 'Privacy Policy', to: './privacy' }
//               ].map(({ text, to }) => (
//                 <li key={text}>
//                   <Link
//                     to={to}
//                     style={{
//                       display: 'block',
//                       padding: '4px 0',
//                       textDecoration: 'none',
//                       color: 'inherit'
//                     }}
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Contact Us
//             </Typography>
//             <Box component="ul" sx={{ listStyle: 'none', pl: 0, m: 0 }}>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
//                 <Email sx={{ mr: 1 }} />
//                 <Typography variant="body2">contact@learn4dream.com</Typography>
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
//                 <Phone sx={{ mr: 1 }} />
//                 <Typography variant="body2">+1 (123) 456-7890</Typography>
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center' }}>
//                 <LocationOn sx={{ mr: 1 }} />
//                 <Typography variant="body2">123 Education St, Knowledge City</Typography>
//               </li>
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Newsletter
//             </Typography>
//             <Typography variant="body2">
//               Subscribe for updates and resources.
//             </Typography>
//             <Box component="form" sx={{ display: 'flex', mt: 2 }}>
//               <TextField
//                 variant="outlined"
//                 placeholder="Your Email"
//                 size="small"
//                 fullWidth
//                 sx={{
//                   backgroundColor: 'background.paper',
//                   borderRadius: '4px 0 0 4px',
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': { borderColor: 'transparent' }
//                   }
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 sx={{ borderRadius: '0 4px 4px 0' }}
//               >
//                 Subscribe
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />

//         <Typography variant="body2" align="center">
//           © {new Date().getFullYear()} Learn4Dream. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;



import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from '@mui/icons-material';
import {useTheme} from '@mui/material';
const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: '#fdfdfd',
        borderTop: '1px solid #e0e0e0',
        py: 8,
        mt: 10,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        {/* Top section */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={8}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          {/* Brand */}
          <Box>
            {/* <Typography variant="h5" fontWeight="bold"  color='primary.main' gutterBottom fontSize="1.6rem">
              Learn4Dream
            </Typography> */}
              <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        textDecoration: 'none',
                      }}
                      component={Link}
                      to="/"
                    >
                      Learn<span style={{ color: theme.palette.secondary.main }}>4</span>Dream
                    </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={300} fontSize="1rem">
              Making quality education accessible for everyone, everywhere.
            </Typography>
          </Box>

          {/* Links */}
          <Stack direction="row" spacing={6}>
            <Box>
              <Typography variant="subtitle1" color='primary.main'  fontWeight="bold" gutterBottom fontSize="1.1rem">
                Explore
              </Typography>
              <Stack spacing={1}>
                {['Courses', 'About Us', 'Blog', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s/g, '')}`}
                    style={{
                      textDecoration: 'none',
                      color: '#1a202c',
                      fontSize: '1rem',
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography variant="subtitle1" color='primary.main' fontWeight="bold" gutterBottom fontSize="1.1rem">
                Support
              </Typography>
              <Stack spacing={1}>
                {['Privacy Policy', 'Terms of Service', 'Help'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s/g, '')}`}
                    style={{
                      textDecoration: 'none',
                      color: '#1a202c',
                      fontSize: '1rem',
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Stack>

          {/* Newsletter */}
          <Box sx={{ maxWidth: 320, width: '100%' }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom fontSize="1.1rem">
              Stay in the Loop
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2} fontSize="1rem">
              Subscribe to our newsletter for updates and resources.
            </Typography>
            <Box component="form" sx={{ display: 'flex' }}>
              <TextField
                size="small"
                placeholder="Your Email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: '#fff',
                  mr: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': { borderColor: '#ccc' },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: '8px', px: 3, textTransform: 'none', fontSize: '0.95rem' }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Stack>

        {/* Divider */}
        <Divider sx={{ my: 5 }} />

        {/* Bottom section */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="#4b5563" textAlign="center" mt="7" display="block" width="100%" fontSize="0.95rem">
            © {new Date().getFullYear()} Learn4Dream. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            {[Facebook, Twitter, Instagram, LinkedIn, YouTube].map((Icon, idx) => (
              <IconButton
                key={idx}
                sx={{
                  border: '1px solid #ccc',
                  color: '#444',
                  backgroundColor: '#fff',
                  '&:hover': {
                    color: '#1976d2',
                    backgroundColor: '#f1f1f1',
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
