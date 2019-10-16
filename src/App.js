import React from 'react';
import Header from './components/display/Header';
import './App.css';
import UserLogin from './components/user/UserLogin';
import axios from 'axios';


function App() {
  axios({method:'get', url:'/login'})
  .then(response => console.log(response))
  .catch(error => console.log(error));
  return (
 
    <div>
      <UserLogin/>
    </div>
  );
}

export default App;
