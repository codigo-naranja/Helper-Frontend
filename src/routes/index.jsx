import React from "react";
import { Switch, Route } from "react-router-dom";
import AccessView  from "../views/AccessView";

const Routes = () => (
  <Switch>
    <Route path="/access" component={AccessView} />
  </Switch>
);

export default Routes;
