import React from "react";
import {
  Box,
  Typography
} from "@mui/material";
import Login from "../components/Login";
import Navbar from "../components/Navbar";


const wholePageStyle = {
 overflowX: 'hidden'
};

export default function Homepage(props) {
  return (
    <Box sx={wholePageStyle}>
        <Box>
            <Navbar/>
        </Box>
    </Box>
  );
}
