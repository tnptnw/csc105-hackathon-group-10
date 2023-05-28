// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
// import FormLabel from '@mui/material/FormLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import { Card } from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import Logo from '../assets/Logo.png';
// import { useNavigate } from 'react-router-dom';
// import Axios from '../AxiosInstance';

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const [gender, setGender] = useState('female');

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   let navigate = useNavigate();
//   const handleClick = (destination) => {
//     navigate(destination);
//   }

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <ThemeProvider theme={defaultTheme}>
//         <Card sx={{ display: 'flex', border: 'black', borderRadius: '20px', width: '500px', height: '500px', justifyContent: 'center'}}>
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <img src={Logo} alt="Logo" style={{ height: '30px', marginRight: '8px',margin:'20px',width:'40%',height:'15%' }} />
//               <Typography component="h1" variant="h5" sx={{fontFamily: 'readex-fonts'}}>
//                 Sign up
//               </Typography>
//               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="Experience"
//                       label="Experience"
//                       name="Experience"
//                       autoComplete="Experience"
//                     />
//                   </Grid>
//                 </Grid>
//                 <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                   <FormControl component="fieldset" sx={{ mt: 2 }}>
//                     <FormLabel component="legend">Choose only one</FormLabel>
//                     <RadioGroup
//                       aria-label=""
//                       name="Choose only one"
//                       value={gender}
//                       onChange={handleGenderChange}
//                     >
//                       <FormControlLabel value="Security Guard" control={<Radio />} label="Security Guard" />
//                       <FormControlLabel value="Bodyguard" control={<Radio />} label="Bodyguard" />
//                     </RadioGroup>
//                   </FormControl>
//                 </Box>
//                 <Box sx={{ display: 'flex' }}>
//                   <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2,fontFamily: 'readex-fonts' }} onClick={() => handleClick("/Wait")}>
//                     Sign Up
//                   </Button>
                  
//                 </Box>
//               </Box>
//             </Box>
//           </Container>
//         </Card>
//       </ThemeProvider>
//     </Box>
//   );
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import Axios from '../AxiosInstance';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    Axios.post("/register", {
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      username: data.get('username'),
      password: data.get('password'),
      nationalId: data.get('national_id'),
      age: data.get('age'),
    }).then((data)=>{
      console.log(data.data);
      if(data.data.success) {
        navigate("/Home")
      }else {
        alert(data.data.message)
        console.log(data.data);

      }
    }).catch((e)=>alert(e))
  };

  
  const handleClick = (destination) => {
    navigate(destination);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ display: 'flex', border: 'black', borderRadius: '20px', width: '500px', height: '700px', justifyContent: 'center' }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Logo} alt="Logo" style={{ height: '30px', marginRight: '8px',margin:'20px',width:'40%',height:'15%' }} />
            <Typography component="h1" variant="h5" sx={{fontFamily: 'readex-fonts'}}>
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="nationalID"
                    required
                    fullWidth
                    id="nationalID"
                    label="National ID"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    name="age"
                    autoComplete="age"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="district"
                    label="District"
                    name="district"
                    autoComplete="district"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    
                    fullWidth
                    id="experience"
                    label="Experience"
                    name="experience"
                    autoComplete="experience"
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex' }}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 ,fontFamily: 'readex-fonts'}} onClick={() => handleSubmit()}>
                  Sign up
                </Button>
                
              </Box>
            </Box>
          </Box>
        </Container>
      </Card>
    </Box>
  );
}

