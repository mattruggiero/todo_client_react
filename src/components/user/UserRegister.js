import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { registerUser } from '../../actions/authActions';
import { connect } from 'react-redux';

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
                    <hr/>
                    <Form.Control id = "email" placeholder = "email"/>
                    <hr/>
                    <Form.Control id = "userName" placeholder = "user name"/>
                    <hr/>
                    <Form.Control id = "password" placeholder = "password"/>
                    <hr/>
                    <Form.Control id = "confirmPassword" placeholder = "confirm passowrd"/>
                    <hr/>
                    <Button variant = "primary" type = "submit">
                        Register
                    </Button>
                </Form>
            </Container>
        )
    }

}

const mapStateToProps = state => ({
    auth:state.auth,
    errors:state.errors,
})

export default connect(mapStateToProps)(UserRegister);
