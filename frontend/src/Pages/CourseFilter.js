import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    Typography,
    Checkbox,
    FormControlLabel,
    Select,
    MenuItem,
    Card,
    Chip,
    CardContent,
    CardMedia,
    FormControl,
    InputLabel,
} from '@mui/material';
import { AccessTime, People, PlayCircle } from '@mui/icons-material';

// Enhanced dummy course data with different categories and real thumbnails
const allCourses = [

    {
        id: 1,
        title: 'Adobe Illustrator for Beginners',
        category: 'Design',
        duration: '10h 30m',
        students: 235,
        lectures: 35,
        price: 29,
        rating: 4.2,
        type: 'Self-paced',
        instructor: 'Kirai Moby',
        language: 'English',
        difficulty: 'Beginner',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 2,
        title: 'Advanced JavaScript Patterns',
        category: 'Development',
        duration: '15h 20m',
        students: 189,
        lectures: 42,
        price: 49,
        rating: 4.7,
        type: 'Instructor-led',
        instructor: 'Jackson Alive',
        language: 'English',
        difficulty: 'Advanced',
        thumbnail:  'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 3,
        title: 'Data Science Fundamentals',
        category: 'Data Science',
        duration: '12h 15m',
        students: 312,
        lectures: 38,
        price: 39,
        rating: 4.5,
        type: 'Self-paced',
        instructor: 'Omar Alve',
        language: 'Hindi',
        difficulty: 'Intermediate',
        thumbnail:  'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 4,
        title: 'Financial Planning Masterclass',
        category: 'Finance',
        duration: '8h 45m',
        students: 156,
        lectures: 28,
        price: 59,
        rating: 4.8,
        type: 'Instructor-led',
        instructor: 'Laden Meyer',
        language: 'English',
        difficulty: 'Intermediate',
        thumbnail:'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 5,
        title: 'Business Strategy Essentials',
        category: 'Business',
        duration: '9h 30m',
        students: 278,
        lectures: 32,
        price: 45,
        rating: 4.3,
        type: 'Self-paced',
        instructor: 'Foley Fants',
        language: 'Hindi',
        difficulty: 'Beginner',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 6,
        title: 'UI/UX Design Principles',
        category: 'Design',
        duration: '11h 10m',
        students: 198,
        lectures: 40,
        price: 35,
        rating: 4.6,
        type: 'Self-paced',
        instructor: 'Kirai Moby',
        language: 'English',
        difficulty: 'Intermediate',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 7,
        title: 'Python for Data Analysis',
        category: 'Data Science',
        duration: '14h 25m',
        students: 421,
        lectures: 45,
        price: 42,
        rating: 4.9,
        type: 'Instructor-led',
        instructor: 'Omar Alve',
        language: 'English',
        difficulty: 'Intermediate',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 8,
        title: 'Digital Marketing Crash Course',
        category: 'Marketing',
        duration: '7h 50m',
        students: 167,
        lectures: 25,
        price: 29,
        rating: 4.1,
        type: 'Self-paced',
        instructor: 'Jackson Alive',
        language: 'Hindi',
        difficulty: 'Beginner',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 9,
        title: 'Blockchain Fundamentals',
        category: 'Development',
        duration: '13h 15m',
        students: 203,
        lectures: 36,
        price: 55,
        rating: 4.7,
        type: 'Instructor-led',
        instructor: 'Foley Fants',
        language: 'English',
        difficulty: 'Advanced',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 10,
        title: 'Investment Strategies 101',
        category: 'Finance',
        duration: '10h 5m',
        students: 189,
        lectures: 30,
        price: 49,
        rating: 4.4,
        type: 'Self-paced',
        instructor: 'Laden Meyer',
        language: 'Hindi',
        difficulty: 'Beginner',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 11,
        title: 'Entrepreneurship Mastery',
        category: 'Business',
        duration: '16h 40m',
        students: 245,
        lectures: 48,
        price: 65,
        rating: 4.8,
        type: 'Instructor-led',
        instructor: 'Kirai Moby',
        language: 'English',
        difficulty: 'Advanced',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },
    {
        id: 12,
        title: 'Advanced Photoshop Techniques',
        category: 'Design',
        duration: '9h 55m',
        students: 178,
        lectures: 33,
        price: 37,
        rating: 4.5,
        type: 'Self-paced',
        instructor: 'Jackson Alive',
        language: 'Hindi',
        difficulty: 'Intermediate',
        thumbnail: 'https://dummyimage.com/600x400/000/fff&text=Learn4Dream',
    },


];

  
  const CourseCard = ({ course }) => {
    return (
      <Card
        sx={{
          p: 2,
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: '0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="180"
            image={course.thumbnail}
            alt={course.title}
            sx={{
              objectFit: 'cover',
              transition: '0.3s',
            }}
          />
        </Box>
  
        <CardContent sx={{ p: 0, mt: 2 }}>
          <Chip
            label={course.category}
            size="small"
            sx={{
              backgroundColor: '#e5f6ee',
              color: '#2e7d32',
              fontWeight: 'bold',
              mb: 1,
            }}
          />
          <Typography variant="subtitle1" fontWeight="bold">
            {course.title}
          </Typography>
  
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
              color: 'text.secondary',
              gap: 2,
              mt: 1,
              mb: 1,
            }}
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              <PlayCircle fontSize="small" />
              {course.lectures}
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <AccessTime fontSize="small" />
              {course.duration}
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <People fontSize="small" />
              {course.students}
            </Box>
          </Box>
  
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 1,
            }}
          >
            <Typography variant="h6" color="primary">
              ${course.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ⭐ {course.rating.toFixed(1)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };
  

const CoursePage = () => {
    const [sortOption, setSortOption] = useState('');
    const [perPage, setPerPage] = useState(6);
    const [filteredCourses, setFilteredCourses] = useState(allCourses);

    // Extract unique values for filters
    const categories = [...new Set(allCourses.map(course => course.category))];
    const instructors = [...new Set(allCourses.map(course => course.instructor))];
    const languages = [...new Set(allCourses.map(course => course.language))];
    const difficulties = [...new Set(allCourses.map(course => course.difficulty))];

    // Filter state
    const [filters, setFilters] = useState({
        category: [],
        price: [],
        type: [],
        instructor: [],
        language: [],
        difficulty: []
    });

    // Apply filters and sorting
    useEffect(() => {
        let result = [...allCourses];

        // Apply category filter
        if (filters.category.length > 0) {
            result = result.filter(course => filters.category.includes(course.category));
        }

        // Apply price filter
        if (filters.price.length > 0) {
            if (filters.price.includes('Free') && !filters.price.includes('Paid')) {
                result = result.filter(course => course.price === 0);
            } else if (filters.price.includes('Paid') && !filters.price.includes('Free')) {
                result = result.filter(course => course.price > 0);
            }
        }

        // Apply type filter
        if (filters.type.length > 0) {
            result = result.filter(course => filters.type.includes(course.type));
        }

        // Apply instructor filter
        if (filters.instructor.length > 0) {
            result = result.filter(course => filters.instructor.includes(course.instructor));
        }

        // Apply language filter
        if (filters.language.length > 0) {
            result = result.filter(course => filters.language.includes(course.language));
        }

        // Apply difficulty filter
        if (filters.difficulty.length > 0) {
            result = result.filter(course => filters.difficulty.includes(course.difficulty));
        }

        // Apply sorting
        if (sortOption === 'price') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === 'students') {
            result.sort((a, b) => b.students - a.students);
        }

        setFilteredCourses(result);
    }, [filters, sortOption]);

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter(item => item !== value)
                : [...prev[filterType], value]
        }));
    };



    return (
        <Box sx={{ border: "1px solid black", display: 'flex', p: 3, minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Sidebar Filters */}
            <Box sx={{ width: 280, pr: 3, flexShrink: 0 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>

                </Typography>

                {/* Category Filter */}
                <Box
                    mb={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2, // or '8px'
                        backgroundColor: '#ffffff',
                        boxShadow: `
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px,
    rgba(228, 11, 11, 0.05) 0 2px 8px
  `,
                        p: 2 // optional padding inside the box
                    }}

                >

                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Filter by Category
                    </Typography>
                    {categories.map(category => (
                        <FormControlLabel
                            key={category}
                            control={
                                <Checkbox
                                    checked={filters.category.includes(category)}
                                    onChange={() => handleFilterChange('category', category)}
                                    size="small"
                                />
                            }
                            label={category}
                            sx={{ display: 'block', ml: 0 }}
                        />
                    ))}
                </Box>

                {/* Price Filter */}
                <Box mb={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        bgcolor: '#fff',
                        boxShadow: [
                            '0px 54px 55px rgba(0,0,0,0.25)',
                            '0px -12px 30px rgba(0,0,0,0.12)',
                            '0px 4px 6px rgba(0,0,0,0.12)',
                            '0px 12px 13px rgba(0,0,0,0.17)',
                            '0px -3px 5px rgba(0,0,0,0.09)',
                            '0 2px 8px rgba(228,11,11,0.05)'
                        ].join(', '),
                        p: 2
                    }}
                >
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Price
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.price.includes('Free')}
                                onChange={() => handleFilterChange('price', 'Free')}
                                size="small"
                            />
                        }
                        label="Free"
                        sx={{ display: 'block', ml: 0 }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.price.includes('Paid')}
                                onChange={() => handleFilterChange('price', 'Paid')}
                                size="small"
                            />
                        }
                        label="Paid"
                        sx={{ display: 'block', ml: 0 }}
                    />
                </Box>

                {/* Type Filter */}
                <Box mb={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        bgcolor: '#fff',
                        boxShadow: [
                            '0px 54px 55px rgba(0,0,0,0.25)',
                            '0px -12px 30px rgba(0,0,0,0.12)',
                            '0px 4px 6px rgba(0,0,0,0.12)',
                            '0px 12px 13px rgba(0,0,0,0.17)',
                            '0px -3px 5px rgba(0,0,0,0.09)',
                            '0 2px 8px rgba(228,11,11,0.05)'
                        ].join(', '),
                        p: 2
                    }}
                >
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Course Type
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.type.includes('Self-paced')}
                                onChange={() => handleFilterChange('type', 'Self-paced')}
                                size="small"
                            />
                        }
                        label="Self-paced"
                        sx={{ display: 'block', ml: 0 }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.type.includes('Instructor-led')}
                                onChange={() => handleFilterChange('type', 'Instructor-led')}
                                size="small"
                            />
                        }
                        label="Instructor-led"
                        sx={{ display: 'block', ml: 0 }}
                    />
                </Box>

                {/* Instructor Filter */}
                <Box mb={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        bgcolor: '#fff',
                        boxShadow: [
                            '0px 54px 55px rgba(0,0,0,0.25)',
                            '0px -12px 30px rgba(0,0,0,0.12)',
                            '0px 4px 6px rgba(0,0,0,0.12)',
                            '0px 12px 13px rgba(0,0,0,0.17)',
                            '0px -3px 5px rgba(0,0,0,0.09)',
                            '0 2px 8px rgba(228,11,11,0.05)'
                        ].join(', '),
                        p: 2
                    }}
                >
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Instructors
                    </Typography>
                    {instructors.map(instructor => (
                        <FormControlLabel
                            key={instructor}
                            control={
                                <Checkbox
                                    checked={filters.instructor.includes(instructor)}
                                    onChange={() => handleFilterChange('instructor', instructor)}
                                    size="small"
                                />
                            }
                            label={instructor}
                            sx={{ display: 'block', ml: 0 }}
                        />
                    ))}
                </Box>

                {/* Language Filter */}
                <Box mb={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        bgcolor: '#fff',
                        boxShadow: [
                            '0px 54px 55px rgba(0,0,0,0.25)',
                            '0px -12px 30px rgba(0,0,0,0.12)',
                            '0px 4px 6px rgba(0,0,0,0.12)',
                            '0px 12px 13px rgba(0,0,0,0.17)',
                            '0px -3px 5px rgba(0,0,0,0.09)',
                            '0 2px 8px rgba(228,11,11,0.05)'
                        ].join(', '),
                        p: 2
                    }}
                >
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Languages
                    </Typography>
                    {languages.map(language => (
                        <FormControlLabel
                            key={language}
                            control={
                                <Checkbox
                                    checked={filters.language.includes(language)}
                                    onChange={() => handleFilterChange('language', language)}
                                    size="small"
                                />
                            }
                            label={language}
                            sx={{ display: 'block', ml: 0 }}
                        />
                    ))}
                </Box>

                {/* Difficulty Filter */}
                <Box mb={3}
                    sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 2,
                        bgcolor: '#fff',
                        boxShadow: [
                            '0px 54px 55px rgba(0,0,0,0.25)',
                            '0px -12px 30px rgba(0,0,0,0.12)',
                            '0px 4px 6px rgba(0,0,0,0.12)',
                            '0px 12px 13px rgba(0,0,0,0.17)',
                            '0px -3px 5px rgba(0,0,0,0.09)',
                            '0 2px 8px rgba(228,11,11,0.05)'
                        ].join(', '),
                        p: 2
                    }}
                >
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Difficulty Level
                    </Typography>
                    {difficulties.map(level => (
                        <FormControlLabel
                            key={level}
                            control={
                                <Checkbox
                                    checked={filters.difficulty.includes(level)}
                                    onChange={() => handleFilterChange('difficulty', level)}
                                    size="small"
                                />
                            }
                            label={level}
                            sx={{ display: 'block', ml: 0 }}
                        />
                    ))}
                </Box>


            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1 }}>
                {/* Top Controls */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {filteredCourses.length} Courses Found
                    </Typography>
                    <Box display="flex" gap={2}>
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>Sort By</InputLabel>
                            <Select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                label="Sort By"
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value="price">Price (Low to High)</MenuItem>
                                <MenuItem value="rating">Rating (High to Low)</MenuItem>
                                <MenuItem value="students">Popularity</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl size="small" sx={{ minWidth: 100 }}>
                            <InputLabel>Per Page</InputLabel>
                            <Select
                                value={perPage}
                                onChange={(e) => setPerPage(Number(e.target.value))}
                                label="Per Page"
                            >
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={24}>24</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                    <Grid container spacing={3}>
                        {filteredCourses.slice(0, perPage).map(course => (
                            <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
                                <CourseCard course={course} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="300px"
                    >
                        <Typography variant="h6" color="text.secondary">
                            No courses match your filters. Try adjusting your criteria.
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default CoursePage;