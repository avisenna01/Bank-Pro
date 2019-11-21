import React from "react";
import Header from "./components/Header";
import LoginPage from "./views/LoginPage";
import Grid from "@material-ui/core/Grid";

const Main = () => {
  return (
    <Grid>
      <Header />
      <LoginPage />
    </Grid>
  );
};

export default Main;
