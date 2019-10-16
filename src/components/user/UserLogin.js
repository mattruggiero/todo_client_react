import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class UserLogin extends Component {
    //Uncomment when home page is figured out
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.auth.isAuthenticated){
    //         setCart();
    //         this.props.history.push('/');
    //     }
    //     if(nextProps.errors){
    //         console.log(nextProps.errors);
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        let loginJSON = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        //log in function here
    }
    render(){
        return(
            <Container>
                <Form.Row><Form.Row>
                <Col>
                    <Col>
                <Form onSubmit = {this.handleSubmit}>
                    <p>Email Address</p>
                    <Form.Control id = "email" placeholder = "Email Address"/>
                    <p>Password</p>
                    <Form.Control id = "password" placeholder = "Password"/>
                    <Button  variant = "primary" type = 'submit'>
                        Log In
                    </Button>
                </Form>
                </Col></Col>
                </Form.Row></Form.Row>
            </Container>
        )
    }
}

export default UserLogin;