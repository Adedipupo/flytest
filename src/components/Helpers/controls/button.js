import React from "react";
import { Button as MuiButton } from "@mui/material";
import { makeStyles } from '@material-ui/core';



export default function Button(props) {
    const { text, size, color, variant, onClick, ...others } = props;
  return (
    <MuiButton
      variant={variant || "contained"}
      color={color}
     {...others}
    >
        {text}
    </MuiButton>
  );
}
