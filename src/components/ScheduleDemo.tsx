// 'use client';

// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   IconButton,
//   useMediaQuery,
//   useTheme,
//   Typography
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';

// export default function ScheduleDemo() {
//   const [open, setOpen] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     date: '',
//     message: '',
//   });

//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', form);
//     // You can send this to your backend here
//     setOpen(false);
//     setForm({ name: '', email: '', company: '', phone: '', date: '', message: '' });
//   };

//   return (
//     <>
//       <Button
//         variant="contained"
//         color="secondary"
//         sx={{
//           backgroundColor: '#63cfed',
//           textTransform: 'none',
//           fontWeight: 600,
//           borderRadius: 2,
//           px: 3,
//           '&:hover': {
//             backgroundColor: '#54b9d7',
//           },
//         }}
//         onClick={() => setOpen(true)}
//       >
//         Schedule Demo
//       </Button>

//       <Dialog open={open} onClose={() => setOpen(false)} fullScreen={fullScreen} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="h6" fontWeight={700}>
//             Schedule a Demo
//           </Typography>
//           <IconButton onClick={() => setOpen(false)}>
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>

//         <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
//           <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
//           <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth required />
//           <TextField label="Company Name (optional)" name="company" value={form.company} onChange={handleChange} fullWidth />
//           <TextField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} fullWidth required />
//           <TextField
//             type="date"
//             label="Preferred Date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             fullWidth
//             InputLabelProps={{ shrink: true }}
//             required
//           />
//           <TextField
//             label="Message / Query"
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             fullWidth
//             multiline
//             rows={3}
//           />
//         </DialogContent>

//         <DialogActions sx={{ p: 2 }}>
//           <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: '#63cfed' }}>
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
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
  IconButton,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function ScheduleDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitted:', form);
    onClose(); // Close on submit
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
          <TextField label="Name" name="name" fullWidth required value={form.name} onChange={handleChange}  />
          <TextField label="Email" name="email" type="email" fullWidth required value={form.email} onChange={handleChange}  />
          <TextField label="Company Name" name="company" fullWidth value={form.company} onChange={handleChange} />
          <TextField label="Phone Number" name="phone" fullWidth required value={form.phone} onChange={handleChange} />
          <TextField label="Date" name="date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={form.date} onChange={handleChange} />
          <TextField label="Message/Query" name="message" fullWidth multiline rows={3} value={form.message} onChange={handleChange} />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
