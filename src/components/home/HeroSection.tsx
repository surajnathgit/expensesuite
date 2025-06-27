'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, Grid, Avatar, Chip } from '@mui/material';
import { PlayArrow, ArrowForward, TrendingUp, Security, Speed } from '@mui/icons-material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


const HeroSection = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation()
  const isMobile = useMediaQuery('(max-width:550px)');

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
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
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.4,
      },
    },
  };

  const clientLogos = [
    { name: 'TechCorp', color: theme.palette.primary.main },
    { name: 'InnovateLab', color: theme.palette.success.main },
    { name: 'DataFlow', color: theme.palette.warning.main },
    { name: 'CloudSync', color: theme.palette.secondary.main },
    { name: 'FinanceMax', color: theme.palette.error.main },
  ];

  const floatingStats = [
    { value: '10K+', label: 'Expenses Managed', icon: <TrendingUp />, delay: 0.5 },
    { value: '₹5 Cr+', label: 'Reimbursements', icon: <Security />, delay: 0.7 },
    { value: '99.9%', label: 'Uptime', icon: <Speed />, delay: 0.9 },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 50%, rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(${parseInt(theme.palette.secondary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.secondary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.secondary.main.slice(5, 7), 16)}, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.2) 0%, transparent 50%)`,
          zIndex: 1,
        },
      }}
      ref={ref}
    >
      {/* Animated Background Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            opacity: Math.random() * 0.4 + 0.2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, Math.random() + 0.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Floating Stats */}
      {/* {floatingStats.map((stat, index) => (
        <motion.div
          key={index}
          variants={statsVariants}
          initial="hidden"
          animate={controls}
          style={{
            position: 'absolute',
            left: { xs: '5%', md: index === 0 ? '5%' : index === 1 ? '5%' : '90%' },
            top: { xs: `${20 + index * 15}%`, md: index === 0 ? '20%' : index === 1 ? '60%' : '40%' },
            zIndex: 5,
            transform: { xs: 'none', md: index === 2 ? 'translateX(-100%)' : 'none' },
          }}
        >
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: { xs: 1.5, sm: 2 },
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              boxShadow: `0 8px 32px rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.3)`,
            }}
          >
            <Box
              sx={{
                color: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {stat.icon}
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', lineHeight: 1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ color: theme.palette.grey[400], lineHeight: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                {stat.label}
              </Typography>
            </Box>
          </Box>     
        </motion.div>
      ))} */}

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, py: 4 }}>
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '100vh' }}>
          {/* Left Content Section */}
          <Grid item xs={12} lg={6} sx={{ mt: { xs: 8, md: 0 } }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.div 
              variants={itemVariants}
                 style={{
                display:"flex",
                flexDirection:"row",
                justifyContent: isMobile ? "center" : "flex-start",
              }}>
                <Chip
                  label="Finance & Accounting"
                  sx={{
                    background: `linear-gradient(45deg, rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.2), rgba(${parseInt(theme.palette.secondary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.secondary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.secondary.main.slice(5, 7), 16)}, 0.2))`,
                    color: 'white',
                    fontWeight: 'medium',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    mb: 3,
                    border: `1px solid rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.3)`,
                    fontSize: '0.875rem',
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem', lg: '4rem' },
                    textAlign:{xs:"center", sm:"left"},
                    fontWeight: 'bold',
                    color: 'white',
                    mb: 3,
                    lineHeight: 1.1,
                    '& span': {
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      backgroundSize: '200% 200%',
                      animation: 'gradient 3s ease infinite',
                    },
                    '@keyframes gradient': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
                    },
                  }}
                >
                  Expenses <span>Suite</span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.grey[300],
                    mb: 4,
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    maxWidth: '90%',
                    textAlign:{xs:"center", sm:"left"},
                  }}
                >
                  Smart expense management system that automates tracking, approval workflows, and reimbursement processes.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 3,
                    mb: 6,
                    alignItems: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<PlayArrow />}
                    size="large"
                    sx={{
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      fontWeight: '600',
                      textTransform: 'none',
                      boxShadow: `0 10px 25px rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.4)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 15px 35px rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.6)`,
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      },
                    }}
                    // onClick={() => {/* Add demo booking logic */}}
                  >
                    Book a Free Demo
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForward />}
                    size="large"
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      fontWeight: '600',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        background: `rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.1)`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                    // onClick={() => {/* Add learn more navigation logic */}}
                  >
                    Learn More
                  </Button>
                </Box>
              </motion.div>

              {/* Client Trust Section */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.grey[500], mb: 3, fontWeight: '500', textAlign: { xs: 'center', sm: 'left' } }}
                >
                  Trusted by leading companies
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  {clientLogos.map((client, index) => (
                    <motion.div key={client.name} variants={itemVariants}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          // borderRadius: '12px',   
                          px: 1.5,
                          py: 0.8,
                          // border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 24,
                            height: 24,
                            background: client.color,
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                          }}
                        >
                          {client.name.charAt(0)}
                        </Avatar>
                        <Typography
                          variant="caption"
                          sx={{ color: 'white', fontWeight: '500', whiteSpace: 'nowrap' }}
                        >
                          {client.name}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: { xs: '320px', sm: '400px', md: '500px' },
                  maxWidth: '100%',
                  mx: 'auto',
                }}
              >
                {/* Enhanced Dashboard Mockup */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.15), rgba(${parseInt(theme.palette.secondary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.secondary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.secondary.main.slice(5, 7), 16)}, 0.15))`,
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '20%',
                      left: '20%',
                      width: '60%',
                      height: '60%',
                      background: `linear-gradient(45deg, rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.2), rgba(${parseInt(theme.palette.secondary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.secondary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.secondary.main.slice(5, 7), 16)}, 0.2))`,
                      borderRadius: '50%',
                      filter: 'blur(40px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      textAlign: 'center',
                      width: '90%',
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 100, sm: 120 },
                        height: { xs: 100, sm: 120 },
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        mx: 'auto',
                        boxShadow: `0 20px 40px rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.4)`,
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{ color: 'white', fontWeight: 'bold' }}
                      >
                        💼
                      </Typography>
                    </Box>

                    {/* Mini Dashboard Preview */}
                    <Box sx={{
                      display: 'flex',
                      gap: 2,
                      justifyContent: 'center',
                      mb: 2,
                      flexWrap: 'wrap'
                    }}>
                      <Box sx={{
                        width: 60,
                        height: 60,
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <Typography variant="body2" sx={{ color: theme.palette.info.main, fontWeight: 'bold' }}>₹12.8K</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.grey[200] }}>Today</Typography>
                      </Box>
                      <Box sx={{
                        width: 60,
                        height: 60,
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <Typography variant="body2" sx={{ color: theme.palette.success.main, fontWeight: 'bold' }}>87%</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.grey[200] }}>Approved</Typography>
                      </Box>
                      <Box sx={{
                        width: 60,
                        height: 60,
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <Typography variant="body2" sx={{ color: theme.palette.warning.main, fontWeight: 'bold' }}>23</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.grey[200] }}>Pending</Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ color: 'white', fontWeight: '600', mb: 1 }}
                    >
                      Dashboard Preview
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.grey[300], maxWidth: '280px', mx: 'auto' }}
                    >
                      Interactive expense management interface
                    </Typography>
                  </Box>
                </Box>

                {/* Floating Elements around Image */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    position: 'absolute',
                    top: '10%',
                    // right: { xs: '5%', sm: '3%', md: '5%' },
                    zIndex: 5,
                  }}
                >
                  <Box
                    sx={{
                      background: `rgba(${parseInt(theme.palette.success.main.slice(1, 3), 16)}, ${parseInt(theme.palette.success.main.slice(3, 5), 16)}, ${parseInt(theme.palette.success.main.slice(5, 7), 16)}, 0.9)`,
                      borderRadius: '12px',
                      p: 1.5,
                      display: { xs: 'none', md: 'block' },
                      boxShadow: `0 10px 25px rgba(${parseInt(theme.palette.success.main.slice(1, 3), 16)}, ${parseInt(theme.palette.success.main.slice(3, 5), 16)}, ${parseInt(theme.palette.success.main.slice(5, 7), 16)}, 0.3)`,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: '600', fontSize: '0.8rem' }}>
                      ✅ Approved
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  style={{ 
                    position: 'absolute',
                    bottom: '15%',
                    // left: { xs: '5%', sm: '3%', md: '5%' },
                    zIndex: 5,
                  }}
                >
                  <Box
                    sx={{
                      background: `rgba(${parseInt(theme.palette.error.main.slice(1, 3), 16)}, ${parseInt(theme.palette.error.main.slice(3, 5), 16)}, ${parseInt(theme.palette.error.main.slice(5, 7), 16)}, 0.9)`,
                      borderRadius: '12px',
                      p: 1.5,
                      display: { xs: 'none', md: 'block' },
                      boxShadow: `0 10px 25px rgba(${parseInt(theme.palette.error.main.slice(1, 3), 16)}, ${parseInt(theme.palette.error.main.slice(3, 5), 16)}, ${parseInt(theme.palette.error.main.slice(5, 7), 16)}, 0.3)`,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: '600', fontSize: '0.8rem' }}>
                      ⏰ Pending
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;