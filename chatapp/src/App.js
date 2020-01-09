import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

// App components
import Login from "././Login/Login";
import SignUp from "./Login/SignUp";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </BrowserRouter>
    );
  }
}

export default App;
