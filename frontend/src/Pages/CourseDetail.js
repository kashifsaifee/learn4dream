import React, { useState } from 'react';
import Review from './Review';
import {
    Box, Typography, Button, Grid, Avatar, Accordion, AccordionSummary, AccordionDetails,
    Card, CardContent, Chip, Rating
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';

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
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <PlayCircleOutlineIcon sx={{ fontSize: 80 }} color="primary" />
                <Typography variant="h6" mt={1}>$25.00 <del style={{ marginLeft: 8, color: '#999' }}>$84.00</del></Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  ENROLL THIS NOW
                </Button>
                <List dense sx={{ mt: 2, width: '100%' }}>
                  {[
                    ['Duration', '52 Hours'],
                    ['Estimated Seat', '290'],
                    ['Joined', '2450'],
                    ['Language', 'English'],
                    ['Category', 'Design']
                  ].map(([label, value], i) => (
                    <ListItem key={i}>
                      <ListItemText primary={label} secondary={value} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card> */}

                {/* Related Courses
          <Box   sx={{bgcolor: "lightcement", border: '2px solid grey', borderRadius:5, height:355, width:200, padding:2  }} color={'black'}>
            <Typography variant="h6">Related Courses</Typography>
            {[
              ['Mastering Data', '$22.00'],
              ['Make Edition', '$18.00'],
              ['The Potentially Accessibility', '$11.00'],
              ['Create quick wireframes', '$11.00']
            ].map(([title, price], i) => (
              <Box key={i} mt={2}>
                <Typography variant="body2">{title}</Typography>
                <Typography variant="caption" color="text.black">{price}</Typography>
                <Divider sx={{ mt: 1 }} />
              </Box> */}
                {/* ))} */}
                {/* </Box> */}
            </Grid>
            {/* </Grid> */}
        </Box>
    );
};

export default CourseDetail;
