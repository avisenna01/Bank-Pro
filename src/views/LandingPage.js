import React, { useState } from "react";
// import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import applepay from "../assets/Apple_Pay.png"


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9),
    backgroundColor: "#111113",
    borderRadius: "0px",
    height: "auto"
  },
  title: {
    fontSize: "70px",
    color: "white",
    fontFamily: 'Alata, sans-serif'
  },
}));

const inputBox = {
  border: "4px solid #66BBFF",
  marginLeft: "550px",
  width: "250px",
  backgroundColor: "white",
  height: "50px",
  borderRadius: "10px",
  fontSize: "20px",
  padding: "5px"
}

const LandingPage = props => {

  const classes = useStyles();
  const [acc, setAcc] = useState();

  const handleChange = event => {
    setAcc(event.target.value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title}>Bank Pro</Typography>

      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        <img src={applepay} alt="Apple Pay" style={{ marginLeft: "500px" }} />
        <input onChange={handleChange} value={acc} style={inputBox} type="text" placeholder="Account Number" />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
