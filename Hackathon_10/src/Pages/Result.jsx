import React from 'react'
import { Box, Typography, Grid , Button, CardMedia, Card, CardActionArea, CardContent} from '@mui/material';
import id1 from "../assets/Bodyguard3.jpg";
import Navbar from './Navbar'

export const Result = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{ margin: "5% 10%" }}>
      <Grid container spacing={0} sx={{ display: "flex", flexDirection: "row"}}>
        <Grid item xs={12} md={12} sx={{ padding: "2%" }}>
          <Card>
            <CardActionArea>
                <Grid sx={{display:'flex', flexDirection:'row',padding:'2%'}}>
                    <Grid item xs={3} md={3} sx={{display:'flex',justifyContent:'center'}}>
                        <CardMedia component="img" height="150" image={id1} /> 
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold', fontSize:'20px',fontFamily: 'readex-fonts'}}>Bodyguard</Typography>
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
        <Grid item xs={12} md={12} sx={{ padding: "2%" }}>
          <Card>
            <CardActionArea>
                <Grid sx={{display:'flex', flexDirection:'row',padding:'2%'}}>
                    <Grid item xs={3} md={3} sx={{display:'flex',justifyContent:'center'}}>
                        <CardMedia component="img" height="150" image={id1} /> 
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold', fontSize:'20px',fontFamily: 'readex-fonts'}}>Bodyguard</Typography>
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
        <Grid item xs={12} md={12} sx={{ padding: "2%" }}>
          <Card>
            <CardActionArea>
                <Grid sx={{display:'flex', flexDirection:'row',padding:'2%'}}>
                    <Grid item xs={3} md={3} sx={{display:'flex',justifyContent:'center'}}>
                        <CardMedia component="img" height="150" image={id1} /> 
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold', fontSize:'20px',fontFamily: 'readex-fonts'}}>Bodyguard</Typography>
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
        <Grid item xs={12} md={12} sx={{ padding: "2%" }}>
          <Card>
            <CardActionArea>
                <Grid sx={{display:'flex', flexDirection:'row',padding:'2%'}}>
                    <Grid item xs={3} md={3} sx={{display:'flex',justifyContent:'center'}}>
                        <CardMedia component="img" height="150" image={id1} /> 
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold', fontSize:'20px',fontFamily: 'readex-fonts'}}>Bodyguard</Typography>
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
        <Grid item xs={12} md={12} sx={{ padding: "2%" }}>
          <Card>
            <CardActionArea>
                <Grid sx={{display:'flex', flexDirection:'row',padding:'2%'}}>
                    <Grid item xs={3} md={3} sx={{display:'flex',justifyContent:'center'}}>
                        <CardMedia component="img" height="150" image={id1} /> 
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold', fontSize:'20px',fontFamily: 'readex-fonts'}}>Bodyguard</Typography>
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
    </Box>
    </>
  );
}