'use client';
import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Chip,
  SvgIcon,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import AssignmentIcon from '@mui/icons-material/Assignment';

const comparisonData = [
  {
    task: 'Approvals from Respective Authority',
    manual: 'Each person will recommend manually as per his convenience to higher Authority',
    ai: 'AI will Identify the concerned Authority as per your matrix and will send the approval directly to him',
  },
  {
    task: 'Follow Ups / Reminder Mails',
    manual: 'Manual way of doing follow ups, with no measurement or tracking of delay',
    ai: 'Set your TAT of reminders and calculate who is delaying the approval',
  },
  {
    task: 'Compliance Clearance',
    manual: 'Depends upon Human intelligence, which may sometime miss any critical point',
    ai: 'Prepare the checklist at one go and generate the report of 100% compliance check any time at a click of a button',
  },
  {
    task: 'Document Verification',
    manual: 'Employees manually verify each document, which increases the risk of human errors and delays',
    ai: 'AI will instantly validate documents against predefined criteria and flag discrepancies automatically',
  },
  {
    task: 'Task Delegation & Tracking',
    manual: 'Managers manually assign tasks, track progress, and follow up, leading to inefficiencies',
    ai: 'AI will auto-assign tasks based on workload and skill set, while also tracking real-time progress',
  },
  {
    task: 'Report Generation',
    manual: 'Reports are manually compiled, taking hours or even days, with a risk of errors',
    ai: 'AI generates instant, accurate reports with insights and analytics at a click',
  },
  {
    task: 'Customer Query Handling',
    manual: 'Support teams respond manually to customer queries, leading to delays and inconsistencies',
    ai: 'AI chatbot handles queries instantly, provides relevant solutions, and escalates complex issues',
  },
];

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[10],
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[15],
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[10],
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[15],
  },
}));

const ComparisonSection = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Lowered threshold for mobile
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, sm: 8, md: 12 }, // Reduced padding for mobile
        background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)',
        color: 'white',
        fontFamily: '"Roboto", sans-serif',
        minHeight: { xs: 'auto', md: '100vh' }, // Ensure visibility on mobile
      }}
    >
      {/* Reduced number of particles for better mobile performance */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            opacity: 0.3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() + 0.5, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Manual vs. Automated Expense Management
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: 'white', opacity: 0.8, maxWidth: '800px', mx: 'auto', mb: 4, fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                Compare traditional manual processes with the efficiency and accuracy of Expenses Suite's automation.
              </Typography>
              <Chip
                label="Automated vs Manual Methods"
                sx={{
                  background: `rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.main.slice(5, 7), 16)}, 0.1)`,
                  color: theme.palette.primary.light,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  px: 2,
                  mb: 2,
                  fontSize: { xs: '0.8rem', md: '1rem' },
                }}
              />
              <Typography variant="body1" sx={{ color: 'white', opacity: 0.7, maxWidth: '600px', mx: 'auto', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                See how Expenses Suite transforms expense management tasks.
              </Typography>
            </Box>
          </motion.div>

          {/* Desktop Table View */}
          {!isMobile && (
            <motion.div variants={itemVariants}>
              <StyledTableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      <TableCell sx={{ color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)', p: 3 }}>
                        <Box display="flex" alignItems="center">
                          <SvgIcon component={AssignmentIcon} sx={{ mr: 1, color: theme.palette.primary.main }} />
                          <Typography variant="h6" fontWeight="bold">Activity / Task</Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)', p: 3 }}>
                        <Box display="flex" alignItems="center">
                          <SvgIcon component={PeopleIcon} sx={{ mr: 1, color: theme.palette.error.main }} />
                          <Typography variant="h6" fontWeight="bold">Manual Approach</Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: 'white', p: 3 }}>
                        <Box display="flex" alignItems="center">
                          <SvgIcon component={ComputerIcon} sx={{ mr: 1, color: theme.palette.success.main }} />
                          <Typography variant="h6" fontWeight="bold">Automated Approach</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonData.map((item, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:hover': { background: 'rgba(255,255,255,0.05)' },
                          borderBottom: index !== comparisonData.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        }}
                      >
                        <TableCell sx={{ color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)', p: 3 }}>
                          <Box display="flex" alignItems="center">
                            <Chip
                              label={index + 1}
                              sx={{
                                mr: 2,
                                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                color: 'white',
                                fontWeight: 'bold',
                              }}
                            />
                            <Typography variant="body1" fontWeight="medium">{item.task}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            color: 'white',
                            opacity: 0.8,
                            background: `rgba(${parseInt(theme.palette.error.main.slice(1, 3), 16)}, ${parseInt(theme.palette.error.main.slice(3, 5), 16)}, ${parseInt(theme.palette.error.main.slice(5, 7), 16)}, 0.05)`,
                            borderRight: '1px solid rgba(255,255,255,0.1)',
                            p: 3,
                          }}
                        >
                          {item.manual}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: 'white',
                            background: `rgba(${parseInt(theme.palette.success.main.slice(1, 3), 16)}, ${parseInt(theme.palette.success.main.slice(3, 5), 16)}, ${parseInt(theme.palette.success.main.slice(5, 7), 16)}, 0.05)`,
                            p: 3,
                          }}
                        >
                          {item.ai}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </StyledTableContainer>
            </motion.div>
          )}

          {/* Mobile Card View */}
          {isMobile && (
            <Grid container spacing={2}>
              {comparisonData.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div variants={itemVariants}>
                    <StyledCard>
                      <CardContent sx={{ p: 3, background: 'rgba(255,255,255,0.05)' }}>
                        <Box display="flex" alignItems="center" mb={2}>
                          <Chip
                            label={index + 1}
                            sx={{
                              mr: 2,
                              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              color: 'white',
                              fontWeight: 'bold',
                            }}
                          />
                          <Typography variant="h6" fontWeight="bold" color="white">{item.task}</Typography>
                        </Box>
                      </CardContent>
                      <CardContent
                        sx={{
                          p: 3,
                          background: `rgba(${parseInt(theme.palette.error.main.slice(1, 3), 16)}, ${parseInt(theme.palette.error.main.slice(3, 5), 16)}, ${parseInt(theme.palette.error.main.slice(5, 7), 16)}, 0.05)`,
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        <Box display="flex" alignItems="center" mb={2}>
                          <SvgIcon component={PeopleIcon} sx={{ mr: 1, color: theme.palette.error.main }} />
                          <Typography variant="subtitle2" color={theme.palette.error.main}>Manual Approach</Typography>
                        </Box>
                        <Typography variant="body2" color="white" sx={{ opacity: 0.8, pl: 4, fontSize: { xs: '0.8rem', md: '1rem' } }}>
                          {item.manual}
                        </Typography>
                      </CardContent>
                      <CardContent
                        sx={{
                          p: 3,
                          background: `rgba(${parseInt(theme.palette.success.main.slice(1, 3), 16)}, ${parseInt(theme.palette.success.main.slice(3, 5), 16)}, ${parseInt(theme.palette.success.main.slice(5, 7), 16)}, 0.05)`,
                        }}
                      >
                        <Box display="flex" alignItems="center" mb={2}>
                          <SvgIcon component={ComputerIcon} sx={{ mr: 1, color: theme.palette.success.main }} />
                          <Typography variant="subtitle2" color={theme.palette.success.main}>Automated Approach</Typography>
                        </Box>
                        <Typography variant="body2" color="white" sx={{ pl: 4, fontSize: { xs: '0.8rem', md: '1rem' } }}>
                          {item.ai}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mt={{ xs: 6, md: 8 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: '50px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color: 'white',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: theme.shadows[6],
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: theme.shadows[8],
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  },
                }}
              >
                Experience the Difference
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ComparisonSection;