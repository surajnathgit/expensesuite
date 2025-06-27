'use client';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';

const StyledGradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
}));

const GradientText = (props: TypographyProps) => {
  return <StyledGradientText {...props} />;
};

export default GradientText;