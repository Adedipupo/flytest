import React from "react";
import { TextField } from "@mui/material";



export default function Input(props) {
  const { name, label,inputProps, error=null, value, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      InputLabelProps={{
        shrink: true
      }}
      inputProps={{style: {fontSize: 13}}} 
    />
  );
}
