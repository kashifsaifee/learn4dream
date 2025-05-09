import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Favorite } from '@mui/icons-material'; // Replace this with your desired icon

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  borderRadius: 12,
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.04)',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
  },
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  padding: theme.spacing(2),
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const TitleText = styled(Typography)({
  fontSize: '1.4rem',
  fontWeight: 600,
  color: '#212121',
  textAlign: 'center',
});

const DescriptionText = styled(Typography)({
  fontSize: '1rem',
  color: '#424242',
  textAlign: 'center',
  marginTop: '0.5rem',
});

const AnimatedCard = ({ icon = <Favorite />, title, description }) => {
  return (
    <StyledCard>
      <IconBox>
        {icon}
      </IconBox>
      <CardContent>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </CardContent>
    </StyledCard>
  );
};

export default AnimatedCard;
