import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  CardMedia,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import id1 from "../assets/Bodyguard3.jpg";
import id2 from "../assets/guard5.jpg"
import mark from "../assets/mark.png"
import Navbar from "./Navbar";
import Axios from "../AxiosInstance";
import { useState, useEffect } from "react";
import Jay from '../assets/Jay.jpg'

export const Result = () => {
  const [guard, setGuard] = useState([]);

  //   const userResult = async () => {
  //     const detail = await Axios.get("http://localhost:3000/listGuard");
  //     setGuard(detail.data);
  //     // setGuard(detail.data)
  //   };
  const userResult = async () => {
    const detail = await Axios.get("http://localhost:3000/listGuard");
    console.log(detail.data); // Check the value of detail.data
    console.log(Array.isArray(detail.data)); // Check if detail.data is an array
    setGuard(detail.data.data);
  };

  useEffect(() => {
    userResult();
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ margin: "5% 10%" }}>
        <Grid
          container
          spacing={0}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          {/* {guard.map((e)=>{
                return <h1>Hello</h1>
            })} */}
          <Grid
            container
            spacing={0}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {guard.map((guardItem) => (
              <Grid
                item
                xs={12}
                md={12}
                sx={{ padding: "2%" }}
                key={guardItem.id}
              >
                <Card>
                  <CardActionArea>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "2%",
                      }}
                    >
                      <Grid
                        item
                        xs={3}
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia component="img"  image={mark} />
                      </Grid>
                      <Grid item xs={9} md={9}>
                        <CardContent>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "20px",
                              fontFamily: "readex-fonts",
                            }}
                          >
                            {guardItem.title}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" , fontSize : '30px'}}>
                            {guardItem.name} {guardItem.surname}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" , fontSize : '25px'}}>
                            Age :: {guardItem.age}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            Experience :: {guardItem.phoneNumber}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            {guardItem.experience}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
                <Card sx={{marginTop : '20px'}}>
                  <CardActionArea>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "2%",
                      }}
                    >
                      <Grid
                        item
                        xs={3}
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia component="img"  image={id2} />
                      </Grid>
                      <Grid item xs={9} md={9}>
                        <CardContent>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "20px",
                              fontFamily: "readex-fonts",
                            }}
                          >
                            {guardItem.title}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" , fontSize : '30px'}}>
                            Kaoru Mitoma
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" , fontSize : '25px'}}>
                            Age :: 19
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            Experience :: {guardItem.phoneNumber}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            {guardItem.experience}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
                <Card sx={{marginTop:'20px'}}>
                  <CardActionArea>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "2%",
                      }}
                    >
                      <Grid
                        item
                        xs={3}
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia component="img"  image={Jay} />
                      </Grid>
                      <Grid item xs={9} md={9}>
                        <CardContent>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "20px",
                              fontFamily: "readex-fonts",
                            }}
                          >
                            {guardItem.title}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" , fontSize : '30px'}}>
                            Arum Joh
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" , fontSize : '25px'}}>
                            Age :: 34
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            Experience ::
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                          I have been a bodyguard for Elon Musk for 10 years and have certificate for being the best bodyguard in 2023.
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};


