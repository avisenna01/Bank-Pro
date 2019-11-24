import React from "react";
import Header from "./components/Header";
import LoginPage from "./views/LoginPage";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import History from "./views/History";
import AuthRoute from "./AuthRoute"

const Main = () => {

  return (
    <Router>
      <Grid>
        <Header />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={AuthRoute(HomePage)} />
        <Route path="/history" component={AuthRoute(History)} />
      </Grid>
    </Router>
  );
}

export default Main;
