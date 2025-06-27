'use client';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';

// FadeIn animation component
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0F0F1E',
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
      id="contact"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FadeIn>
              <Box mb={3}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    background: 'linear-gradient(135deg, #64b5f6 0%, #42a5f5 25%, #2196f3 50%, #1976d2 75%, #0d47a1 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    transition: 'all  | 0.3s ease',
                    mr: 2,
                    letterSpacing: '-0.5px',
                  }}
                >
                  Expenses Suite
                </Typography>
              </Box>
              <Typography variant="body2" color="grey.400" sx={{ mb: 3 }}>
                Expenses Suite is a technology platform specializing in AI-powered expense management solutions. We help businesses automate expense tracking, approval workflows, and reimbursement processes.
              </Typography>
              <Box display="flex" gap={1}>
                <IconButton size="small" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
                  <Facebook />
                </IconButton>
                <IconButton size="small" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
                  <Twitter />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                  onClick={() => window.open("https://www.linkedin.com/company/expenses-suite/about/", "_blank")}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton size="small" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
                  <Instagram />
                </IconButton>
              </Box>
            </FadeIn>
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <FadeIn delay={0.1}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Company
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <Link href="/#about" passHref style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="grey.400" sx={{ '&:hover': { color: 'primary.main' } }}>
                    About Us
                  </Typography>
                </Link>
                <Link href="/features" passHref style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="grey.400" sx={{ '&:hover': { color: 'primary.main' } }}>
                    Features
                  </Typography>
                </Link>
                <Link href="/#use-cases" passHref style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="grey.400" sx={{ '&:hover': { color: 'primary.main' } }}>
                    How It Works
                  </Typography>
                </Link>
              </Box>
            </FadeIn>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <FadeIn delay={0.3}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Stay Updated
              </Typography>
              <Typography variant="body2" color="grey.400" mb={2}>
                Subscribe to our newsletter to get the latest updates and news.
              </Typography>
              <Box display="flex" gap={1}>
                <TextField
                  variant="outlined"
                  placeholder="Your email address"
                  size="small"
                  fullWidth
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Subscribe
                </Button>
              </Box>
              <Box mt={4}>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  Contact Us
                </Typography>
                <Link href="mailto:expensessuite@fincoopers.in" style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="grey.400">
                    Email: expensessuite@fincoopers.in
                  </Typography>
                </Link>
                <Link href="tel:+919302075637" style={{ textDecoration: 'none' }}>
                  <Typography variant="body2" color="grey.400">
                    Phone: +91 9302075637
                  </Typography>
                </Link>
              </Box>
            </FadeIn>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" color="grey.500">
            © {new Date().getFullYear()} Expenses Suite. All rights reserved.
          </Typography>
          <Box display="flex" gap={3}>
            <Link href="#" passHref style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="grey.500" sx={{ '&:hover': { color: 'primary.main' } }}>
                Privacy Policy
              </Typography>
            </Link>
            <Link href="#" passHref style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="grey.500" sx={{ '&:hover': { color: 'primary.main' } }}>
                Terms of Service
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;