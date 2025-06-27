'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

// Non-SSR components
const EnhancedHeroSection = dynamic(() => import('@/components/home/HeroSection'), { ssr: false });
const EnhancedAboutSection = dynamic(() => import('@/components/home/AboutSection'), { ssr: false });
const ChooseUsSection = dynamic(() => import('@/components/home/ChooseUsSection'), { ssr: false });
const ComparisonSection = dynamic(() => import('@/components/home/ComparisonSection'), { ssr: false });
const ProcessSection = dynamic(() => import('@/components/home/ProcessSection'), { ssr: false });

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #111827, #4c1d95, #111827)' }}>
      <EnhancedHeroSection />
      <EnhancedAboutSection />
      <ChooseUsSection />
      <ComparisonSection />
      <ProcessSection />
    </Box>
  );
}