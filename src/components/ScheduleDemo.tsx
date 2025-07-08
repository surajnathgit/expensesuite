
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
  Box
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

    // Clear error for that field as user types
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

  // 1. Check all required fields
  requiredFields.forEach(field => {
  const value = form[field as keyof typeof form];

  if (typeof value === 'string') {
    if (!value.trim()) {
      errors[field] = true;
    }
  } else if (!value) {
    errors[field] = true;
  }
});


  // 2. If phone is provided, validate its format
  const phonePattern = /^[6-9]\d{9}$/;
  if (form.phone.trim() && !phonePattern.test(form.phone)) {
    errors.phone = true;
  }

  // 3. Check "Other" industry
  if (form.industryType === 'Other' && !form.OtherIndustry.trim()) {
    errors.otherIndustry = true;
  }

  // 4. Consent check
  if (!form.consent) {
    alert('You must agree to the terms and conditions before submitting.');
    return;
  }

  // 5. Show errors if any
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  // 6. Submit form
  try {
    const response = await axios.post(
      'https://api.recruitexe.com/v1/api/demo/createBookDemo',
      form,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
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
    console.error('Submission failed:', error.response?.data || error.message);
    alert('There was an error submitting the form.');
  }
};

  return (
    <>
   
    {/* <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
  <DialogTitle sx={{ fontWeight: 'bold', fontSize: 20 }}>
    Schedule a Demo
    <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
      <CloseIcon />
    </IconButton>
  </DialogTitle>

  <DialogContent sx={{ py: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Name"
          name="fullName"
          fullWidth
          value={form.fullName}
          onChange={handleChange}
          error={formErrors.fullName}
          helperText={formErrors.fullName ? 'Required' : ''}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
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
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Company Name"
          name="companyName"
          fullWidth
          value={form.companyName}
          onChange={handleChange}
          error={formErrors.companyName}
          helperText={formErrors.companyName ? 'Required' : ''}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Industry Type"
          name="industryType"
          select
          fullWidth
          value={form.industryType}
          onChange={handleChange}
          error={formErrors.industryType}
          helperText={formErrors.industryType ? 'Required' : ''}
        >
          {['Finance', 'Health care', 'IT', 'Education', 'Other'].map(type => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>
      </Grid>

      {form.industryType === 'Other' && (
        <Grid item xs={12} sm={6}>
          <TextField
            label="Other Industry"
            name="OtherIndustry"
            fullWidth
            value={form.OtherIndustry}
            onChange={handleChange}
            error={formErrors.OtherIndustry}
            helperText={formErrors.OtherIndustry ? 'Please specify your industry' : ''}
          />
        </Grid>
      )}

      <Grid item xs={12} sm={6}>
        <TextField
          label="Job Title"
          name="jobTitle"
          fullWidth
          value={form.jobTitle}
          onChange={handleChange}
          error={formErrors.jobTitle}
          helperText={formErrors.jobTitle ? 'Required' : ''}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
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
            inputMode: 'numeric',
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
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
          {['0-50', '50-100', '100-200', '200+'].map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="How Did You Hear About Us"
          name="howDidYouHearAboutUs"
          select
          fullWidth
          value={form.howDidYouHearAboutUs}
          onChange={handleChange}
          error={formErrors.howDidYouHearAboutUs}
          helperText={formErrors.howDidYouHearAboutUs ? 'Required' : ''}
        >
          <MenuItem value="LinkedIn">LinkedIn</MenuItem>
          <MenuItem value="HR_Conclave">HR Conclave</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={form.consent}
              onChange={handleConsentChange}
              name="consent"
              sx={{ color: form.consent ? 'primary.main' : 'error.main' }}
            />
          }
          label="I agree to the terms and conditions"
        />
      </Grid>
    </Grid>
  </DialogContent>

  <DialogActions sx={{ px: 3, pb: 3 }}>
    <Button onClick={onClose} variant="outlined">Cancel</Button>
    <Button variant="contained" onClick={handleSubmit} disabled={!form.consent}>
      Submit
    </Button>
  </DialogActions>
</Dialog> */}

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
    }
  }}
>
  <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
    Schedule a Demo
    <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
      <CloseIcon />
    </IconButton>
  </DialogTitle>

  <DialogContent sx={{ pt: 2 }}>
    <Grid container spacing={2}>
      {/* Name & Email */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Name"
          name="fullName"
          fullWidth
          required
          value={form.fullName}
          onChange={handleChange}
          error={formErrors.fullName}
          helperText={formErrors.fullName ? 'Required' : ''}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Email"
          name="workEmail"
          type="email"
          fullWidth
          required
          value={form.workEmail}
          onChange={handleChange}
          error={formErrors.workEmail}
          helperText={formErrors.workEmail ? 'Required' : ''}
        />
      </Grid>

      {/* Company & Industry */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Company Name"
          name="companyName"
          fullWidth
          required
          value={form.companyName}
          onChange={handleChange}
          error={formErrors.companyName}
          helperText={formErrors.companyName ? 'Required' : ''}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Industry Type"
          name="industryType"
          select
          fullWidth
          required
          value={form.industryType}
          onChange={handleChange}
          error={formErrors.industryType}
          helperText={formErrors.industryType ? 'Required' : ''}
        >
          {['Finance', 'Health care', 'IT', 'Education', 'Other'].map(type => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>
      </Grid>

      {form.industryType === 'Other' && (
        <Grid item xs={12} sm={12}>
          <TextField
            label="Other Industry"
            name="OtherIndustry"
            fullWidth
            required
            value={form.OtherIndustry}
            onChange={handleChange}
            error={formErrors.OtherIndustry}
            helperText={formErrors.OtherIndustry ? 'Please specify your industry' : ''}
          />
        </Grid>
      )}

      {/* Job Title & Phone */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Job Title"
          name="jobTitle"
          fullWidth
          required
          value={form.jobTitle}
          onChange={handleChange}
          error={formErrors.jobTitle}
          helperText={formErrors.jobTitle ? 'Required' : ''}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Phone Number"
          name="phone"
          fullWidth
          required
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
            inputMode: 'numeric',
          }}
        />
      </Grid>

      {/* Employees & Referral */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Number of Employees"
          name="numberOfEmployees"
          select
          fullWidth
          required
          value={form.numberOfEmployees}
          onChange={handleChange}
          error={formErrors.numberOfEmployees}
          helperText={formErrors.numberOfEmployees ? 'Required' : ''}
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
          value={form.howDidYouHearAboutUs}
          onChange={handleChange}
          error={formErrors.howDidYouHearAboutUs}
          helperText={formErrors.howDidYouHearAboutUs ? 'Required' : ''}
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
                color: formErrors.consent ? 'error.main' : 'primary.main'
              }}
            />
          }
          label="I agree to the terms and conditions"
        />
      </Grid>
    </Grid>
  </DialogContent>

  <DialogActions sx={{ px: 3, pb: 3, pt: 2 }}>
    <Box sx={{ flexGrow: 1 }} />
    <Button onClick={onClose} variant="outlined" color="secondary">
      Cancel
    </Button>
    <Button variant="contained" onClick={handleSubmit} disabled={!form.consent}>
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
