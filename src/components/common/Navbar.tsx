
'use client';

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ScheduleDemo from '../../components/ScheduleDemo'; // Adjust the import path as necessary

const navItems = [
  { label: 'Home', path: '/' },
  // { label: 'About', path: '/#about' },
  { label: 'Product Demo', path: '/productdemo' },
  // { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 ,color:'white',backgroundColor:'rgb(25, 25, 64)'}} role="presentation">
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderBottom: 1,
        borderColor: 'divider',
        
      }}>
        <Typography variant="h6">Expense Suite</Typography>
        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
      </Box>

      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={path} disablePadding>
            <Link href={path} style={{ width: '100%', textDecoration: 'none' }}>
              <Button
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  p: 2,
                  // color: pathname === path ? 'primary.main' : 'text.primary',
                  color:'white',
                  backgroundColor: pathname === path ? 'primary.light' : 'transparent',
                  '&:hover': {
                    // backgroundColor: pathname === path ? 'primary.light' : 'grey.100',
                    backgroundColor:'blueviolet'
                  },
                }}
                onClick={handleDrawerToggle}
              >
                {label}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>

      {/* Mobile buttons */}
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* <Link href="/login" style={{ textDecoration: 'none' }}> */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#63cfed',
              textTransform: 'none',
              fontWeight: 600
            }}
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Button>
        {/* </Link> */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#63cfed',
            textTransform: 'none',
            fontWeight: 600
          }}
          onClick={() => {
            setDemoOpen(true);
            setMobileOpen(false);
          }}
        >
         Book a Demo
        </Button>
        
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={1} sx={{ backgroundColor: 'rgb(25, 25, 64)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Brand */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
              Expense Suite
            </Typography>
          </Link>

          {/* Nav links (center) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', gap: 1 }}>
            {navItems.map(({ label, path }) => (
              <Link href={path} key={path} style={{ textDecoration: 'none' }}>
                <Button
                  variant={pathname === path ? 'outlined' : 'text'}
                  sx={{
                    textTransform: 'none',
                    color: 'white',
                    fontWeight: pathname === path ? 600 : 400,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                    ...(pathname === path && {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: 'rgba(255,255,255,0.3)'
                    })
                  }}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Right side CTA buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
             {/* <Link href="/login"> */}
              <Button
                variant="contained"
                sx={{ backgroundColor: 'rgb(78,54,234)', textTransform: 'none', fontWeight: 600, borderRadius: 2, px: 3 }}
              >
                Login
              </Button>
            {/* </Link> */}
            <Button
              variant="contained"
              onClick={() => setDemoOpen(true)}
              sx={{ backgroundColor: 'rgb(78,54,234)', textTransform: 'none', fontWeight: 600, borderRadius: 2, px: 3 }}
            >
             Book a Demo
            </Button>
           
          </Box>

          {/* Mobile menu toggle */}
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
           variant="temporary"
           anchor="right"
           open={mobileOpen}
           onClose={handleDrawerToggle}
           sx={{
           display: { xs: 'block', md: 'none' },
           '& .MuiDrawer-paper': {
           width: 250,
           height: '100vh',
           backgroundColor: 'rgb(25, 25, 64)', 
           color: '#fff', // optional: white text
            },
            }}
      >
        {drawer}
      </Drawer>

      {/* Popup Schedule Demo Dialog */}
      <ScheduleDemo open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
