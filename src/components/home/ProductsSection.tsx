'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion, useInView, useAnimation } from 'framer-motion';
import SectionTransition from '../animations/SectionTransition';
import TextSplitReveal from '../animations/TextSplitReveal';
import MorphingShape from '../animations/MorphingShape';
import FloatingElement from '../animations/FloatingElement';

const products = [   
  {
    title: "DOC.EXE – AI Document Extractor",
    description: "Extract structured data from any document instantly with our smart AI tool",
    icon: "📄",
    delay: 0.1,
  },
  {
    title: "Blue Collar Verification",
    description: "Fast, accurate, and hassle-free blue-collar workforce verification",
    icon: "👷",
    delay: 0.2,
  },
  {
    title: "Gig Worker Verification",
    description: "Protect against reputational & financial risks with gig worker verification.",
    icon: "🏠",
    delay: 0.3,
  },
  {
    title: "Leadership Verification",
    description: "360-degree verification checks for C-suite and senior leadership",
    icon: "👥",
    delay: 0.4,
  },
];

const ProductsSection = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
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
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <Box
      id="products"
      sx={{
        py: { xs: 5, md: 7 },
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
      ref={ref}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary.main"
                sx={{ mb: 1 }}
              >
                OUR SOLUTIONS
              </Typography>
              <TextSplitReveal
                text="Explore Our Products"
                variant="h3"
                fontWeight="bold"
                splitBy="words"
                effect="slide"
                sx={{
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              />
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: '700px', mx: 'auto' }}
              >
                Our comprehensive suite of AI-driven verification solutions helps businesses reduce risks,
                ensure compliance, and streamline their onboarding processes.
              </Typography>
            </Box>
          </motion.div>
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <FloatingElement yOffset={4} duration={4} delay={index * 0.3}>
                    <Card
                      elevation={1}
                      sx={{
                        height: 250,  
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2,
                        overflow: 'hidden',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: 70,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.1 }}
                          sx={{ fontSize: '2rem', color: 'white' }}
                        >
                          {product.icon}
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 1.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          sx={{ fontSize: '1rem', mb: 0.7 }}
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mb: 'auto', fontSize: '0.90rem', lineHeight: 1.5 }}
                        >
                          {product.description}
                        </Typography>
                        <Button
                          component={motion.button}
                          whileHover={{ scale: 1.05 }}
                          disableElevation
                          sx={{
                            mt: 1,
                            alignSelf: 'flex-start',
                            borderRadius: '4px',
                            padding: '5px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            color: 'white',
                            textTransform: 'none',
                            '&:hover': {
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            },
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}
                        >
                          Explore
                          <span style={{ marginLeft: '3px' }}>→</span>
                        </Button>
                      </CardContent>
                    </Card>
                  </FloatingElement>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductsSection;