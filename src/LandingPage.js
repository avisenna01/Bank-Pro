import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9),
    backgroundColor: "#111113",
    color: "white",
    borderRadius: "0px",
    height: "710px"
  },
  title: {
    fontSize: "70px"
  }
}));

const LandingPage = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title}>Bank Pro</Typography>
    </Paper>
  );
};

export default LandingPage;
