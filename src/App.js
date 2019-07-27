import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Signin from "./Signin.js";
import Signup from "./Signup.js";
import Dashboard from "./Dashboard/Dashboard.js";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
