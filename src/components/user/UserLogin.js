import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

//need to fix up error handeling server side but this component
//is working 
class UserLogin extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    // static getDerivedStateFromProps(props,state){
    //     if(props.auth.isAuthenticated){
    //         this.props.history.push('/taskList');
    //     }
    //     if(props.errors){
    //         console.log(props.errors);
    //     }
    //     this.setState(...state);
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        let loginJSON = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        login(loginJSON);
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

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps)(UserLogin);