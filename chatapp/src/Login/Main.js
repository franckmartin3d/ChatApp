import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Main.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

export class Main extends Component {
    render() {
        return (

         
            <div className="container">
                <div className="user-green">
                    <div className="user-position">
                        <div className="user-text">
                            USERS
                            <div className="user-available">
                                Guess
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-board">
                    <div className="text">
                        Text
                    </div>
                </div>

                {/* Form send */}
                <div className="input">
                    <Form>
                        <Form.Group controlId="formtext">
                        <Form.Control
                            className="form-text"
                            type="text"
                            placeholder="your text"
                        />
                        </Form.Group>

                        <Button className="send-button" type="submit">
                        SEND
                        </Button>
                    </Form>
                    
                </div>

                {/* footer */}
              
                    <div className="signed-in" >Signed in as:</div>
                    <Link to="/">
                        <div className="footer-login-page">Login Page</div>
                    </Link>
                    <div className="footer-portfolio">Francois Martin Portfolio</div>
                

           
            </div>
           


          
          
        )
    }
}

export default Main
