import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9),
    backgroundColor: "#111113",
    borderRadius: "0px",
    height: "auto",

  },
  title: {
    fontSize: "70px",
    color: "white",
    fontFamily: 'SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    textAlign: "center",
    marginTop: "160px"
  },
}));

const inputBox = {

  border: "4px solid #66BBFF",
  marginTop: "15px",
  width: "250px",
  backgroundColor: "white",
  height: "40px",
  borderRadius: "10px",
  fontSize: "20px",
  padding: "5px",
  paddingLeft: "15px"
}

const LoginPage = props => {

  const classes = useStyles();

  const handleChange = event => {
    console.log(event.target.value)
  };


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title}>Bank Pro</Typography>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center" style={{ paddingBottom: "400px" }}>
        <input onChange={handleChange} style={inputBox} type="text" placeholder="Account Number" />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
