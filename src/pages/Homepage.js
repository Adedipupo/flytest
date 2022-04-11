import React from "react";
import { Box, Button, Grid, Typography,Paper } from "@mui/material";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import heroImage from "../assets/svg/desktop.svg";
import heroContentImage from "../assets/svg/usersvg.svg";
import { ArrowBack, ArrowForward, ArrowRightAltOutlined } from "@mui/icons-material";

const wholePageStyle = {
  overflowX: "hidden",
};
const heroSection = {
  position: "relative",
  background: `url(${heroImage})`,
  height: "100vh",
  width: "100%",
};
const heroContent = {
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "35%",
  transform: "translate(-50%, -50%)",
};
const heroFirstContent = {
  display: "flex",
  width: "100%",
};
const firstContentImage = {
  marginTop: "-2rem",
};
const firstContentText = {};
const firstContentTextspan = {
  fontSize: "4rem",
  fontWeight: "900",
};
const heroSecondContent = {
  marginLeft: "7rem",
};
const secondContentDiv = {
  backgroundColor: "#fff",
  height: "27vh",
  width: "190%",
  borderRadius: "0.9rem",
};
const secondContentButton = {
  fontSize: "4rem",
  fontWeight: "900",
};
const buttonStyles2 = {
  color: "#000",
  backgroundColor: "#fff",
  textTransform: "none",
  borderRadius: "5rem",
  padding: "1rem",
  width: "50%",
};
const afterHeroSection = {
  backgroundColor: "#fff",
  height: "90vh",
};
const discover = {};
const firstDiscover = { 
  flexGrow: 1, 
  padding: "4rem",
  marginLeft: "1rem"
 }
const firstDiscovertext = {
   fontSize : "30px",
   fontWeight: 600
 }
const cardDiscover = {

}

export default function Homepage(props) {
  return (
    <Box sx={wholePageStyle}>
      <>
        <Navbar />
        <Box sx={heroSection}>
          <Box sx={heroContent}>
            <Box sx={heroFirstContent}>
              <Box sx={firstContentImage}>
                <img src={heroContentImage} alt="usergif" />
              </Box>
              <Box sx={firstContentText}>
                <Typography
                  sx={firstContentTextspan}
                  variant="h2"
                  component="div"
                  color="#fff"
                >
                  Talk to Mr.Boku,
                </Typography>
              </Box>
            </Box>
            <Box sx={heroSecondContent}>
              <Box sx={secondContentDiv}></Box>
              <Box sx={secondContentButton}>
                <Button sx={buttonStyles2} variant="outlined" size="large">
                  Find the best deals
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={afterHeroSection}>
          <Box sx={discover}>
            <Box sx={firstDiscover}>
              <Grid container spacin g={2}>
                <Grid item xs={6}>
                  <Box sx={firstDiscovertext}>Discover new experiences</Box>
                </Grid>
                <Grid item xs={6}>
                  <Box> <ArrowForward sx={{ fontSize: 40 }} /> </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={cardDiscover}>

            </Box>
          </Box>
        </Box>
      </>
    </Box>
  );
}
