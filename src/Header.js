import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 9),
    backgroundColor: "#0a0a0a",
    color: "white",
    borderRadius: "0px"
  }
}));

const Header = props => {
  const classes = useStyles();

  return <Paper className={classes.root}>LOGO</Paper>;
};

export default Header;
