import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Signin from "./Signin/Signin.js";
import Signup from "./Signup/Signup.js";
import Dashboard from "./Dashboard/Dashboard.js";

function App() {
  return (
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default App;
