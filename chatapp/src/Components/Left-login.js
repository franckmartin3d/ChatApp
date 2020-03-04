import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/Login.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';



// this needs to be a dumb component
class Leftlogin extends React.Component {

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
                    SIGN IN
                    </Button>
                </Form>
                </div>
                {/* Account */}
                <div className="account-text">Don't have an account?</div>
                <Link to="/SignUp">
                <div className="sign-up-link">SIGN UP NOW</div>
                </Link>
            </div>
        )
    }
}
export default Leftlogin;