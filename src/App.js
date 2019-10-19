import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { Provider } from 'react-redux';
import UserLogin from './components/user/UserLogin';
import UserRegister from './components/user/UserRegister';
import Header from './components/display/Header';
import { setAuthToken } from './helperFunctions';
import store from './store';
import { SET_CURRENT_USER } from './actions/types';
import { logoutUser } from './actions/authActions';

//require('dotenv').config();
//check for token

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  //check for expired token
  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
  store.dispatch({
    type:SET_CURRENT_USER,
    payload: decoded
  });
}
class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <Header/>
        <UserRegister/>
        <Router>
          <div>
            <Route exact path = "/login" component = { UserLogin }/>
            <Route exact path = "/register" component = { UserRegister }/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
