import React, { useEffect } from "react";
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
import id2 from "../assets/Bodyguard4.jpg";
import id3 from "../assets/Bodyguard5.jpg";
import id4 from "../assets/Bodyguard1.jpg";
import jerry from "../assets/jerrymeme.jpg"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Axios from '../AxiosInstance';

const ProfileEmployer = () => {
  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };

  useEffect(() => {
    Axios.get("/employ_info")
  }, [])
  
  return (
    <>
      <Navbar />
      <Box sx={{ margin: "5% 10%" }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "36px",
            fontFamily: "readex-fonts-bold",
          }}
        >
          Profile
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              padding: "2%",
              display: "flex",
              justifyContent: "center",
              width: "200%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "700px",
                padding: "50px",
                border: "solid 2px black",
                borderRadius: "20px",
                boxShadow: "5px 10px #888888",
              }}
            >
              <img src={jerry} style={{ width: "250px", height: "250px" , borderRadius : "20px" }} />
              <Box sx={{ width: "40%" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "readex-fonts",
                      marginBottom : '20px'
                    }}
                  >
                    Employer
                  </Typography>
                </div>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    height: "80%",
                    margin: "0px 0px 0px 10px",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontFamily: "readex-fonts" }}>
                      Name : Thanapat Thanatawee
                    </Typography>
                    <Typography sx={{ fontFamily: "readex-fonts" }}>
                      Age : 20
                    </Typography>
                    <Typography sx={{ fontFamily: "readex-fonts" }}>
                      Phone Number : 0971326919
                    </Typography>
                    <Typography sx={{ fontFamily: "readex-fonts" }}>
                      District
                    </Typography>
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      ml: 2,
                      fontFamily: "readex-fonts",
                      width: "180px",
                    }}
                    onClick={() => handleClick("/EditProfileE")}
                  >
                    Edit Profile
                  </Button>
                  <Button type="outline"
                    fullWidth
                    variant="contained"
                    color="error"
                    sx={{
                      mt: 3,
                      mb: 2,
                      ml: 2,
                      fontFamily: "readex-fonts",
                      width: "180px",
                    }}
                    onClick={() => handleClick("/")}>
                    Delete Profile
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProfileEmployer;
