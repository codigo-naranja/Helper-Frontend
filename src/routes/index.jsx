import React from "react";
import { Switch, Route } from "react-router-dom";
import AccessButtons from "../components/Access/AccessButtons";
import PALogin from "../components/Access/PALogin";
import PAFirstAccess from "../components/Access/PAFirstAccess";
import PAForgotData from "../components/Access/PAForgotData";
import PAQuestion from "../components/Access/PAQuestion";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={AccessButtons} />
    <Route exact path="/loginpa" component={PALogin} />
    <Route exact path="/loginpa/forgotdata" component={PAForgotData} />
    <Route exact path="/loginpa/forgotdata/answer" component={PAQuestion} />
    <Route exact path="/loginpa/firstaccess/:userid" component={PAFirstAccess} />
  </Switch>
);

export default Routes;
