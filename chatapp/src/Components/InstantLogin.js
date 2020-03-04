import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/Login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';


// this needs to be a dumb component
class InstantLogin extends React.Component {

    render() {
        return (
            <div className="jumbo-right">
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
                    {/* to do on click event  go to main */}
                    </Button>
                </Form>
                </div>
        </div>
        )
    }
}
export default InstantLogin;