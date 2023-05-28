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
import Navbar from "./Navbar";
import Axios from "../AxiosInstance";
import { useState, useEffect } from "react";

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
                        <CardMedia component="img" height="150" image={id1} />
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
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            {guardItem.name}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            {guardItem.age}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            {guardItem.phoneNumber}
                          </Typography>
                          <Typography sx={{ fontFamily: "readex-fonts" }}>
                            {guardItem.experience}
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

{
  /* <Grid item xs={12} md={12} sx={{ padding: "2%" }}>
  <Card>
    <CardActionArea>
      <Grid sx={{ display: "flex", flexDirection: "row", padding: "2%" }}>
        <Grid
          item
          xs={3}
          md={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CardMedia component="img" height="150" image={id1} />
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
              Bodyguard
            </Typography>
            <Typography sx={{ fontFamily: "readex-fonts" }}>Name</Typography>
            <Typography sx={{ fontFamily: "readex-fonts" }}>Age</Typography>
            <Typography sx={{ fontFamily: "readex-fonts" }}>
              Phonenumber
            </Typography>
            <Typography sx={{ fontFamily: "readex-fonts" }}>
              experience
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
</Grid>; */
}
