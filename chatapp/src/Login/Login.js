import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

import Leftlogin from '../Components/Left-login.js'
import InstantLogin from '../Components/InstantLogin.js'

export class Login extends Component {
  render() {
    return (
      <div>
        <Leftlogin/>
        <InstantLogin/>
      </div>
      
    )
  }
}

export default Login;
