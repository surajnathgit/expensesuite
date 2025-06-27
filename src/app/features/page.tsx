
"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Grid, Typography, Button, Card, CardContent, Chip, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Styled components for MUI
const FeatureCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.5s, box-shadow 0.5s',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 20px rgba(147, 51, 234, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const AdditionalFeatureCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.shape.borderRadius * 2,
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
}));

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(to right, #60A5FA, #A78BFA, #EC4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const Features = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const featureData = [
    {
      title: 'OCR Receipt Scanning',
      icon: <ReceiptIcon sx={{ fontSize: 32 }} />,
      color: '#4E36FF',
      gradient: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
      features: [
        'High-accuracy receipt scanning with AI',
        'Automatic categorization of expenses',
        'Multi-format receipt support',
        'Error detection and correction',
        'Real-time data extraction',
      ],
      highlights: ['AI-Powered', 'Accurate', 'Automated'],
    },
    {
      title: 'Approval Workflows',
      icon: <CheckCircleIcon sx={{ fontSize: 32 }} />,
      color: '#FF6B6B',
      gradient: 'linear-gradient(to right, #EC4899, #EF4444)',
      features: [
        'Customizable multi-level approval processes',
        'Automated routing to approvers',
        'Approval hierarchy management',
        'Audit trails for compliance',
        'Real-time approval status tracking',
      ],
      highlights: ['Customizable', 'Automated', 'Compliant'],
    },
    {
      title: 'Real-Time Tracking',
      icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
      color: '#10B981',
      gradient: 'linear-gradient(to right, #10B981, #059669)',
      features: [
        'Live expense and budget dashboards',
        'Real-time spending alerts',
        'Customizable spending insights',
        'Historical trend analysis',
        'Mobile access to tracking',
      ],
      highlights: ['Real-Time', 'Insightful', 'Mobile'],
    },
    {
      title: 'Accounting Integration',
      icon: <BusinessIcon sx={{ fontSize: 32 }} />,
      color: '#8B5CF6',
      gradient: 'linear-gradient(to right, #8B5CF6, #7C3AED)',
      features: [
        'Seamless sync with QuickBooks',
        'Integration with Xero and other platforms',
        'Automated data export',
        'API support for custom integrations',
        'Secure data transfer',
      ],
      highlights: ['Seamless', 'Secure', 'Automated'],
    },
    {
      title: 'Mobile App',
      icon: <SmartphoneIcon sx={{ fontSize: 32 }} />,
      color: '#F59E0B',
      gradient: 'linear-gradient(to right, #F59E0B, #F97316)',
      features: [
        'Receipt uploads on the go',
        'Real-time expense submission',
        'Offline mode functionality',
        'Secure access with biometrics',
        'Push notifications for updates',
      ],
      highlights: ['Mobile-First', 'Secure', 'Offline'],
    },
    {
      title: 'Actionable Analytics',
      icon: <BarChartIcon sx={{ fontSize: 32 }} />,
      color: '#06B6D4',
      gradient: 'linear-gradient(to right, #06B6D4, #3B82F6)',
      features: [
        'Key expense metrics and trends',
        'Customizable financial reports',
        'Real-time dashboard updates',
        'Predictive budgeting insights',
        'Compliance monitoring',
      ],
      highlights: ['Data-Driven', 'Predictive', 'Customizable'],
    },
  ];

  const additionalFeatures = [
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 24 }} />,
      title: 'Smart Automation',
      description: 'Automate expense tracking and approvals to save time',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 24 }} />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and encryption',
    },
    {
      icon: <FlashOnIcon sx={{ fontSize: 24 }} />,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times',
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 24 }} />,
      title: 'Easy Integration',
      description: 'Connect with 100+ accounting and ERP platforms',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 24 }} />,
      title: 'Cloud-Native',
      description: 'Scalable cloud infrastructure with 99.9% uptime',
    },
  ];

  const stats = [
    { number: '50k+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '500+', label: 'Integrations' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0F172A, #2D1B5E, #0F172A)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden relations',
      }}
    >
      {/* Animated Background Elements */}
      <Box sx={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              borderRadius: '50%',
              opacity: 0.2,
              background: 'linear-gradient(135deg, #4E36FF 0%, #FF6B6B 100%)',
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <motion.div
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Geometric Shapes */}
      <Box sx={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: 64,
            height: 64,
            borderRadius: '50%',
            border: '2px solid rgba(59, 130, 246, 0.3)',
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: 40,
            height: 40,
            background: 'linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))',
            transform: 'rotate(45deg)',
          }}
        >
          <motion.div
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </Box>
      </Box>

      <Box sx={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <Box sx={{ pt: { xs: 16, lg: 24 }, pb: { xs: 12, lg: 20 }, px: { xs: 4, sm: 6, lg: 8 } }}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Container maxWidth={false}>
              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <GradientTypography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4.5rem' }, mb: 4 }}>
                    Powerful Features
                  </GradientTypography>
                  <Box sx={{ width: 80, height: 4, background: 'linear-gradient(to right, #3B82F6, #8B5CF6)', mx: 'auto', borderRadius: 2, mb: 4 }} />
                  <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
                    Streamline your expense management with AI-powered tools designed for modern businesses
                  </Typography>
                </motion.div>

                {/* Stats Row */}
                <Box sx={{ mt: { xs: 8, lg: 12 } }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
                      {stats.map((stat, index) => (
                        <Grid item xs={6} lg={3} key={index} sx={{ textAlign: 'center' }}>
                          <Typography
                            variant="h4"
                            sx={{
                              background: 'linear-gradient(to right, #60A5FA, #A78BFA)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              mb: 1,
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#9CA3AF', fontWeight: 'medium' }}>
                            {stat.label}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </Box>
              </Box>
            </Container>
          </motion.section>
        </Box>

        {/* Main Features Grid */}
        <Box sx={{ py: { xs: 0, lg: 20 }, px: { xs: 0, sm: 2, lg: 8 } }}>
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Container maxWidth="xl">
              <Grid container spacing={{ xs: 4, lg: 6 }}>
                {featureData.map((feature, index) => (
                  <Grid item xs={12} lg={6} key={index}>
                    <motion.div variants={itemVariants}>
                      <FeatureCard>
                        {/* Card Header */}
                        <Box
                          sx={{
                            background: feature.gradient,
                            // opacity: 0.1,
                            p: { xs: 4, lg: 6 },
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box
                              sx={{
                                background: feature.gradient,
                                p: 2,
                                borderRadius: 2,
                                mr: 3,
                                color: '#fff',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                              }}
                            >
                              {feature.icon}
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                              {feature.title}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {feature.highlights.map((highlight, idx) => (
                              <Chip
                                key={idx}
                                label={highlight}
                                sx={{
                                  fontSize: { xs: '0.75rem', lg: '0.875rem' },
                                  fontWeight: 'medium',
                                  background: `${feature.gradient}, rgba(255, 255, 255, 0.2)`,
                                  color: '#fff',
                                  border: '1px solid rgba(255, 255, 255, 0.2)',
                                }}
                              />
                            ))}
                          </Box>
                        </Box>

                        {/* Card Content */}
                        <CardContent sx={{ p: { xs: 4, lg: 6 }, flex: 1 }}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {feature.features.map((item, idx) => (
                              <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <motion.div
                                  whileHover={{ x: 8 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <Box
                                      sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        background: feature.gradient,
                                        mt: 0.75,
                                        mr: 2,
                                        flexShrink: 0,
                                      }}
                                    />
                                    <Typography sx={{ color: '#D1D5DB', lineHeight: 1.6, '&:hover': { color: '#fff' } }}>
                                      {item}
                                    </Typography>
                                  </Box>
                                </motion.div>
                              </Box>
                            ))}
                          </Box>
                        </CardContent>
                      </FeatureCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </motion.section>
        </Box>

        {/* Additional Features Section */}
        <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 4, sm: 6, lg: 8 } }}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Container maxWidth="xl">
              <Box sx={{ textAlign: 'center', mb: { xs: 8, lg: 12 } }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
                  Why Choose Expenses Suite?
                </Typography>
                <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 640, mx: 'auto', lineHeight: 1.6 }}>
                  Built for modern businesses with enterprise-grade expense management features
                </Typography>
              </Box>
              <Grid container spacing={4}>
                {additionalFeatures.map((feature, index) => (
                  <Grid item xs={12} sm={6} lg={4} xl={2.4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      style={{ height: '100%' }} // ✅ Makes sure the motion.div fills parent height
                    >
                      <AdditionalFeatureCard
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%', // ✅ Full height to match across all cards
                        }}
                      >
                        <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                          <Box
                            sx={{
                              background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
                              width: 56,
                              height: 56,
                              borderRadius: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 3,
                              color: '#60A5FA',
                              transition: 'transform 0.3s, color 0.3s',
                            }}
                            component={motion.div}
                            whileHover={{ scale: 1.1 }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'medium',
                              mb: 2,
                              color: '#fff',
                              '&:hover': { color: '#60A5FA' },
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: '#9CA3AF',
                              fontSize: '0.875rem',
                              lineHeight: 1.6,
                              '&:hover': { color: '#D1D5DB' },
                              mt: 'auto', // ✅ Pushes text to bottom if space remains
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </CardContent>
                      </AdditionalFeatureCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

            </Container>
          </motion.section>
        </Box>

        {/* CTA Section */}
        <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 4, sm: 6, lg: 8 } }}>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  p: { xs: 6, lg: 8 },
                  textAlign: 'center',
                }}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Box sx={{ display: 'flex', '& > *': { mx: -0.5 } }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} sx={{ fontSize: 32, color: '#FBBF24' }} />
                      ))}
                    </Box>
                  </Box>
                  <GradientTypography variant="h3" sx={{ fontSize: { xs: '2rem', lg: '3rem' }, mb: 3 }}>
                    Ready to Transform Your Expense Management?
                  </GradientTypography>
                  <Typography sx={{ color: '#D1D5DB', mb: 6, maxWidth: 640, mx: 'auto', lineHeight: 1.6 }}>
                    Join thousands of companies using Expenses Suite to automate expense tracking and reimbursements
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems:"center" }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        sx={{
                          px: 4,
                          py: 2,
                          background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
                          borderRadius: 2,
                          fontWeight: 'medium',
                          fontSize: '1.125rem',
                          textTransform: 'none',
                          '&:hover': { background: 'linear-gradient(to right, #2563EB, #7C3AED)' },
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        endIcon={<ChevronRightIcon />}
                      >
                        Start Free Trial
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outlined"
                        sx={{
                          px: 4,
                          py: 2,
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: 2,
                          fontWeight: 'medium',
                          fontSize: '1.125rem',
                          color: '#fff',
                          textTransform: 'none',
                          '&:hover': { borderColor: 'rgba(255, 255, 255, 0.4)', background: 'rgba(255, 255, 255, 0.05)' },
                        }}
                      >
                        Schedule Demo
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </Box>
            </Container>
          </motion.section>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
