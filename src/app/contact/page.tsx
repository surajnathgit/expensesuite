'use client'
import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  useTheme,
  alpha,
  Grid,
  Paper,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import Head from 'next/head';

// Icons
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


// Define types for the form data and alert state
interface FormData {
  name: string;
  email: string;
  subject: string;
  product: string;
  message: string;
}

interface AlertState {
  type: 'success' | 'error' | null;
  message: string | null;
}

// Define the expected Axios response type
interface ContactResponse {
  success: boolean;
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://default-api-url.com';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    product: 'ExpensesSuite',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState>({ type: null, message: null });

  // Handle input change with typed event
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
const handleSubmit = async () => {
  setLoading(true);
  setAlert({ type: null, message: null });

  try {
    const response = await axios.post<ContactResponse>(`${API_URL}/contact`, formData);
    if (response.data.success) {
      setAlert({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '', product: '' });
    } else {
      throw new Error(response.data.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    setAlert({ type: 'error', message: 'Failed to send your message. Please try again.' });
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Head>
        <title>Contact Us | AI Document Processing Platform</title>
        <meta name="description" content="Get in touch with us to learn more about our AI document processing tools or to get support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)',
        color: 'white',
        overflow: 'hidden',

        paddingTop: '25px', // Add some padding to the top
      }}>
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                borderRadius: '50%',
                background: `linear-gradient(135deg, #4E36FF 0%, #FF6B6B 100%)`,
                opacity: 0.3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </Box>


        {/* Contact Section */}
        <Box sx={{ 
          minHeight: '100vh',
          py: 4,
          position: 'relative',
          zIndex: 1,
        }}>
          <Container maxWidth="lg">
            {/* Header Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    background: 'linear-gradient(90deg, #4E36FF, #FF6B6B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Contact Us
                </Typography>
                <Box 
                  sx={{ 
                    width: 60, 
                    height: 3, 
                    background: 'linear-gradient(90deg, #4E36FF, #FF6B6B)',
                    mx: 'auto',
                    borderRadius: '10px',
                    mb: 2
                  }} 
                />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    maxWidth: 550, 
                    mx: 'auto',
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  We'd love to hear from you! Fill out the form below or reach out directly via email.
                </Typography>
              </Box>
            </motion.div>

            {/* Alert for success/error */}
            {alert.type && (
              <Alert
                severity={alert.type}
                variant="filled"
                sx={{
                  mb: 3,
                  borderRadius: '10px',
                  maxWidth: 600,
                  mx: 'auto',
                }}
                onClose={() => setAlert({ type: null, message: null })}
              >
                {alert.message}
              </Alert>
            )}

            {/* Main Content Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={3}>
                {/* Left Side - Contact Info */}
                <Grid item xs={12} md={4}>
                  <motion.div variants={fadeInUp}>
                    {/* Email Us Card */}
                    <Card 
                      sx={{ 
                        mb: 2, 
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                          <EmailIcon sx={{ color: '#4E36FF', mr: 1.2, fontSize: '1.2rem' }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#4E36FF', fontSize: '1.1rem' }}>
                            Email Us
                          </Typography>
                        </Box>
                        <Link 
                          href="mailto:expensessuite@fincoopers.in"
                          sx={{ 
                            color: '#4E36FF',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            '&:hover': {
                              textDecoration: 'underline',
                            }
                          }}
                        >
                          expensessuite@fincoopers.in
                        </Link>
                        <Typography variant="body2" sx={{ mt: 0.8, fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                          Our team is ready to assist you via email
                        </Typography>
                      </CardContent>
                    </Card>

                    {/* Response Time Card */}
                    <Card 
                      sx={{ 
                        mb: 2, 
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                          <AccessTimeIcon sx={{ color: '#4E36FF', mr: 1.2, fontSize: '1.2rem' }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#4E36FF', fontSize: '1.1rem' }}>
                            Response Time
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.8, fontSize: '0.95rem', color: 'white' }}>
                          Within 24 hours
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                          We'll get back to you promptly with the information you need.
                        </Typography>
                      </CardContent>
                    </Card>

                    {/* Why Contact Us */}
                    <Paper 
                      sx={{ 
                        p: 2.5,
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, rgba(78, 54, 255, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#4E36FF', mb: 1.5, fontSize: '1.1rem' }}>
                        Why Contact Us?
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                        {[
                          'Get personalized solutions for your document needs',
                          'Learn about our AI-powered document processing',
                          'Request a demo of our platform'
                        ].map((item, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CheckCircleIcon 
                              sx={{ 
                                color: '#4E36FF', 
                                mr: 1, 
                                fontSize: '1rem',
                                mt: 0.1
                              }} 
                            />
                            <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.3, color: 'rgba(255, 255, 255, 0.8)' }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>

                {/* Right Side - Contact Form */}
                <Grid item xs={12} md={8}>
                  <motion.div variants={fadeInUp}>
                    <Card 
                      sx={{ 
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Form Header */}
                      <Box 
                        sx={{ 
                          background: 'linear-gradient(135deg, #4E36FF 0%, #FF6B6B 100%)',
                          color: 'white',
                          p: 2.5,
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.8, fontSize: '1.3rem' }}>
                          Send Us a Message
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                          We're here to help with any questions you might have
                        </Typography>
                      </Box>

                      {/* Form Content */}
                      <CardContent sx={{ p: 3 }}>
                        <Grid container spacing={2.5}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.8, color: 'white', fontSize: '0.9rem' }}>
                              Name <span style={{ color: theme.palette.error.main }}>*</span>
                            </Typography>
                            <TextField
                              fullWidth
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              variant="outlined"
                              required
                              size="small"
                              sx={{ 
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '10px',
                                  fontSize: '0.9rem',
                                  background: 'rgba(255, 255, 255, 0.1)',
                                  color: 'white',
                                  '&:hover fieldset': {
                                    borderColor: '#4E36FF',
                                  },
                                  '& fieldset': {
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                  },
                                },
                                '& .MuiInputBase-input': {
                                  color: 'white',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                  color: 'rgba(255, 255, 255, 0.5)',
                                  opacity: 1,
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.8, color: 'white', fontSize: '0.9rem' }}>
                              Email <span style={{ color: theme.palette.error.main }}>*</span>
                            </Typography>
                            <TextField
                              fullWidth
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Your email address"
                              variant="outlined"
                              required
                              size="small"
                              sx={{ 
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '10px',
                                  fontSize: '0.9rem',
                                  background: 'rgba(255, 255, 255, 0.1)',
                                  color: 'white',
                                  '&:hover fieldset': {
                                    borderColor: '#4E36FF',
                                  },
                                  '& fieldset': {
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                  },
                                },
                                '& .MuiInputBase-input': {
                                  color: 'white',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                  color: 'rgba(255, 255, 255, 0.5)',
                                  opacity: 1,
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.8, color: 'white', fontSize: '0.9rem' }}>
                              Subject <span style={{ color: theme.palette.error.main }}>*</span>
                            </Typography>
                            <TextField
                              fullWidth
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="What is this regarding?"
                              variant="outlined"
                              required
                              size="small"
                              sx={{ 
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '10px',
                                  fontSize: '0.9rem',
                                  background: 'rgba(255, 255, 255, 0.1)',
                                  color: 'white',
                                  '&:hover fieldset': {
                                    borderColor: '#4E36FF',
                                  },
                                  '& fieldset': {
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                  },
                                },
                                '& .MuiInputBase-input': {
                                  color: 'white',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                  color: 'rgba(255, 255, 255, 0.5)',
                                  opacity: 1,
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.8, color: 'white', fontSize: '0.9rem' }}>
                              Message <span style={{ color: theme.palette.error.main }}>*</span>
                            </Typography>
                            <TextField
                              fullWidth
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="How can we help you?"
                              variant="outlined"
                              multiline
                              rows={4}
                              required
                              sx={{ 
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: '10px',
                                  fontSize: '0.9rem',
                                  background: 'rgba(255, 255, 255, 0.1)',
                                  color: 'white',
                                  '&:hover fieldset': {
                                    borderColor: '#4E36FF',
                                  },
                                  '& fieldset': {
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                  },
                                },
                                '& .MuiInputBase-input': {
                                  color: 'white',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                  color: 'rgba(255, 255, 255, 0.5)',
                                  opacity: 1,
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Box sx={{ pt: 1.5 }}>
                              <Button
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={loading || !formData.name || !formData.email || !formData.subject || !formData.message}
                                endIcon={<SendIcon />}
                                sx={{
                                  background: 'linear-gradient(135deg, #4E36FF 0%, #FF6B6B 100%)',
                                  py: 1.2,
                                  px: 3,
                                  borderRadius: '10px',
                                  fontWeight: 600,
                                  textTransform: 'none',
                                  fontSize: '0.95rem',
                                  boxShadow: '0 3px 10px rgba(78, 54, 255, 0.25)',
                                  '&:hover': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 4px 12px rgba(78, 54, 255, 0.35)',
                                  },
                                  '&:disabled': {
                                    background: 'rgba(255, 255, 255, 0.12)',
                                    color: 'rgba(255, 255, 255, 0.26)',
                                  },
                                  transition: 'all 0.3s ease',
                                }}
                              >
                                {loading ? 'Sending...' : 'Send Message'}
                              </Button>
                              <Typography variant="caption" sx={{ display: 'block', mt: 1.5, fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                                By submitting this form, you agree to our{' '}
                                <Link href="/policies" sx={{ color: '#4E36FF', fontSize: '0.75rem' }}>
                                  Privacy Policy
                                </Link>
                                .
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

   
      </Box>
    </>
  );
};

export default ContactPage;