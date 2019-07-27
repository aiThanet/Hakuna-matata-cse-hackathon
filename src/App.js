import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Signin from "./Signin/Signin.js";
import Signup from "./Signup/Signup.js";
import Dashboard from "./Dashboard/Dashboard.js";
import { SystemContext, system_context } from "./SystemContext";

function App() {
  return (
    <SystemContext.Provider value={system_context}>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </SystemContext.Provider>
  );
}

export default App;
