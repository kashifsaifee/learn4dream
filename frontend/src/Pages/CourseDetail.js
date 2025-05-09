import React, { useState } from 'react';
import Review from './Review';
import {
  Box, Typography, Button, Grid, Avatar, Accordion, AccordionSummary, AccordionDetails,
  Card, CardContent, Chip, Rating
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const CourseDetail = () => {
  const [tab, setTab] = useState('info');


  return (
    <Box p={8} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Section */}
      <Chip label="Graphic Design" color="success" />
      <Typography variant="h4" fontWeight="bold" mt={2}>
        Essential Beginners UX/UI Core Course For You 2023
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Design tutorial will help you learn quickly and thoroughly.
      </Typography>

      <Box display="flex" alignItems="center" gap={2} mt={2}>
        <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
        <Typography variant="body2">Adrian Kok</Typography>
        <Typography variant="body2">10h 30m</Typography>
        <Typography variant="body2">48</Typography>
        <Rating value={4.8} precision={0.1} readOnly size="small" />
      </Box>

      <Grid container mt={3} backgroundColor='white'>
        {/* Left Section */}
        <Grid item xs={12} md={8}>
          <Box sx={{ color: 'black', p: 3 }}>
            {/* Tabs */}
            <Box display="flex" gap={6} mt={3} mb={2}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ cursor: 'pointer', color: tab === 'info' ? 'primary.main' : 'text.secondary' }}
                onClick={() => setTab('info')}
              >
                Course Information
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ cursor: 'pointer', color: tab === 'reviews' ? 'primary.main' : 'text.secondary' }}
                onClick={() => setTab('reviews')}
              >
                Reviews
              </Typography>
            </Box>

            {tab === 'info' ? (
              <>
                <Typography variant="body2" fontSize="16px" color='black' padding={2} border='2px' width={900}>
                  <p>
                    This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscingawr elit onec odio. Quisque volutpat mattis eros.

                  </p>
                  <p> You’ll be exposed to principles and strategies, but, more importantly, you’ll learn how to actually apply these abstract concepts by coding three different websites for three very different audiences. Lorem ipsum is dummy text used in laying out print, graphic or web designs Lorem ipsum
                  </p>
                </Typography>

                {/* What Will You Learn */}
                <Typography variant="h6" mt={4}>What Will You Learn?</Typography>
                <Grid container spacing={2} mt={1}>
                  {[
                    'Become a UX designer.',
                    'You will be able to add UX design.',
                    'Become a UI designer.',
                    'Learn to design mobile.',
                    'Create your first UX brief persona.',
                    'Create quick wireframes.',
                    'Build a UX project from beginning to end.',
                    'All the techniques used by UX professionals.'
                  ].map((item, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Typography><CheckCircleIcon color="success" fontSize="small" /> {item}</Typography>
                    </Grid>
                  ))}
                </Grid>

                {/* Requirements */}
                <Typography variant="h6" mt={4}>Requirements</Typography>
                <Grid container spacing={2} mt={1}>
                  {[
                    'Become a UX designer.',
                    'You will be able to add UX design.',
                    'Become a UI designer.',
                    'Create quick wireframes.',
                    'Downloadable exercise files.'
                  ].map((item, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Typography><CheckCircleIcon color="primary" fontSize="small" /> {item}</Typography>
                    </Grid>
                  ))}
                </Grid>

                {/* Curriculum */}
                <Typography variant="h6" mt={4}>Curriculum</Typography>
                {['Introduction', 'Capacilance and Inductance', 'Final Audit'].map((title, i) => (
                  <Accordion key={i} sx={{ mt: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>Lesson details go here...</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}

                {/* Instructors */}
                <Typography variant="h6" mt={4}>Your Instructors</Typography>
                {[{
                  name: 'Robert Smith',
                  role: 'Graphic Design',
                  students: 1135,
                  rating: 4.2,
                  image: 'https://randomuser.me/api/portraits/men/45.jpg'
                }, {
                  name: 'Ketty Roagh',
                  role: 'Web Developer',
                  students: 1345,
                  rating: 4.2,
                  image: 'https://randomuser.me/api/portraits/women/44.jpg'
                }].map((inst, i) => (
                  <Card key={i} sx={{ mt: 2 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={inst.image} sx={{ width: 60, height: 60 }} />
                      <Box>
                        <Typography fontWeight="bold">{inst.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{inst.role}</Typography>
                        <Typography variant="body2">
                          <PersonIcon fontSize="small" /> {inst.students} Students
                        </Typography>
                        <Rating value={inst.rating} readOnly size="small" />
                      </Box>
                      <Button variant="outlined" sx={{ marginLeft: 'auto' }}>See More</Button>
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : (
              <Review />
            )}
          </Box>
        </Grid>

        {/* Right Section */}
        {/* <Grid item xs={12} md={4}>
          <Card>
=======
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, maxWidth: '1300px', mx: 'auto', bgcolor: '#fafafa' }}>
      {/* Header */}
        <Chip label="Graphic Design" color="primary" variant="outlined" />
        <Typography variant="h4" fontWeight="bold" mt={2}>
          Essential Beginners UX/UI Core Course For You 2023
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Design tutorial will help you learn quickly and thoroughly.
        </Typography>

        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
          <Typography variant="body2">Adrian Kok</Typography>
          <Typography variant="body2">10h 30m</Typography>
          <Typography variant="body2">48 Lectures</Typography>
          <Rating value={4.8} precision={0.1} readOnly size="small" />
        </Box>

        <Grid container spacing={4} mt={4}>
          {/* Left Section */}
          <Grid item xs={12} md={8}>
            <Box bgcolor="white" p={4} borderRadius={3} boxShadow={2}>
              {/* Tabs */}
              <Box display="flex" gap={4} borderBottom="1px solid #ddd" pb={1}>
                {['info', 'reviews'].map((label) => (
                  <Typography
                    key={label}
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{
                      cursor: 'pointer',
                      color: tab === label ? 'primary.main' : 'text.secondary',
                      borderBottom: tab === label ? '2px solid' : 'none',
                      pb: 0.5
                    }}
                    onClick={() => setTab(label)}
                  >
                    {label === 'info' ? 'Course Information' : 'Reviews'}
                  </Typography>
                ))}
              </Box>

              {tab === 'info' ? (
                <>
                  {/* Description */}
                  <Typography mt={3} color="text.primary" fontSize="16px">
                    This tutorial will help you learn quickly and thoroughly. Lorem ipsum is dummy text used in laying out print, graphic or web designs.
                  </Typography>
                  <Typography mt={2}>
                    You'll learn how to apply principles by coding three websites for different audiences. Lorem ipsum is dummy text used in laying out print, graphic or web designs.
                  </Typography>

                  {/* What You Will Learn */}
                  <Typography variant="h6" mt={4}>What Will You Learn?</Typography>
                  <Grid container spacing={2} mt={1}>
                    {[
                      'Become a UX designer.',
                      'Add UX design to your skillset.',
                      'Design mobile interfaces.',
                      'Build a UX project from scratch.',
                      'Create wireframes and personas.',
                      'Apply professional techniques.'
                    ].map((item, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Typography>
                          <CheckCircleIcon fontSize="small" color="success" sx={{ mr: 1 }} />
                          {item}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Requirements */}
                  <Typography variant="h6" mt={4}>Requirements</Typography>
                  <Grid container spacing={2} mt={1}>
                    {[
                      'Basic computer knowledge.',
                      'Creative mindset.',
                      'Stable internet connection.',
                      'Downloadable resources access.'
                    ].map((item, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Typography>
                          <CheckCircleIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
                          {item}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Curriculum */}
                  <Typography variant="h6" mt={4}>Curriculum</Typography>
                  {['Introduction', 'User Psychology', 'Wireframing & Prototyping'].map((title, i) => (
                    <Accordion key={i} sx={{ mt: 1 }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography color="text.secondary">Lesson details go here...</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}

                  {/* Instructors */}
                  <Typography variant="h6" mt={4}>Instructors</Typography>
                  {[
                    {
                      name: 'Robert Smith',
                      role: 'UX Specialist',
                      students: 1135,
                      rating: 4.2,
                      image: 'https://randomuser.me/api/portraits/men/45.jpg'
                    },
                    {
                      name: 'Ketty Roagh',
                      role: 'UI Developer',
                      students: 1345,
                      rating: 4.6,
                      image: 'https://randomuser.me/api/portraits/women/44.jpg'
                    }
                  ].map((inst, i) => (
                    <Card key={i} sx={{ mt: 2 }}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar src={inst.image} sx={{ width: 60, height: 60 }} />
                        <Box>
                          <Typography fontWeight="bold">{inst.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{inst.role}</Typography>
                          <Typography variant="body2">
                            <PersonIcon fontSize="small" /> {inst.students} Students
                          </Typography>
                          <Rating value={inst.rating} readOnly size="small" />
                        </Box>
                        <Button variant="outlined" sx={{ marginLeft: 'auto' }}>See More</Button>
                      </CardContent>
                    </Card>
                  ))}
                </>
              ) : (
                <Review />
              )}
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 4 }}>

              <CardContent>
                <Box textAlign="center">
                  <PlayCircleOutlineIcon sx={{ fontSize: 80 }} color="primary" />
                  <Typography variant="h6" mt={1}>
                    $25.00 <del style={{ color: '#999', marginLeft: 8 }}>$84.00</del>
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    ENROLL NOW
                  </Button>
                </Box>
                <List dense sx={{ mt: 2 }}>
                  {[
                    ['Duration', '52 Hours'],
                    ['Estimated Seats', '290'],
                    ['Joined', '2450'],
                    ['Language', 'English'],
                    ['Category', 'Design']
                  ].map(([label, value], i) => (
                    <ListItem key={i}>
                      <ListItemText primary={label} secondary={value} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>


            {/* Related Courses
          <Box   sx={{bgcolor: "lightcement", border: '2px solid grey', borderRadius:5, height:355, width:200, padding:2  }} color={'black'}>
            <Typography variant="h6">Related Courses</Typography>

          {/* Related Courses */}
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 3, boxShadow: 1 }}>
              <Typography variant="h6" mb={2}>Related Courses</Typography>

              {[
                ['Mastering Data', '$22.00'],
                ['Make Edition', '$18.00'],
                ['The Potentially Accessibility', '$11.00'],
                ['Create Quick Wireframes', '$11.00']
              ].map(([title, price], i) => (
                <Box key={i} mb={2}>
                  <Typography variant="body2" fontWeight="bold">{title}</Typography>
                  <Typography variant="caption" color="text.secondary">{price}</Typography>
                  <Divider sx={{ mt: 1 }} />

                </Box> */}
              {/* ))} */}
              {/* </Box> */}
          </Grid>
          {/* </Grid> */}
        </Box>
        );

    </Box>
  ))
}
          </Box >
        </Grid >
      </Grid >
    </Box >
  );

};

export default CourseDetail;
