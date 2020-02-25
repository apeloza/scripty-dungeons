import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import GameScreen from "../components/GameScreen";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/start" exact component={GameScreen} />
    </Switch>
  </Router>
);