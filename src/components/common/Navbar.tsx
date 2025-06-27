import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import Link from 'next/link';

const navigationItems = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'features', label: 'Features', to: '/features' },
  { id: 'contact', label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:
            scrollY > 50
    ? 'linear-gradient(135deg, rgb(10 10 35 / 56%) 0%, rgb(26 26 64 / 58%) 50%, rgb(45 27 105 / 41%) 100%)'
    : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
          boxShadow: scrollY > 50 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
          transition: 'all 0.3s ease',
          color: 'white',
          zIndex: 1200,
        }}
        aria-label="navigation"
      >
        <Toolbar
          sx={{
            maxWidth: '1280px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3, lg: 4 },
            minHeight: { xs: 56, md: 64 },
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              component={Link}
              href="/"
              aria-label="Expenses Suite Home"
            >
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                E
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ color: 'white', fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}
            >
              Expenses Suite
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: { md: 2, lg: 4 },
            }}
          >
           {navigationItems.map((item) => (
            <Link href={item.to} passHref key={item.id}>
              <Button
                sx={{
                  color: activeSection === item.id ? '#a78bfa' : '#d1d5db',
                  fontWeight: '500',
                  textTransform: 'none',
                  '&:hover': { color: 'white' },
                  fontSize:"1rem"
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          </Box>

          {/* Mobile Toggle Button */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', ml: 'auto' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            background: "rgb(17 24 39 / 95%)",
            borderTop: '1px solid rgba(139, 92, 246, 0.2)',
            width: 'min(75vw, 280px)',
            pt: 2,
            pb: 4,
            px: 2,
            transition: 'background 0.3s ease',
          },
        }}
        aria-label="Mobile navigation menu"
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => setIsMobileMenuOpen(false)}
            sx={{ color: 'white' }}
            aria-label="Close mobile menu"
          >
            <Close />
          </IconButton>
        </Box>
        <List sx={{ mt: 2 }}>
          {navigationItems.map((item) => (
            <ListItem
              key={item.id}
              button
              component={Link}
              href={item.to}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              sx={{
                color: activeSection === item.id ? '#a78bfa' : '#d1d5db',
                py: 1.5,
                '&:hover': { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                borderRadius: '8px',
              }}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;