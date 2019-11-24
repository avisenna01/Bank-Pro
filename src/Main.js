import React from "react";
import Header from "./components/Header";
import LoginPage from "./views/LoginPage";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import History from "./views/History";
import AuthRoute from "./AuthRoute"
// import NotFound from "./views/NotFound";

const Main = () => {


  return (
    <Router>
      <Switch>
        <Grid>
          <Header />
          <Route exact path="/" component={AuthRoute(HomePage)} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/home" component={AuthRoute(HomePage)} />
          <Route exact path="/history" component={AuthRoute(History)} />
          {/* <Route path="/404" component={NotFound} />
          <Redirect to="/404" /> */}
        </Grid>
      </Switch>
    </Router>
  );

}

export default Main;
