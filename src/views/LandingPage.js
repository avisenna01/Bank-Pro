import React from "react";
// import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9),
    backgroundColor: "#111113", // #111113
    borderRadius: "0px",
    height: "auto"
  },
  title: {
    fontSize: "70px",
    color: "white"
  },
}));

const inputBox = {

  width: "250px",
  backgroundColor: "white",
  height: "30px"

}

const LandingPage = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: "",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title}>Bank Pro</Typography>
      </Grid>
      <Grid item xs={12} container justify="flex-end" alignItems="flex-start">
        <input style={inputBox} type="text" placeholder="Account Number" />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
