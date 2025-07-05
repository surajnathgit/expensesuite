// 'use client';

// import React from 'react';
// import { Box, Container, Grid, Typography, Chip } from '@mui/material';
// import { motion } from 'framer-motion';

// const EfficiencyImpactSection = () => {
//   const efficiencyItems = [
//     {
//       title: 'Administrative Efficiency',
//       stat: '85% reduction in expense admin',
//       detail: 'Automated processing workflows',
//     },
//     {
//       title: 'Policy Compliance',
//       stat: '95% policy adherence',
//       detail: 'Automated compliance checking',
//     },
//     {
//       title: 'Fraud Prevention',
//       stat: '90% reduction in fraudulent claims',
//       detail: 'AI-powered fraud detection',
//     },
//     {
//       title: 'Audit Speed',
//       stat: '80% faster audit processes',
//       detail: 'Digital records and automation',
//     },
//   ];

//   const reducedRoles = [
//     {
//       role: 'Expense Processors',
//       reduction: '-95%',
//       note: 'Manual receipt processing eliminated',
//     },
//     {
//       role: 'Accounts Payable Clerks',
//       reduction: '-80%',
//       note: 'Reimbursement processing automated',
//     },
//     {
//       role: 'Compliance Checkers',
//       reduction: '-85%',
//       note: 'Policy compliance verification automated',
//     },
//   ];

//   const newRoles = [
//     {
//       role: 'Expense Intelligence Analyst',
//       label: 'New',
//       detail: 'Analyzes expense data for optimization',
//     },
//     {
//       role: 'Expense Policy Designer',
//       label: 'New',
//       detail: 'Creates intelligent expense policies',
//     },
//     {
//       role: 'Expense AI Specialist',
//       label: 'New',
//       detail: 'Optimizes AI expense processing systems',
//     },
//   ];

//   const netImpact = [
//     { title: 'Average Role Reduction', value: '-87%' },
//     { title: 'New Specialized Roles', value: '+3' },
//     { title: 'Upskilling', value: 'Focus on Higher-Value Work' },
//   ];

//   return (
//     <>
//       {/* Efficiency Gains Section */}
//       <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 4, sm: 6, lg: 8 } }}>
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <Container maxWidth="lg">
//             <Box sx={{ textAlign: 'center', mb: { xs: 8, lg: 12 } }}>
//               <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
//                 Efficiency Gains & Impact
//               </Typography>
//               <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
//                 See how Expenses Suite dramatically boosts performance across your organization
//               </Typography>
//             </Box>
//             <Grid container spacing={4}>
//               {efficiencyItems.map((item, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={index}>
//                   <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
//                     <Box
//                       sx={{
//                         background: 'rgba(255, 255, 255, 0.05)',
//                         border: '1px solid rgba(255, 255, 255, 0.1)',
//                         borderRadius: 3,
//                         p: 4,
//                         textAlign: 'center',
//                         height: '100%',
//                       }}
//                     >
//                       <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#A78BFA', mb: 1 }}>
//                         {item.title}
//                       </Typography>
//                       <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
//                         {item.stat}
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: '#D1D5DB' }}>
//                         {item.detail}
//                       </Typography>
//                     </Box>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </motion.section>
//       </Box>

//       {/* Expense Management Transformation Section */}
//       <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 4, sm: 6, lg: 8 } }}>
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <Container maxWidth="lg">
//             <Box sx={{ textAlign: 'center', mb: { xs: 8, lg: 12 } }}>
//               <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
//                 Expense Management Transformation
//               </Typography>
//               <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
//                 Automated expense processing from receipt to reimbursement — transforming traditional finance roles.
//               </Typography>
//             </Box>

//             <Typography variant="h5" sx={{ color: '#60A5FA', mb: 3 }}>
//               Roles Reduced or Replaced
//             </Typography>
//             <Grid container spacing={4} sx={{ mb: 8 }}>
//               {reducedRoles.map((item, idx) => (
//                 <Grid item xs={12} sm={6} md={4} key={idx}>
//                   <Box
//                     sx={{
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       borderRadius: 3,
//                       p: 4,
//                       background: 'rgba(255, 255, 255, 0.04)',
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ color: '#F87171', fontWeight: 'bold', mb: 1 }}>
//                       {item.reduction}
//                     </Typography>
//                     <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
//                       {item.role}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#9CA3AF', mt: 1 }}>
//                       {item.note}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>

//             <Typography variant="h5" sx={{ color: '#A78BFA', mb: 3 }}>
//               New Roles Created
//             </Typography>
//             <Grid container spacing={4} sx={{ mb: 8 }}>
//               {newRoles.map((item, idx) => (
//                 <Grid item xs={12} sm={6} md={4} key={idx}>
//                   <Box
//                     sx={{
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       borderRadius: 3,
//                       p: 4,
//                       background: 'rgba(255, 255, 255, 0.04)',
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Chip label={item.label} sx={{ mb: 1, color: '#fff', backgroundColor: '#4F46E5' }} />
//                     <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
//                       {item.role}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#9CA3AF', mt: 1 }}>
//                       {item.detail}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>

//             <Typography variant="h5" sx={{ color: '#34D399', mb: 3 }}>
//               Net Impact Summary
//             </Typography>
//             <Grid container spacing={4}>
//               {netImpact.map((item, idx) => (
//                 <Grid item xs={12} sm={6} md={4} key={idx}>
//                   <Box
//                     sx={{
//                       border: '1px solid rgba(255, 255, 255, 0.1)',
//                       borderRadius: 3,
//                       p: 4,
//                       background: 'rgba(255, 255, 255, 0.04)',
//                       textAlign: 'center',
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ color: '#10B981', fontWeight: 'bold', mb: 1 }}>
//                       {item.value}
//                     </Typography>
//                     <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
//                       {item.title}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </motion.section>
//       </Box>
//     </>
//   );
// };

// export default EfficiencyImpactSection;









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
    <Box sx={{ bgcolor: 'transparent' }}> {/* removed overflowX hidden */}
      {/* Efficiency Gains Section */}
      <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 1, sm: 2, md: 4, lg: 6 } }}>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Container maxWidth="xl" disableGutters>
            {/* <Box sx={{ textAlign: 'center', mb: { xs: 8, lg: 12 }, px: { xs: 2, sm: 4 } }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
                Efficiency Gains & Impact
              </Typography>
              <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
                See how Expenses Suite dramatically boosts performance across your organization
              </Typography>
              
            </Box> */}
            <Box
  sx={{
    textAlign: 'center',
    mb: { xs: 8, lg: 12 },
    px: { xs: 2, sm: 4 },
  }}
>
  <Typography
    variant="h3"
    sx={{
      fontWeight: 'bold',
      color: '#fff',
      mb: 2,
      fontSize: {
        xs: '1.75rem',  // ~28px on small screens
        sm: '2.25rem',  // ~36px
        md: '2.5rem',   // ~40px
        lg: '3rem',     // ~48px on large screens
      },
    }}
  >
    Efficiency Gains & Impact
  </Typography>

  <Typography
    variant="h6"
    sx={{
      color: '#D1D5DB',
      maxWidth: { xs: '100%', md: 720 },
      mx: 'auto',
      lineHeight: 1.6,
      fontSize: {
        xs: '0.95rem',  // ~15px
        sm: '1.05rem',  // ~17px
        md: '1.125rem', // ~18px
      },
    }}
  >
    See how Expenses Suite dramatically boosts performance across your organization
  </Typography>
</Box>

            {/* <Grid container spacing={3}>
              {efficiencyItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Box
                      sx={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '32px',
                        p: 4,
                        height: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#A78BFA', mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="h5" sx={{ color: '#fff', mb: 1, fontWeight: 700 }}>
                        {item.stat}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#D1D5DB' }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid> */}
            <Grid
  container
  spacing={{ xs: 2, sm: 3, md: 4 }}
  sx={{
    width: '100%',
    margin: 0,
    overflowX: 'hidden',
  }}
>
  {efficiencyItems.map((item, index) => (
    <Grid
      item
      key={index}
      xs={12}
      sm={6}
      md={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '32px',
            p: { xs: 2, sm: 3, md: 4 },
            height: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#A78BFA',
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.125rem' },
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              mb: 1,
              fontWeight: 700,
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            {item.stat}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#D1D5DB',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: 1.5,
            }}
          >
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
      <Box sx={{ py: { xs: 12, lg: 20 }, px: { xs: 1, sm: 2, md: 4, lg: 6 } }}>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Container maxWidth="xl" disableGutters>
            {/* <Box sx={{ textAlign: 'center', mb: { xs: 8, lg: 12 }, px: { xs: 2, sm: 4 } }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
                Expense Management Transformation
              </Typography>
              <Typography variant="h6" sx={{ color: '#D1D5DB', maxWidth: 720, mx: 'auto', lineHeight: 1.6 }}>
                Automated expense processing from receipt to reimbursement — transforming traditional finance roles.
              </Typography>
            </Box> */}
 <Box
  sx={{
    textAlign: 'center',
    mb: { xs: 6, sm: 8, lg: 12 },
    px: { xs: 2, sm: 4 },
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
  }}
>
  <Typography
    variant="h3"
    sx={{
      fontWeight: 'bold',
      color: '#fff',
      mb: { xs: 2, sm: 3 },
      fontSize: {
        xs: '1.75rem',  // ~28px
        sm: '2.25rem',  // ~36px
        md: '2.75rem',  // ~44px
        lg: '3rem',     // ~48px
      },
      lineHeight: 1.3,
      wordBreak: 'break-word',
    }}
  >
    Expense Management Transformation
  </Typography>

  <Typography
    variant="h6"
    sx={{
      color: '#D1D5DB',
      mx: 'auto',
      maxWidth: { xs: '100%', sm: '90%', md: 720 },
      fontSize: {
        xs: '0.95rem',
        sm: '1.05rem',
        md: '1.125rem',
      },
      lineHeight: 1.6,
      wordBreak: 'break-word',
    }}
  >
    Automated expense processing from receipt to reimbursement — transforming traditional finance roles.
  </Typography>
</Box>
 


            <Typography variant="h5" sx={{ color: '#60A5FA', mb: 3 }}>
              Roles Reduced or Replaced
            </Typography>
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {reducedRoles.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '24px',
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
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {newRoles.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '24px',
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
            <Grid container spacing={3}>
              {netImpact.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '24px',
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
    </Box>
  );
};

export default EfficiencyImpactSection;