import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

// App components
import Login from "././Login/Login";
import SignUp from "./Login/SignUp";
import Main from "./Login/Main";
import flexLogin from "./Login/flexLogin";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={flexLogin} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Main" component={Main} />
      </BrowserRouter>
    );
  }
}

export default App;
