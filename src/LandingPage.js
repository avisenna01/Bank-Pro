import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9),
    backgroundColor: "#111113",
    color: "white",
    borderRadius: "0px",
    height: "710px"
  }
}));

const LandingPage = props => {
  const classes = useStyles();

  return <Paper className={classes.root}>avisenna was here</Paper>;
};

export default LandingPage;
