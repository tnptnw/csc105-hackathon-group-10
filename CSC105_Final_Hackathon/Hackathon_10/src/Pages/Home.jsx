import React from 'react'
import { Box, Typography, Grid , Button} from '@mui/material';
import Bodyguard from '../assets/Bodyguard.jpg'
import Bodyguard1 from '../assets/Bodyguard1.jpg'
import Bodyguard3 from '../assets/Bodyguard3.jpg'
import Bodyguard4 from '../assets/Bodyguard4.jpg'
import Bodyguard5 from '../assets/Bodyguard5.jpg'
import Navbar from '../Pages/Navbar'
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import Axios from '../AxiosInstance';


export const Home = () => {

  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  }

  return (
    <>
    <Navbar/>
    <Box >
      <Grid container spacing={0} gap={0} margin={0} sx={{display:'center',alignItems:'center'}}>
        <Grid item xs={12} sm={6} sx={{height:'400px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontFamily: 'readex-fonts-bold',fontSize:'100px'}}>About Us</Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{height:'500px',display:'flex',justifyContent:'center',alignItems:'center',padding:'30px'}}>
        <Typography sx={{fontFamily: 'readex-fonts',fontSize:'20px'}}>
        At SecureGuard, we understand the importance of safety and protection. We are dedicated to providing top-notch security guard and bodyguard services to ensure the safety of your home and personal well-being.
        Our team of highly trained and experienced security professionals is committed to delivering exceptional security solutions tailored to meet your specific needs. Whether you require residential security, event security, executive protection, or any other security services, we've got you covered.
        </Typography>
        </Grid>
      </Grid>

      <Box
      sx={{
        backgroundImage: `url(${Bodyguard5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit:'fill'
      }}
    >
      <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color:'white',fontFamily: 'readex-fonts-bold' }}>
          What are you looking for?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center', margin: '10px 0px' }}>
        <Button variant="contained" sx={{ margin: '20px',fontFamily: 'readex-fonts-bold',backgroundColor:"rgba(0,0,0,0)",
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',boxShadow: '0px 0px 20px rgba(255, 255, 255, 1)',
        }, }} onClick={() => handleClick("/Result")}>
          Guard
        </Button>
        <Button variant="contained" sx={{ margin: '20px',fontFamily: 'readex-fonts-bold',backgroundColor:"rgba(0,0,0,0)",
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',boxShadow: '0px 0px 20px rgba(255, 255, 255, 1)',
        }, }} onClick={() => handleClick("/Result")}>
          Bodyguard
        </Button>
      </Grid>
    </Box>
    </Box>
    </>
  );
}
