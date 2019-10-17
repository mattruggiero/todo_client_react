import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';


class UserRegister extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        let userData = {};
        let userfulLength = event.target.length -1;
        for(let i =0; i<userfulLength; i++){
            let key = event.target[i].id;
            let value = event.target[i].value;
            userData[key] = value;
        }
        registerUser(userData);
    }
    render(){
        return(
            <Container>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Control id = 'email' placeholder = 'email'/>
                    <Form.Control id = 'userName' placeholder = "user name"/>
                    <Form.control id = 'password' placeholder = 'password'/>
                    <Form.control id = 'confirmPassword' placeholder = 'confirm passowrd'/>
                    <Button variant = 'primary' type = 'submit'>
                        Register
                    </Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    auth:state.auth,
    errors:state.errors,
})

export default connect(mapStateToProps)(UserRegister);