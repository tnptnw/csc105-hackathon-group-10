import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../assets/Logo.png'
import Navbar from './Navbar'

const Wait = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',flexDirection:'column' }}>
      <img src={Logo} alt="Logo" style={{ height: '30px', marginRight: '8px',margin:'20px',width:'25%',height:'10%' }} />
      <Typography sx={{ fontWeight: 'bold', fontSize: '36px',fontFamily: 'readex-fonts',marginTop:'20px' }}>Waiting for job.</Typography>
    </Box>
    </>
  );
};
export default Wait;
