


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
  Stack
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
    phone: '',
    numberOfEmployees: '',
    howDidYouHearAboutUs: '',
    consent: false
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({});

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

    const errors: { [key: string]: boolean } = {};
    requiredFields.forEach(field => {
      if (!form[field as keyof typeof form]) {
        errors[field] = true;
      }
    });

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
      alert('Form submitted successfully!');
      // Reset the form
       setForm({
       fullName: '',
       workEmail: '',
       companyName: '',
       jobTitle: '',
       industryType: '',
       phone: '',
       numberOfEmployees: '',
       howDidYouHearAboutUs: '',
       consent: false
     });
      setFormErrors({}); // Optional

      onClose();
    } catch (error: any) {
      console.error('Submission failed:', error.response?.data || error.message);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Schedule a Demo
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Name"
            name="fullName"
            fullWidth
            value={form.fullName}
            onChange={handleChange}
            error={formErrors.fullName}
            helperText={formErrors.fullName ? 'Required' : ''}
          />
          <TextField
            label="Email"
            name="workEmail"
            type="email"
            fullWidth
            value={form.workEmail}
            onChange={handleChange}
            error={formErrors.workEmail}
            helperText={formErrors.workEmail ? 'Required' : ''}
          />
          <TextField
            label="Company Name"
            name="companyName"
            fullWidth
            value={form.companyName}
            onChange={handleChange}
            error={formErrors.companyName}
            helperText={formErrors.companyName ? 'Required' : ''}
          />
          <TextField
            label="Industry Type"
            name="industryType"
            fullWidth
            value={form.industryType}
            onChange={handleChange}
            error={formErrors.industryType}
            helperText={formErrors.industryType ? 'Required' : ''}
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            fullWidth
            value={form.jobTitle}
            onChange={handleChange}
            error={formErrors.jobTitle}
            helperText={formErrors.jobTitle ? 'Required' : ''}
          />
          <TextField
            label="Phone Number"
            name="phone"
            fullWidth
            value={form.phone}
            onChange={handleChange}
            error={formErrors.phone}
            helperText={formErrors.phone ? 'Required' : ''}
          />
          <TextField
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
          </TextField>

          <TextField
            label="How Did You Hear About Us"
            name="howDidYouHearAboutUs"
            fullWidth
            multiline
            rows={3}
            value={form.howDidYouHearAboutUs}
            onChange={handleChange}
          />

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
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={!form.consent}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
