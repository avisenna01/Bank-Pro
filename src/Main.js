import React from "react";
import Header from "./components/Header";
import LandingPage from "./views/LandingPage";
import Grid from "@material-ui/core/Grid";

const Main = () => {
  return (
    <Grid>
      <Header />
      <LandingPage />
    </Grid>
  );
};

export default Main;
