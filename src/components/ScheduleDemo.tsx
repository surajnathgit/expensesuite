
// 'use client';

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   FormControlLabel,
//   Checkbox,
//   IconButton,
//   MenuItem,
//   Grid,
//   Box
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';
// import axios from 'axios';

// export default function ScheduleDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
//   const [form, setForm] = useState({
//     fullName: '',
//     workEmail: '',
//     companyName: '',
//     jobTitle: '',
//     industryType: '',
//     OtherIndustry: '',
//     phone: '',
//     numberOfEmployees: '',
//     howDidYouHearAboutUs: '',
//     consent: false
//   });

//    const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({});
  


//   const [showThankYouPopup, setShowThankYouPopup] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));

//     // Clear error for that field as user types
//      setFormErrors(prev => ({ ...prev, [name]: false }));
  

//   };

//   const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { checked } = e.target;
//     setForm(prev => ({ ...prev, consent: checked }));
//   };




// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const requiredFields = [
//     'fullName',
//     'workEmail',
//     'companyName',
//     'industryType',
//     'jobTitle',
//     'phone',
//     'numberOfEmployees',
//     'howDidYouHearAboutUs'
//   ];

//   const errors: { [key: string]: boolean } = {};
  





//   // 2. If phone is provided, validate its format
//   const phonePattern = /^[6-9]\d{9}$/;
//   if (form.phone.trim() && !phonePattern.test(form.phone)) {
//     errors.phone = true;
//   }

//   // 3. Check "Other" industry
//   if (form.industryType === 'Other' && !form.OtherIndustry.trim()) {
//     errors.otherIndustry = true;
//   }

//   // 4. Consent check
//   if (!form.consent) {
//     alert('You must agree to the terms and conditions before submitting.');
//     return;
//   }

//   // 5. Show errors if any
//   if (Object.keys(errors).length > 0) {
//     setFormErrors(errors);
//     return;
//   }

//   // 6. Submit form
//   try {
//     const response = await axios.post(
//       'https://api.recruitexe.com/v1/api/demo/createBookDemo',
//       form,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       }
//     );

//     console.log('Server Response:', response.data);

//     setForm({
//       fullName: '',
//       workEmail: '',
//       companyName: '',
//       jobTitle: '',
//       industryType: '',
//       OtherIndustry: '',
//       phone: '',
//       numberOfEmployees: '',
//       howDidYouHearAboutUs: '',
//       consent: false
//     });

//     setFormErrors({});
//     onClose();
//     setShowThankYouPopup(true);
//     setTimeout(() => setShowThankYouPopup(false), 3000);

//   } catch (error: any) {
//     console.error('Submission failed:', error.response?.data || error.message);
//     alert('There was an error submitting the form.');
//   }
// };

//   return (
//     <>
   
   
// <Dialog
//   open={open}
//   onClose={onClose}
//   fullWidth
//   maxWidth="sm"
//   PaperProps={{
//     sx: {
//       borderRadius: 3,
//       px: { xs: 2, sm: 4 },
//       py: { xs: 2, sm: 4 },
     
//     }
//   }}
// >
//   <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
//     Schedule a Demo
//     <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
//       <CloseIcon />
//     </IconButton>
//   </DialogTitle>

//   <DialogContent sx={{ pt: 2 }}>
//     <Grid container spacing={2}>
//       {/* Name & Email */}
//       <Grid item xs={12} sm={6} >
//         <TextField
//           label="Name"
//           name="fullName"
//           fullWidth
//           required
//           value={form.fullName}
//           onChange={handleChange}
//           error={formErrors.fullName}
//           helperText={formErrors.fullName ? 'Required' : ''}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="Email"
//           name="workEmail"
//           type="email"
//           fullWidth
//           required
//           value={form.workEmail}
//           onChange={handleChange}
//           error={formErrors.workEmail}
//           helperText={formErrors.workEmail ? 'Required' : ''}
         
//         />
        
//       </Grid>
     

    


//       {/* Company & Industry */}
//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="Company Name"
//           name="companyName"
//           fullWidth
//           required
//           value={form.companyName}
//           onChange={handleChange}
//           error={formErrors.companyName}
//           helperText={formErrors.companyName ? 'Required' : ''}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="Industry Type"
//           name="industryType"
//           select
//           fullWidth
//           required
//           value={form.industryType}
//           onChange={handleChange}
//           error={formErrors.industryType}
//           helperText={formErrors.industryType ? 'Required' : ''}
//         >
//           {['Finance', 'Health care', 'IT', 'Education', 'Other'].map(type => (
//             <MenuItem key={type} value={type}>{type}</MenuItem>
//           ))}
//         </TextField>
//       </Grid>

//       {form.industryType === 'Other' && (
//         <Grid item xs={12} sm={12}>
//           <TextField
//             label="Other Industry"
//             name="OtherIndustry"
//             fullWidth
//             required
//             value={form.OtherIndustry}
//             onChange={handleChange}
//             error={formErrors.OtherIndustry}
//             helperText={formErrors.OtherIndustry ? 'Please specify your industry' : ''}
//           />
//         </Grid>
//       )}

//       {/* Job Title & Phone */}
//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="Job Title"
//           name="jobTitle"
//           fullWidth
//           required
//           value={form.jobTitle}
//           onChange={handleChange}
//           error={formErrors.jobTitle}
//           helperText={formErrors.jobTitle ? 'Required' : ''}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="Phone Number"
//           name="phone"
//           fullWidth
//           required
//           value={form.phone}
//           onChange={handleChange}
//           error={formErrors.phone}
//           helperText={
//             formErrors.phone
//               ? form.phone.trim() === ''
//                 ? 'Required'
//                 : 'Enter a valid 10-digit phone number'
//               : ''
//           }
//           inputProps={{
//             pattern: '^[6-9][0-9]{9}$',
//             maxLength: 10,
//             inputMode: 'numeric',
//           }}
//         />
//       </Grid>

//       <Grid item xs={12} sm={6}>
//         <TextField
          
//           label="Number of Employees"
//           name="numberOfEmployees"
//           select
//           fullWidth
//           required
//           value={form.numberOfEmployees}
//           onChange={handleChange}
//           error={formErrors.numberOfEmployees}
//           helperText={formErrors.numberOfEmployees ? 'Required' : ''}
//         >
//           {['0-50', '50-100', '100-200', '200+'].map(count => (
//             <MenuItem key={count} value={count}>{count}</MenuItem>
//           ))}
//         </TextField>
//       </Grid>

//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="How Did You Hear About Us"
//           name="howDidYouHearAboutUs"
//           select
//           fullWidth
//           required
//           value={form.howDidYouHearAboutUs}
//           onChange={handleChange}
//           error={formErrors.howDidYouHearAboutUs}
//           helperText={formErrors.howDidYouHearAboutUs ? 'Required' : ''}
//         >
//           <MenuItem value="LinkedIn">LinkedIn</MenuItem>
//           <MenuItem value="HR_Conclave">HR Conclave</MenuItem>
//           <MenuItem value="Other">Other</MenuItem>
//         </TextField>
//       </Grid>

//       {/* Consent */}
//       <Grid item xs={12}>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={form.consent}
//               onChange={handleConsentChange}
//               name="consent"
//               sx={{
//                 color: formErrors.consent ? 'error.main' : 'primary.main'
//               }}
//             />
//           }
//           label="I agree to the terms and conditions"
//         />
//       </Grid>
//     </Grid>
//   </DialogContent>

//   <DialogActions sx={{ px: 3, pb: 3, pt: 2 }}>
//     <Box sx={{ flexGrow: 1 }} />
//     <Button onClick={onClose} variant="outlined" color="secondary">
//       Cancel
//     </Button>
//     <Button variant="contained" onClick={handleSubmit} disabled={!form.consent}>
//       Submit
//     </Button>
//   </DialogActions>
// </Dialog>


   
// <Dialog open={showThankYouPopup} onClose={() => setShowThankYouPopup(false)}>
//   <DialogTitle>🎉 Thank You!</DialogTitle>
//   <DialogContent sx={{ textAlign: 'center', pb: 2 }}>
//     Your form has been submitted successfully.
//   </DialogContent>
// </Dialog>
// </>
    

//   );
// }





// 'use client';

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   FormControlLabel,
//   Checkbox,
//   IconButton,
//   MenuItem,
//   Grid,
//   Box
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';
// import axios from 'axios';

// export default function ScheduleDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
//   const [form, setForm] = useState({
//     fullName: '',
//     workEmail: '',
//     companyName: '',
//     jobTitle: '',
//     industryType: '',
//     OtherIndustry: '',
//     phone: '',
//     numberOfEmployees: '',
//     howDidYouHearAboutUs: '',
//     consent: false
//   });

//   const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
//   const [showThankYouPopup, setShowThankYouPopup] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));

//     // Clear error for that field
//     setFormErrors(prev => {
//       const updated = { ...prev };
//       delete updated[name];
//       return updated;
//     });
//   };

//   const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { checked } = e.target;
//     setForm(prev => ({ ...prev, consent: checked }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phonePattern = /^[6-9]\d{9}$/;

//     const requiredFields = [
//       'fullName',
//       'companyName',
//       'industryType',
//       'jobTitle',
//       'phone',
//       'numberOfEmployees',
//       'howDidYouHearAboutUs'
//     ];

//     const errors: { [key: string]: string } = {};

//     // Required fields (except email)
//    requiredFields.forEach(field => {
//   const value = form[field as keyof typeof form];

//   if (typeof value === 'string' && !value.trim()) {
//     errors[field] = 'Required';
//   }
// });

   

//     // Email validation
//     if (!form.workEmail.trim()) {
//       errors.workEmail = 'Required';
//     } else if (!emailRegex.test(form.workEmail)) {
//       errors.workEmail = 'Invalid email address';
//     }

//     // Phone format
//     if (form.phone.trim() && !phonePattern.test(form.phone)) {
//       errors.phone = 'Enter a valid 10-digit phone number';
//     }

//     // Other industry
//     if (form.industryType === 'Other' && !form.OtherIndustry.trim()) {
//       errors.OtherIndustry = 'Please specify your industry';
//     }

//     // Consent
//     if (!form.consent) {
//       alert('You must agree to the terms and conditions before submitting.');
//       return;
//     }

//     // If errors
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     // Submit
//     try {
//       const response = await axios.post(
//         'https://api.recruitexe.com/v1/api/demo/createBookDemo',
//         form,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       console.log('Server Response:', response.data);

//       setForm({
//         fullName: '',
//         workEmail: '',
//         companyName: '',
//         jobTitle: '',
//         industryType: '',
//         OtherIndustry: '',
//         phone: '',
//         numberOfEmployees: '',
//         howDidYouHearAboutUs: '',
//         consent: false
//       });

//       setFormErrors({});
//       onClose();
//       setShowThankYouPopup(true);
//       setTimeout(() => setShowThankYouPopup(false), 3000);

//     } catch (error: any) {
//       console.error('Submission failed:', error.response?.data || error.message);
//       alert('There was an error submitting the form.');
//     }
//   };

//   return (
//     <>
//     <Dialog
//       open={open}
//       onClose={onClose}
//       fullWidth
//       maxWidth="sm"
//       PaperProps={{
//         sx: {
//           borderRadius: 3,
//           px: { xs: 2, sm: 4 },
//           py: { xs: 2, sm: 4 },
//         }
//       }}
//     >
//       <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
//         Schedule a Demo
//         <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>

//       <DialogContent sx={{ pt: 2 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Name"
//               name="fullName"
//               fullWidth
//               required
//               value={form.fullName}
//               onChange={handleChange}
//               error={Boolean(formErrors.fullName)}
//               helperText={formErrors.fullName}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Email"
//               name="workEmail"
//               type="email"
//               fullWidth
//               required
//               value={form.workEmail}
//               onChange={handleChange}
//               error={Boolean(formErrors.workEmail)}
//               helperText={formErrors.workEmail}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Company Name"
//               name="companyName"
//               fullWidth
//               required
//               value={form.companyName}
//               onChange={handleChange}
//               error={Boolean(formErrors.companyName)}
//               helperText={formErrors.companyName}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Industry Type"
//               name="industryType"
//               select
//               fullWidth
//               required
//               value={form.industryType}
//               onChange={handleChange}
//               error={Boolean(formErrors.industryType)}
//               helperText={formErrors.industryType}
//             >
//               {['Finance', 'Health care', 'IT', 'Education', 'Other'].map(type => (
//                 <MenuItem key={type} value={type}>{type}</MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           {form.industryType === 'Other' && (
//             <Grid item xs={12}>
//               <TextField
//                 label="Other Industry"
//                 name="OtherIndustry"
//                 fullWidth
//                 required
//                 value={form.OtherIndustry}
//                 onChange={handleChange}
//                 error={Boolean(formErrors.OtherIndustry)}
//                 helperText={formErrors.OtherIndustry}
//               />
//             </Grid>
//           )}

//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Job Title"
//               name="jobTitle"
//               fullWidth
//               required
//               value={form.jobTitle}
//               onChange={handleChange}
//               error={Boolean(formErrors.jobTitle)}
//               helperText={formErrors.jobTitle}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Phone Number"
//               name="phone"
//               fullWidth
//               required
//               value={form.phone}
//               onChange={handleChange}
//               error={Boolean(formErrors.phone)}
//               helperText={formErrors.phone}
//               inputProps={{
//                 pattern: '^[6-9][0-9]{9}$',
//                 maxLength: 10,
//                 inputMode: 'numeric',
//               }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Number of Employees"
//               name="numberOfEmployees"
//               select
//               fullWidth
//               required
//               value={form.numberOfEmployees}
//               onChange={handleChange}
//               error={Boolean(formErrors.numberOfEmployees)}
//               helperText={formErrors.numberOfEmployees}
//             >
//               {['0-50', '50-100', '100-200', '200+'].map(count => (
//                 <MenuItem key={count} value={count}>{count}</MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="How Did You Hear About Us"
//               name="howDidYouHearAboutUs"
//               select
//               fullWidth
//               required
//               value={form.howDidYouHearAboutUs}
//               onChange={handleChange}
//               error={Boolean(formErrors.howDidYouHearAboutUs)}
//               helperText={formErrors.howDidYouHearAboutUs}
//             >
//               <MenuItem value="LinkedIn">LinkedIn</MenuItem>
//               <MenuItem value="HR_Conclave">HR Conclave</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </TextField>
//           </Grid>

//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={form.consent}
//                   onChange={handleConsentChange}
//                   name="consent"
//                   sx={{
//                     color: formErrors.consent ? 'error.main' : 'primary.main'
//                   }}
//                 />
//               }
//               label="I agree to the terms and conditions"
//             />
//           </Grid>
//         </Grid>
//       </DialogContent>

//       <DialogActions sx={{ px: 3, pb: 3, pt: 2 }}>
//         <Box sx={{ flexGrow: 1 }} />
//         <Button onClick={onClose} variant="outlined" color="secondary">
//           Cancel
//         </Button>
//         <Button variant="contained" onClick={handleSubmit} disabled={!form.consent}>
//           Submit
//         </Button>
//       </DialogActions>
//     </Dialog>
//     <Dialog open={showThankYouPopup} onClose={() => setShowThankYouPopup(false)}>
//   <DialogTitle>🎉 Thank You!</DialogTitle>
//   <DialogContent sx={{ textAlign: 'center', pb: 2 }}>
//    Your form has been submitted successfully.
//   </DialogContent>
//  </Dialog></>
//   );
// }



'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  IconButton,
  MenuItem,
  Grid,
  Box,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import axios from 'axios';

export default function ScheduleDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    jobTitle: '',
    industryType: '',
    OtherIndustry: '',
    phone: '',
    numberOfEmployees: '',
    howDidYouHearAboutUs: '',
    consent: false
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({});
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setForm(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      'fullName',
      'workEmail',
      'companyName',
      'industryType',
      'jobTitle',
      'phone',
      'numberOfEmployees',
      'howDidYouHearAboutUs'
    ];

    const errors: { [key: string]: boolean } = {};

    requiredFields.forEach(field => {
      const value = form[field as keyof typeof form];
      if (typeof value === 'string' && !value.trim()) {
        errors[field] = true;
      }
    });

    const phonePattern = /^[6-9]\d{9}$/;
    if (form.phone.trim() && !phonePattern.test(form.phone)) {
      errors.phone = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.workEmail.trim() || !emailRegex.test(form.workEmail)) {
      errors.workEmail = true;
    }

    if (form.industryType === 'Other' && !form.OtherIndustry.trim()) {
      errors.OtherIndustry = true;
    }

    if (!form.consent) {
      alert('You must agree to the terms and conditions before submitting.');
      return;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(
        'https://api.recruitexe.com/v1/api/demo/createBookDemo',
        form,
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log('Server Response:', response.data);

      setForm({
        fullName: '',
        workEmail: '',
        companyName: '',
        jobTitle: '',
        industryType: '',
        OtherIndustry: '',
        phone: '',
        numberOfEmployees: '',
        howDidYouHearAboutUs: '',
        consent: false
      });

      setFormErrors({});
      onClose();
      setShowThankYouPopup(true);
      setTimeout(() => setShowThankYouPopup(false), 3000);

    } catch (error: any) {
      alert('There was an error submitting the form.');
    }
  };

  const textFieldStyle = {
    '& .MuiInputBase-root': {
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    '& .MuiInputLabel-root': {
      color: 'white'
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset': { borderColor: '#BBDEFB' },
      '&.Mui-focused fieldset': { borderColor: 'white' }
    },
    '& .MuiSvgIcon-root': { color: 'white' },
    '& .MuiFormHelperText-root': { color: '#FFCDD2' }
  };

  return (
    <>
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 3,
          px: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 4 },
          background: 'linear-gradient(to bottom right, #0F4C81, #2563EB)',
          color: 'white'
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'white' }}>
        Schedule a Demo
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider/>
      <DialogContent sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          {/* Name & Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="fullName"
              fullWidth
              required
              autoComplete="off"
              value={form.fullName}
              onChange={handleChange}
              error={formErrors.fullName}
              helperText={formErrors.fullName ? 'Required' : ''}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="workEmail"
              type="email"
              fullWidth
              required
              autoComplete="off"
              value={form.workEmail}
              onChange={handleChange}
              error={formErrors.workEmail}
              helperText={formErrors.workEmail ? 'Enter valid email' : ''}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            />
          </Grid>

          {/* Company & Industry */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Name"
              name="companyName"
              fullWidth
              required
              autoComplete="off"
              value={form.companyName}
              onChange={handleChange}
              error={formErrors.companyName}
              helperText={formErrors.companyName ? 'Required' : ''}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Industry Type"
              name="industryType"
              select
              fullWidth
              required
              autoComplete="off"
              value={form.industryType}
              onChange={handleChange}
              error={formErrors.industryType}
              helperText={formErrors.industryType ? 'Required' : ''}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            >
              {['Finance', 'Health care', 'IT', 'Education', 'Other'].map(type => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </TextField>
          </Grid>

          {form.industryType === 'Other' && (
            <Grid item xs={12}>
              <TextField
                label="Other Industry"
                name="OtherIndustry"
                fullWidth
                required
                autoComplete="off"
                value={form.OtherIndustry}
                onChange={handleChange}
                error={formErrors.OtherIndustry}
                helperText={formErrors.OtherIndustry ? 'Please specify your industry' : ''}
                InputLabelProps={{ shrink: undefined }}
                sx={textFieldStyle}
              />
            </Grid>
          )}

          {/* Job & Phone */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Job Title"
              name="jobTitle"
              fullWidth
              required
              autoComplete="off"
              value={form.jobTitle}
              onChange={handleChange}
              error={formErrors.jobTitle}
              helperText={formErrors.jobTitle ? 'Required' : ''}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              required
              autoComplete="off"
              value={form.phone}
              onChange={handleChange}
              error={formErrors.phone}
              helperText={
                formErrors.phone
                  ? form.phone.trim() === ''
                    ? 'Required'
                    : 'Enter a valid 10-digit phone number'
                  : ''
              }
              inputProps={{
                pattern: '^[6-9][0-9]{9}$',
                maxLength: 10,
                inputMode: 'numeric' as const
              }}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            />
          </Grid>

          {/* Employees & Source */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Number of Employees"
              name="numberOfEmployees"
              select
              fullWidth
              required
              autoComplete="off"
              value={form.numberOfEmployees}
              onChange={handleChange}
              error={formErrors.numberOfEmployees}
              helperText={formErrors.numberOfEmployees ? 'Required' : ''}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            >
              {['0-50', '50-100', '100-200', '200+'].map(count => (
                <MenuItem key={count} value={count}>{count}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="How Did You Hear About Us"
              name="howDidYouHearAboutUs"
              select
              fullWidth
              required
              autoComplete="off"
              value={form.howDidYouHearAboutUs}
              onChange={handleChange}
              error={formErrors.howDidYouHearAboutUs}
              helperText={formErrors.howDidYouHearAboutUs ? 'Required' : ''}
              InputLabelProps={{ shrink: undefined }}
              sx={textFieldStyle}
            >
              <MenuItem value="LinkedIn">LinkedIn</MenuItem>
              <MenuItem value="HR_Conclave">HR Conclave</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>

          {/* Consent */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.consent}
                  onChange={handleConsentChange}
                  name="consent"
                  sx={{
                    color: formErrors.consent ? 'error.main' : 'white'
                  }}
                />
              }
              label="I agree to the terms and conditions"
              sx={{ color: 'white' }}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3, pt: 2 }}>
        <Box sx={{ flexGrow: 1 }} />
        <Button onClick={onClose} variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!form.consent}
          sx={{
            backgroundColor: '#8e44ad',
            '&:hover': { backgroundColor: '#732d91' },
            color: 'white'
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
    <Dialog open={showThankYouPopup} onClose={() => setShowThankYouPopup(false)}>
      <DialogTitle>🎉 Thank You!</DialogTitle>
    <DialogContent sx={{ textAlign: 'center', pb: 2 }}>
   Your form has been submitted successfully.
   </DialogContent>
  </Dialog>
    </>
  );
}
