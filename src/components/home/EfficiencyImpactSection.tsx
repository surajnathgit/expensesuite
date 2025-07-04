'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const EfficiencyImpactSection = () => {
  const efficiencyItems = [
    {
      title: 'Administrative Efficiency',
      stat: '85% reduction in expense admin',
      detail: 'Automated processing workflows',
    },
    {
      title: 'Policy Compliance',
      stat: '95% policy adherence',
      detail: 'Automated compliance checking',
    },
    {
      title: 'Fraud Prevention',
      stat: '90% reduction in fraudulent claims',
      detail: 'AI-powered fraud detection',
    },
    {
      title: 'Audit Speed',
      stat: '80% faster audit processes',
      detail: 'Digital records and automation',
    },
  ];

  const reducedRoles = [
    {
      role: 'Expense Processors',
      reduction: '-95%',
      note: 'Manual receipt processing eliminated',
    },
    {
      role: 'Accounts Payable Clerks',
      reduction: '-80%',
      note: 'Reimbursement processing automated',
    },
    {
      role: 'Compliance Checkers',
      reduction: '-85%',
      note: 'Policy compliance verification automated',
    },
  ];

  const newRoles = [
    {
      role: 'Expense Intelligence Analyst',
      label: 'New',
      detail: 'Analyzes expense data for optimization',
    },
    {
      role: 'Expense Policy Designer',
      label: 'New',
      detail: 'Creates intelligent expense policies',
    },
    {
      role: 'Expense AI Specialist',
      label: 'New',
      detail: 'Optimizes AI expense processing systems',
    },
  ];

  const netImpact = [
    { title: 'Average Role Reduction', value: '-87%' },
    { title: 'New Specialized Roles', value: '+3' },
    { title: 'Upskilling', value: 'Focus on Higher-Value Work' },
  ];

  return (
    <>
      {/* Efficiency Gains Section */}
      <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 4, sm: 6, lg: 8 } }}>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: { xs: 8, lg: 12 } }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
                Efficiency Gains & Impact
              </Typography>
              <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
                See how Expenses Suite dramatically boosts performance across your organization
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {efficiencyItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
                    <Box
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        p: 4,
                        textAlign: 'center',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#A78BFA', mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
                        {item.stat}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#D1D5DB' }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.section>
      </Box>

      {/* Expense Management Transformation Section */}
      <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 4, sm: 6, lg: 8 } }}>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: { xs: 8, lg: 12 } }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
                Expense Management Transformation
              </Typography>
              <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
                Automated expense processing from receipt to reimbursement — transforming traditional finance roles.
              </Typography>
            </Box>

            <Typography variant="h5" sx={{ color: '#60A5FA', mb: 3 }}>
              Roles Reduced or Replaced
            </Typography>
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {reducedRoles.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.04)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#F87171', fontWeight: 'bold', mb: 1 }}>
                      {item.reduction}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                      {item.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#9CA3AF', mt: 1 }}>
                      {item.note}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" sx={{ color: '#A78BFA', mb: 3 }}>
              New Roles Created
            </Typography>
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {newRoles.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.04)',
                      textAlign: 'center',
                    }}
                  >
                    <Chip label={item.label} sx={{ mb: 1, color: '#fff', backgroundColor: '#4F46E5' }} />
                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                      {item.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#9CA3AF', mt: 1 }}>
                      {item.detail}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" sx={{ color: '#34D399', mb: 3 }}>
              Net Impact Summary
            </Typography>
            <Grid container spacing={4}>
              {netImpact.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.04)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#10B981', fontWeight: 'bold', mb: 1 }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.section>
      </Box>
    </>
  );
};

export default EfficiencyImpactSection;
