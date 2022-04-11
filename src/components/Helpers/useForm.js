import React, { useState } from "react";
import { makeStyles } from '@mui/styles';


export function useForm(formInitialValues,validateOnChange=false,validateForm) {
  const [values, setValues] = useState(formInitialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    const {name, value}  = e.target;
    setValues({
      ...values,
      [name]: value,
    })
    if(validateOnChange){
      validateForm({[name] :value})
    }
  }

  return {
      values, 
      errors,
      setErrors,
      setValues, 
      handleInputChange,
    };
}

const useStyles = makeStyles(theme => ({
    root: {

      "& .MuiFormControl-root": {
        width: "60%",
        margin: theme.spacing(1.5),
      },
    },
  }));

export function Form(props) {
    const classes = useStyles();
    const {children,...other} = props;
  return (
     <form className={classes.root}  {...other}>
        {props.children}
     </form>
     );
}
