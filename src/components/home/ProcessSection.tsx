'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  SvgIcon,
  CardProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkIcon from '@mui/icons-material/Link';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion, useInView, useAnimation } from 'framer-motion';

interface StyledCardProps extends CardProps {
  active?: boolean;
}

const steps = [
  {
    label: 'Expense Process Analysis',
    description: 'We analyze your expense management processes to identify bottlenecks and areas for automation.',
    icon: SearchIcon,
    color: '#06b6d4',
  },
  {
    label: 'Customized Automation Solutions',
    description: 'We design tailored solutions that automate expense tracking, approvals, and reimbursements, aligning with your business needs.',
    icon: SettingsIcon,
    color: '#a855f7',
  },
  {
    label: 'Seamless System Integration',
    description: 'Our solutions integrate with your existing accounting software, ensuring a unified and efficient workflow.',
    icon: LinkIcon,
    color: '#10b981',
  },
  {
    label: 'Ongoing Support & Optimization',
    description: 'We provide continuous support and system updates to keep your expense management efficient and up-to-date.',
    icon: RocketLaunchIcon,
    color: '#f97316',
  },
];

const StyledCard = styled(Card)<StyledCardProps>(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid ${active ? theme.palette.primary.light : 'rgba(255,255,255,0.1)'}`,
  background: active ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(20px)',
  boxShadow: active ? theme.shadows[10] : theme.shadows[2],
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255,255,255,0.08)',
    transform: 'scale(1.02)',
  },
}));

const CTACard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 3,
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
  backdropFilter: 'blur(20px)',
  boxShadow: theme.shadows[10],
}));

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<null | NodeJS.Timeout>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

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

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const [containerProps, containerApi] = useSpring(() => ({
    opacity: 1,
    transform: 'translateY(0)',
    config: { duration: 100 },
  }));

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    Array<{
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      opacity: number;
      gradient: CanvasGradient;
    }>
  >([]);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  useEffect(() => {
    if (isInView && !isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, isHovering]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = ref.current?.offsetHeight || window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles.current = [];
      const particleCount = isMobile ? 5 : 10; 
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 4 + 2;
        const gradient = ctx.createLinearGradient(-size, -size, size, size);
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(0.5, '#8b5cf6');
        gradient.addColorStop(1, '#d946ef');
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          baseSize: size,
          speedX: Math.random() * 50 - 25,
          speedY: Math.random() * 50 - 25,
          opacity: Math.random() * 0.2 + 0.1,
          gradient,
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        p.x += p.speedX / 1000;
        p.y += p.speedY / 1000;
        p.size = p.baseSize * (Math.sin(Date.now() / 2000) * 0.1 + 0.9);

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = p.gradient;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    animateParticles();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  const handleStepInteraction = useCallback((index: number) => {
    setIsHovering(true);
    setActiveStep(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleStepLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleGetStarted = useCallback(() => {
    alert('Redirecting to sign-up page...');
  }, []);

  return (
    <Box
      id="process"
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, sm: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)',
        color: 'white',
        fontFamily: '"Roboto", sans-serif',
        minHeight: { xs: 'auto', md: '100vh' },
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          filter: 'blur(1px)',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
              <Chip
                label="Our Process"
                sx={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: '#d8b4fe',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  px: 2,
                  mb: 2,
                  fontSize: { xs: '0.8rem', md: '1rem' },
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                How We Streamline Your Expenses
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  opacity: 0.8,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                Our structured approach ensures seamless implementation of automated expense management solutions tailored to your business.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} alignItems="start">
            {/* Process Steps */}
            <Grid item xs={12} lg={6} sx={{ display: 'flex', flexDirection: 'column', gap: '21px' }}>
              {steps.map((step, index) => (
                <motion.div variants={itemVariants} key={index}>
                  <StyledCard
                    active={activeStep === index}
                    onMouseEnter={() => !isMobile && handleStepInteraction(index)}
                    onMouseLeave={handleStepLeave}
                    onClick={() => isMobile && handleStepInteraction(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
                      e.key === 'Enter' && handleStepInteraction(index)
                    }
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'flex-start', p: 3 }}>
                      <Box sx={{ flexShrink: 0, mr: 2 }}>
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: activeStep === index ? step.color : 'rgba(255,255,255,0.1)',
                            transition: 'all 0.3s ease',
                            transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                          }}
                        >
                          <SvgIcon component={step.icon} sx={{ fontSize: 32, color: 'white' }} />
                        </Box>
                        {index < steps.length - 1 && (
                          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Box
                              sx={{
                                width: '2px',
                                height: '32px',
                                background: activeStep >= index ? step.color : 'rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease',
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Chip
                            label={String(index + 1).padStart(2, '0')}
                            sx={{
                              mr: 2,
                              background: activeStep === index ? step.color : 'rgba(255,255,255,0.1)',
                              color: 'white',
                              fontWeight: 'bold',
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              color: activeStep === index ? step.color : 'white',
                              fontWeight: 'bold',
                              fontSize: { xs: '1rem', md: '1.25rem' },
                            }}
                          >
                            {step.label}
                          </Typography>
                        </Box>
                        <animated.div
                          style={{
                            height: activeStep === index || isMobile ? 'auto' : 0,
                            opacity: activeStep === index || isMobile ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.3s ease-in-out',
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ color: 'white', opacity: 0.8, fontSize: { xs: '0.8rem', md: '1rem' } }}
                          >
                            {step.description}
                          </Typography>
                        </animated.div>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              ))}
            </Grid>

            {/* CTA Card */}
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <CTACard sx={{ position: { lg: 'sticky' }, top: 8 }}>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{ color: 'white', mb: 4, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}
                    >
                      Start Automating Your Expenses Today!
                    </Typography>
                    <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
                      {[
                        {
                          title: 'Book a Free Demo',
                          description: 'Experience how Expenses Suite can transform your financial processes.',
                          icon: BarChartIcon,
                        },
                        {
                          title: 'Consult Our Experts',
                          description: 'Get a tailored expense management strategy for your business.',
                          icon: LightbulbIcon,
                        },
                        {
                          title: 'Simplify Your Finances',
                          description: 'Reduce errors, save time, and boost efficiency with automation.',
                          icon: AutoAwesomeIcon,
                        },
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            '&:hover': { background: 'rgba(255,255,255,0.15)', transform: 'translateY(-2px)' },
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
                            e.key === 'Enter' && alert(`${item.title} clicked`)
                          }
                          onClick={() => alert(`${item.title} clicked`)}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <SvgIcon component={item.icon} sx={{ fontSize: 24, color: 'white' }} />
                            <Box sx={{ textAlign: 'left' }}>
                              <Typography
                                variant="subtitle1"
                                sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: 'white', opacity: 0.9, fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                              >
                                {item.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        mb: 4,
                      }}
                    >
                      <Box
                        component="a"
                        href="tel:+919302075637"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 2,
                          color: 'white',
                          mb: 2,
                          '&:hover': { color: '#d8b4fe' },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <SvgIcon component={PhoneIcon} sx={{ fontSize: 24 }} />
                        <Typography variant="body1" sx={{ fontWeight: 'medium', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                          +91 9302075637
                        </Typography>
                      </Box>
                      <Box
                        component="a"
                        href="mailto:expensessuite@fincoopers.in"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 2,
                          color: 'white',
                          '&:hover': { color: '#d8b4fe' },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <SvgIcon component={EmailIcon} sx={{ fontSize: 24 }} />
                        <Typography variant="body1" sx={{ fontWeight: 'medium', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                          expensessuite@fincoopers.in
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleGetStarted}
                      sx={{
                        width: '100%',
                        py: 2,
                        borderRadius: '50px',
                        background: 'white',
                        color: '#7c3aed',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        boxShadow: 6,
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: 8,
                          background: 'white',
                        },
                      }}
                    >
                      Get Started Now
                    </Button>
                  </CardContent>
                </CTACard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProcessSection;