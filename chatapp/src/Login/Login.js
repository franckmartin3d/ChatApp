import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class Login extends Component {
  render() {
    return (
      <div className="jumbo-left">
        <div className="green-h1">
          <div className="sign-in">
            Sign In
          </div>
        </div>

        {/* form */}
        <div className="form-position">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="form-username"
                type="Username"
                placeholder="Username"
              />
              <Form.Control
                className="form-username2"
                type="Password"
                placeholder="Password"
              />
            </Form.Group>

            <Button className="form-button" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        {/* Account */}
        <div className="account-text">Don't have an account?</div>
        <div className="sign-up-link">SIGN UP NOW</div>

        {/* Jumbo right */}
        <div className="jumbo-right"></div>
            <div className="instant-login">
                INSTANT LOGIN
            </div>

            <div className="form-right">
                <Form>
                <Form.Group controlId="formInstant">
                <Form.Control
                    className="form-Instant"
                    type="YourName"
                    placeholder="Your Name"
                />
                </Form.Group>

                <Button className="form-Instant-button" type="Login">
                Login
                </Button>
            </Form>
            </div>
      </div>
      
    );
  }
}

export default Login;
