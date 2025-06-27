'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Smartphone, Security, FlashOn, Group, TrendingUp, AccessTime } from '@mui/icons-material';
import { motion, useInView, useAnimation } from 'framer-motion';

const features = [
  {
    icon: <Smartphone sx={{ width: 32, height: 32 }} />,
    title: 'OCR Receipt Scanning',
    description: 'Automate receipt processing with advanced OCR technology for accurate categorization and instant data extraction.',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: <Security sx={{ width: 32, height: 32 }} />,
    title: 'Multi-level Approval',
    description: 'Streamline approvals with customizable, multi-tiered workflows tailored to your organization’s structure.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: <FlashOn sx={{ width: 32, height: 32 }} />,
    title: 'Real-time Tracking',
    description: 'Monitor expenses and budgets in real-time to maintain complete financial control and transparency.',
    gradient: 'from-pink-500 to-red-600',
  },
  {
    icon: <Group sx={{ width: 32, height: 32 }} />,
    title: 'Software Integration',
    description: 'Seamlessly connect with popular accounting platforms for unified financial management across systems.',
    gradient: 'from-red-500 to-orange-600',
  },
  {
    icon: <TrendingUp sx={{ width: 32, height: 32 }} />,
    title: 'Mobile App Access',
    description: 'Easily manage your expenses on-the-go with our intuitive mobile app, available for both iOS and Android devices — track',
    gradient: 'from-orange-500 to-yellow-600',
  },
  {
    icon: <AccessTime sx={{ width: 32, height: 32 }} />,
    title: 'Automated Reports',
    description: 'Generate comprehensive financial reports automatically with customizable templates and scheduling.',
    gradient: 'from-yellow-500 to-green-600',
  },
];

const ChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <Box
      id="features"
      ref={ref}
      sx={{
        py: { xs: 10, md: 20 },
        px: { xs: 2, sm: 3, lg: 4 },
        background: 'linear-gradient(to bottom right, #111827, #4c1d95, #111827)',
        overflowX: 'hidden',
      }}
    >
      <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 3,
                  '& span': {
                    background: 'linear-gradient(to right, #a78bfa, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  },
                }}
              >
                Why Choose <span>Expenses Suite?</span>
              </Typography>
              <Typography
                sx={{
                  color: '#d1d5db',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  maxWidth: '768px',
                  mx: 'auto',
                }}
              >
                Comprehensive tools to simplify and automate your expense management, saving time, reducing errors, and
                enhancing financial control.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      p: 3,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s',
                      height: '100%',
                      '&:hover': {
                        borderColor: 'rgba(167, 139, 250, 0.5)',
                        transform: 'scale(1.05) translateY(-10px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '12px',
                        background: `linear-gradient(to right, ${feature.gradient})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography sx={{ color: '#d1d5db', lineHeight: 1.5 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                mt: { xs: 8, md: 12 },
                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                borderRadius: 2,
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s',
                },
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 4 }}>
                Streamline Your Finances Today
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  mb: 6,
                  maxWidth: '512px',
                  mx: 'auto',
                }}
              >
                Discover how Expenses Suite can transform your expense management with automation and real-time insights.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: 'white',
                  color: '#7c3aed',
                  px: 4,
                  py: 2,
                  borderRadius: '9999px',
                  fontSize: '1.125rem',
                  fontWeight: 'medium',
                  '&:hover': {
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Get Started Today
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ChooseUsSection;
