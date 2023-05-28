import React from 'react';
import Logo from '../assets/Logo.png'
import { Box, Typography, Grid , Button, CardMedia, Card, CardActionArea, CardContent} from '@mui/material';
import Navbar from './Navbar'
import Axios from '../AxiosInstance';

const Wait = () => {
  return (
    <>
    <Navbar></Navbar>
    <Box sx={{ margin: "5% 10%" }}>
      <Grid container spacing={0} sx={{ display: "flex", flexDirection: "row"}}>
        <Grid item xs={12} md={12} sx={{ padding: "2%" }}>
          <Card>
            <CardActionArea>
                <Grid sx={{display:'flex', flexDirection:'row',padding:'2%'}}>
                    <Grid item xs={4} md={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <CardMedia component="img" height="150" image={Logo} sx={{width:'80%',height:'40%'}} /> 
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold', fontSize:'20px',fontFamily: 'readex-fonts'}}>Employer</Typography>
                            <Typography sx={{fontFamily: 'readex-fonts'}}>Name</Typography>
                            <Typography sx={{fontFamily: 'readex-fonts'}}>Age</Typography>
                            <Typography sx={{fontFamily: 'readex-fonts'}}>Phonenumber</Typography>
                            <Typography sx={{fontFamily: 'readex-fonts'}}>experience</Typography>
                        </CardContent>
                    </Grid>
                </Grid>                
            </CardActionArea>
          </Card>
        </Grid>
        </Grid>
      <Typography sx={{ fontWeight: 'bold', fontSize: '36px',display:'flex',justifyContent:'center',marginTop:'40px',fontFamily: 'readex-fonts' }}>Congratulations! You get the job.</Typography>
    </Box>
    </>
  );
};
export default Wait;
