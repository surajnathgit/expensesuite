


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
//   Stack
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';
// import axios from 'axios';

// export default function ScheduleDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     company: '',
//     jobTitle: '',
//     industryType: '',
//     phone: '',
//     numberOfEmployees: '',
//     howDidYouHearAboutUs: '',
//     consent: false
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { checked } = e.target;
//     setForm(prev => ({ ...prev, consent: checked }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.consent) {
//       alert('You must agree to the terms and conditions before submitting.');
//       return;
//     }

//     console.log('Submitting payload:', form);

//     // Manual field validation
//   const requiredFields = ['name', 'email', 'company', 'industryType', 'jobTitle', 'phone', 'numberOfEmployees','howDidYouHearAboutUs'];
//   const emptyFields = requiredFields.filter((field) => !form[field as keyof typeof form]);

//   if (emptyFields.length > 0) {
//     alert(`Please fill all required fields: ${emptyFields.join(', ')}`);
//     return;
//   }

//     try {
//       const response = await axios.post(
//         'https://api.recruitexe.com/v1/api/demo/createBookDemo',
//         form,
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       console.log('Server Response:', response.data);
     
//       alert('Form submitted successfully!');
//       onClose(); // close the dialog
//     } catch (error: any) {
//       console.error('Submission failed:', error.response?.data || error.message);
//       alert('There was an error submitting the form.');
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
//       <DialogTitle>
//         Schedule a Demo
//         <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>

//       <DialogContent>
//         <Stack spacing={2} mt={1}>
//           <TextField label="Name" name="name" fullWidth required value={form.name} onChange={handleChange} />
//           <TextField label="Email" name="email" type="email" fullWidth required value={form.email} onChange={handleChange} />
//           <TextField label="Company Name" name="company" fullWidth required value={form.company} onChange={handleChange} />
//           <TextField label="Industry Type" name="industryType" fullWidth required value={form.industryType} onChange={handleChange} />
//           <TextField label="Job Title" name="jobTitle" fullWidth required value={form.jobTitle} onChange={handleChange} />
//           <TextField label="Phone Number" name="phone" fullWidth required value={form.phone} onChange={handleChange} />
//           {/* <TextField label="Number of Employees" name="numberOfEmployees" type="number" fullWidth value={form.numberOfEmployees} onChange={handleChange} /> */}
//           <TextField
//             label="Number of Employees"
//              name="numberOfEmployees"
//              select
//              fullWidth
//              required
//              value={form.numberOfEmployees}
//              onChange={handleChange}
//           >
//             <MenuItem value="50-100">50–100</MenuItem>
//             <MenuItem value="0-50">0–50</MenuItem>
//              <MenuItem value="100-200">100–200</MenuItem>
//              <MenuItem value="200+">200+</MenuItem>
//           </TextField>
//           <TextField label="How Did You Hear About Us" name="howDidYouHearAboutUs" fullWidth multiline rows={3} value={form.howDidYouHearAboutUs} onChange={handleChange} />

//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={form.consent}
//                 onChange={handleConsentChange}
//                 name="consent"
//               />
//             }
//             label="I agree to the terms and conditions"
//           />
//         </Stack>
//       </DialogContent>

//       <DialogActions sx={{ p: 2 }}>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button variant="contained" onClick={handleSubmit} disabled={!form.consent}>
//           Submit
//         </Button>
//       </DialogActions>
//     </Dialog>
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
  Alert,
  Snackbar
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
    otherIndustry: '',
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

    // Clear error for that field as user types
    setFormErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setForm(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['fullName', 'workEmail', 'companyName', 'industryType', 'jobTitle', 'phone', 'numberOfEmployees'];
    const phonePattern = /^[6-9]\d{9}$/;

if (!phonePattern.test(form.phone)) {
  setFormErrors(prev => ({ ...prev, phone: true }));
  return;
}
    const errors: { [key: string]: boolean } = {};
    requiredFields.forEach(field => {
      if (!form[field as keyof typeof form]) {
        errors[field] = true;
      }
    });
    // Validate "Other" industry input if selected
  if (form.industryType === 'Other' && !form.otherIndustry.trim()) {
    errors.otherIndustry = true;
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
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Server Response:', response.data);
      // alert('Form submitted successfully!');
      // Reset the form
       setForm({
       fullName: '',
       workEmail: '',
       companyName: '',
       jobTitle: '',
       industryType: '',
       otherIndustry: '',
       phone: '',
       numberOfEmployees: '',
       howDidYouHearAboutUs: '',
       consent: false
     });
      setFormErrors({}); // Optional

      onClose();
      
    setShowThankYouPopup(true);
setTimeout(() => setShowThankYouPopup(false), 3000);

    } catch (error: any) {
      console.error('Submission failed:', error.response?.data || error.message);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <>
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Schedule a Demo
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {/* <Stack spacing={2} mt={1}> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} >
          <TextField
            label="Name"
            name="fullName"
            fullWidth
            value={form.fullName}
            onChange={handleChange}
            error={formErrors.fullName}
            helperText={formErrors.fullName ? 'Required' : ''}
          /></Grid>
         <Grid item xs={12} sm={6} > <TextField
            label="Email"
            name="workEmail"
            type="email"
            fullWidth
            value={form.workEmail}
            onChange={handleChange}
            error={formErrors.workEmail}
            helperText={formErrors.workEmail ? 'Required' : ''}
          /></Grid>
         <Grid item xs={12} sm={6} > <TextField
            label="Company Name"
            name="companyName"
            fullWidth
            value={form.companyName}
            onChange={handleChange}
            error={formErrors.companyName}
            helperText={formErrors.companyName ? 'Required' : ''}
          /></Grid>
          <Grid item xs={12} sm={6} > <TextField
            label="Industry Type"
            name="industryType"
            select
            fullWidth
            value={form.industryType}
            onChange={handleChange}
            error={formErrors.industryType}
            helperText={formErrors.industryType ? 'Required' : ''}
          >
             <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Health care">Health care</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
             <MenuItem value="Other">Other</MenuItem>
          </TextField></Grid>
          {form.industryType === 'Other' && (
  <Grid item xs={12} sm={6}>
    <TextField
      label="Specify Industry"
      name="otherIndustry"
      fullWidth
      value={form.otherIndustry}
      onChange={handleChange}
      error={formErrors.otherIndustry}
      helperText={formErrors.otherIndustry ? 'Please specify your industry' : ''}
    />
 </Grid>
)} 
          <Grid item xs={12} sm={6} ><TextField
            label="Job Title"
            name="jobTitle"
            fullWidth
            value={form.jobTitle}
            onChange={handleChange}
            error={formErrors.jobTitle}
            helperText={formErrors.jobTitle ? 'Required' : ''}
          /></Grid>
        
        <Grid item xs={12} sm={6} > <TextField
          label="Phone Number"
          name="phone"
          fullWidth
          required
          value={form.phone}
          onChange={handleChange}
          error={formErrors.phone}
           helperText={formErrors.phone ? 'Enter a valid 10-digit phone number' : ''}
           inputProps={{
           pattern: '^[6-9][0-9]{9}$',
           maxLength: 10,
           inputMode: 'numeric'
           }}
          /></Grid>


         <Grid item xs={12} sm={6} > <TextField
            label="Number of Employees"
            name="numberOfEmployees"
            select
            fullWidth
            value={form.numberOfEmployees}
            onChange={handleChange}
            error={formErrors.numberOfEmployees}
            helperText={formErrors.numberOfEmployees ? 'Required' : ''}
          >
            <MenuItem value="0-50">0–50</MenuItem>
            <MenuItem value="50-100">50–100</MenuItem>
            <MenuItem value="100-200">100–200</MenuItem>
            <MenuItem value="200+">200+</MenuItem>
          </TextField></Grid>

          <Grid item xs={12} sm={6} ><TextField
            label="How Did You Hear About Us"
            name="howDidYouHearAboutUs"
            select
            fullWidth
            multiline
            rows={3}
            value={form.howDidYouHearAboutUs}
            onChange={handleChange}
            error={formErrors.howDidYouHearAboutU}
            helperText={formErrors.howDidYouHearAboutU ? 'Required' : ''}
          >
             <MenuItem value="LinkedIn">LinkedIn</MenuItem>
            <MenuItem value="HR_Conclave">HR Conclave</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
            
          </TextField></Grid>

          <FormControlLabel 
            control={
              <Checkbox
                checked={form.consent}
                onChange={handleConsentChange}
                name="consent"
              />
            }
            label="I agree to the terms and conditions"
          />
        {/* </Stack> */}</Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={!form.consent}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
    {/* <Snackbar
  open={showSnackbar}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
  <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
    Thank you! Your form has been submitted.
  </Alert>
</Snackbar> */}
<Dialog open={showThankYouPopup} onClose={() => setShowThankYouPopup(false)}>
  <DialogTitle>🎉 Thank You!</DialogTitle>
  <DialogContent sx={{ textAlign: 'center', pb: 2 }}>
    Your form has been submitted successfully.
  </DialogContent>
</Dialog>
</>
    

  );
}
