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

 

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    Axios.post("/login", {
      username: data.get('username'),
      password: data.get('password'),
    }).then((data)=>{
      if(data.data.success) {
        navigate("/Home")
      }else {
        alert(data.data.message)
      }
    }).catch((e)=>alert(e))
  };
  
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    <ThemeProvider theme={defaultTheme}>
    <Card sx={{ display: 'flex', border: 'black', borderRadius: '20px', width: '500px', height: '525px', justifyContent: 'center'}}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={Logo} alt="Logo" style={{ height: '30px', marginRight: '8px',margin:'20px',width:'40%',height:'15%' }} />
          <Typography component="h1" variant="h5" sx={{fontFamily: 'readex-fonts'}}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,fontFamily: 'readex-fonts'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
              <Link href="#" variant="body2" sx={{ fontFamily: 'readex-fonts' }} onClick={() => navigate("/RegisterUsers")}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      </Card>
    </ThemeProvider>
    </Box>
  );
}