'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TrendingUp, EmojiEvents, Smartphone, Group } from '@mui/icons-material';
import { motion } from 'framer-motion';

const stats = [
  { value: '90%', label: 'Faster Processing', icon: <TrendingUp sx={{ width: 24, height: 24 }} /> },
  { value: '95%', label: 'Accuracy Rate', icon: <EmojiEvents sx={{ width: 24, height: 24 }} /> },
  { value: '24/7', label: 'Mobile Access', icon: <Smartphone sx={{ width: 24, height: 24 }} /> },
  { value: '50+', label: 'Integrations', icon: <Group sx={{ width: 24, height: 24 }} /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,     
      delayChildren: 0.1,       
      duration: 0.5,            
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

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 20,
        background: 'linear-gradient(to bottom right, #111827, #4c1d95, #111827)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      {[...Array(10)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: 128,
            height: 128,
            background: 'rgba(139, 92, 246, 0.05)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `pulse${i} 8s ease-in-out infinite`,
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.1 },
              '50%': { transform: 'scale(1.2)', opacity: 0.3 },
            },
          }}
        />
      ))}

      <Box sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, sm: 3, lg: 4 }, position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: '#a78bfa', fontWeight: 'medium', textTransform: 'uppercase', letterSpacing: 2 }}
                >
                  About Us
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.875rem', md: '3rem' },
                    fontWeight: 'bold',
                    color: 'white',
                    mt: 2,
                    mb: 4,
                    '& span': {
                      background: 'linear-gradient(to right, #a78bfa, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    },
                  }}
                >
                  Transform Your <span>Expense Management</span>
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography sx={{ color: '#d1d5db', fontSize: '1.125rem', lineHeight: 1.5, mb: 6 }}>
                  Expenses Suite is a cutting-edge solution designed to streamline your financial processes. Our smart
                  expense management system automates tracking, approval workflows, and reimbursement processes, ensuring
                  efficiency and accuracy.
                </Typography>
              </motion.div>
              <Grid container spacing={1}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          width:"100%",
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 2,
                          p: 2,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' },
                        }}
                      >
                        <Box sx={{ color: '#a78bfa', mb: 1 }}>{stat.icon}</Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Box
                    sx={{
                      background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                      borderRadius: 2,
                      p: 3,
                      color: 'white',
                      '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.3s' },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Our Mission
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>
                      To provide businesses with an affordable, easy-to-use expense management system that automates financial
                      processes and enhances operational efficiency.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      p: 3,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.3s' },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
                      Our Vision
                    </Typography>
                    <Typography sx={{ color: '#d1d5db', lineHeight: 1.5 }}>
                      To empower organizations with intelligent expense management tools that simplify financial processes,
                      reduce costs, and drive growth.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutSection;
