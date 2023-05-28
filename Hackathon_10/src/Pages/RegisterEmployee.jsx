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
import { Card } from '@mui/material';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import Axios from '../AxiosInstance';
import Pic1 from '../assets/MarkZuckerberg.webp'


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  }


  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    <ThemeProvider theme={defaultTheme}>
    <Card sx={{display:'flex',border:'black',borderRadius:'20px',width:'500px',height:'500px',justifyContent:'center'}}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={Pic1} alt="Logo" style={{ height: '30px', marginRight: '8px',margin:'20px',width:'40%',height:'15%' }} />
          <Typography component="h1" variant="h5" sx={{fontFamily: 'readex-fonts'}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="District"
                  label="District"
                  type="District"
                  id="District"
                  autoComplete="District"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,fontFamily: 'readex-fonts'}}
              onClick={() => handleClick("/Home")}
            >
              Sign Up
            </Button>
            
          </Box>
        </Box>
      </Container>
    </Card>
    </ThemeProvider>
    </Box>
  );
}