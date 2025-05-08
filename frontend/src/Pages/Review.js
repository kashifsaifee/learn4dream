import React, { useState } from 'react';
import {
    Box, Typography, Rating, Grid, TextField, Button, Avatar, Divider, LinearProgress
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ratingsData = {
    average: 4.8,
    totalReviews: 6,
    breakdown: [3, 2, 1, 0, 0] // 5 to 1 stars
};

const Review = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        title: '',
        rating: 0,
        comment: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (_, value) => {
        setForm({ ...form, rating: value });
    };

    const handleSubmit = () => {
        console.log('Submitted Review:', form);
        setForm({ name: '', email: '', title: '', rating: 0, comment: '' });
    };

    return (
        <Box mt={4}>
            {/* Student Rating */}
            <Typography
                sx={{ color: '#082a5e', fontWeight: 600, fontSize: 35, lineHeight: 0.8 }}
            >
                Student Ratings Reviews
            </Typography>

            <Box display="flex" alignItems="center" width={630} mt={3} border="2px solid black" p={2} borderRadius={2}>
                <Typography
                    sx={{
                        color: '#082a5e',
                        fontWeight: 600,
                        fontSize: 64,
                        lineHeight: 0.8,
                        mr: 2,
                        // background: 'var(--tg-common-color-white)',
                        border: '1px solid #e6eaef',
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.09)',
                        borderRadius: '8px',
                        width: '180px',
                        // textAlign: 'center',
                        // display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '33px 20px',
                        gap: '3px'
                    }}
                >
                    {ratingsData.average}
                </Typography>
                <Box width="100%">
                    {[5, 4, 3, 2, 1].map((star, i) => (
                        <Box key={star} display="flex" alignItems="center" mb={1}>
                            <Box display="flex" alignItems="center" width={40}>
                                <Typography variant="body2" fontWeight="bold">{star}</Typography>
                                <StarIcon sx={{ fontSize: 18, color: '#ffc107', ml: 0.3 }} />
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={(ratingsData.breakdown[i] / ratingsData.totalReviews) * 100}
                                sx={{
                                    flex: 1,
                                    height: 1,
                                    mx: 1,
                                    borderRadius: 5,
                                    background: '#f6f7fa',
                                    // border: '1px solid #dae0e7',
                                    // borderRadius: '8px',
                                    // display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    gap: '2px'
                                }}
                            />

                            <Typography variant="body2">{ratingsData.breakdown[i]}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Reviews List */}
            <Box mt={5}>
                <Typography variant="h6" gutterBottom>Reviews (01)</Typography>
                <Box display="flex" alignItems="flex-start" gap={2}>
                    <Avatar src="https://randomuser.me/api/portraits/women/45.jpg" />
                    <Box>
                        <Typography fontWeight="bold">Admin</Typography>
                        <Typography variant="caption" color="text.secondary">August 5, 2023</Typography>
                        <Typography mt={1}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ my: 5 }} />

            {/* Write a Review */}
            <Box sx={{ border: '2px solid grey', borderRadius: 2, p: 3, mt: 4 }}>
                <Typography variant="h6">Write a review</Typography>
                <Grid container spacing={2} mt={1} direction="column">
                    {/* Line 1: Name and Email */}
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    InputProps={{ sx: { color: 'black' } }}
                                    InputLabelProps={{ sx: { color: 'black' } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Your Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    InputProps={{ sx: { color: 'black' } }}
                                    InputLabelProps={{ sx: { color: 'black' } }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Line 2: Review Title */}
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Review Title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            InputProps={{ sx: { color: 'black' } }}
                            InputLabelProps={{ sx: { color: 'black' } }}
                        />
                    </Grid>

                    {/* Line 3: Select Rating */}
                    <Grid item>
                        <Typography variant="body2" gutterBottom>Select Rating:</Typography>
                        <Rating value={form.rating} onChange={handleRatingChange} />
                    </Grid>

                    {/* Line 4: Comment */}
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Type Comments"
                            name="comment"
                            multiline
                            rows={4}
                            value={form.comment}
                            onChange={handleChange}
                            InputProps={{ sx: { color: 'black' } }}
                            InputLabelProps={{ sx: { color: 'black' } }}
                        />
                    </Grid>

                    {/* Line 5: Submit Button */}
                    <Grid item display="flex" justifyContent="flex-end">
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            SUBMIT YOUR REVIEW
                        </Button>
                    </Grid>
                </Grid>


            </Box>
        </Box>
    );
};

export default Review;
