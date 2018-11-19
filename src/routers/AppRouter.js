import React from "react";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import LoginPage from "../components/LogingPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/home" component={ExpenseDashboardPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
