import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import logo from "../assets/apple1.png"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 9),
    backgroundColor: "#0a0a0a",
    color: "white",
    borderRadius: "0px"
  }
}));

const Header = () => {
  const classes = useStyles();

  return <Paper className={classes.root}><img alt="logo" src={logo} width="20px" height="24px" /></Paper>;
};

export default Header;
