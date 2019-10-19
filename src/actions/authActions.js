import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from '../helperFunctions';
import store from '../store';
import {GET_ERRORS, SET_CURRENT_USER,CLEAR_ERRORS} from './types';
import { isEmpty } from '../helperFunctions';



export function registerUser(userData){
    let url = '/register';
    let postData = userData;

    axios({method: 'post', url:url,data:postData})
        .then(response =>{
            console.log(response.data);
            login(response.data);
            //lose state here should be ok though
            //window.location.href = '/login';
        })
        .catch(error => {
            console.log('NO HERE');
            console.log(error);
            store.dispatch({
                type:GET_ERRORS,
                payload: error.response.data
            })
        })
        .then(errors => {
            let currentState = store.getState();
            let currentError = currentState.error;
            let values = Object.values(currentError);
            let errorMSG = "";
            for(let each in values){
                errorMSG = errorMSG + values[each] +"\n";
            }
            if(!isEmpty(values)){
                window.alert(errorMSG);
                store.dispatch({type:CLEAR_ERRORS})
            }
        })
}

export function login(userLoginData){
    let url = '/login';
    let postData = userLoginData;

    axios({method: 'post', url:url,data:postData})
        .then(response =>{
            const { token } = response.data;
            console.log(response.data);
            localStorage.setItem('jwtToken',token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            console.log(decoded);
            store.dispatch({
                type:SET_CURRENT_USER,
                payload:decoded,
            })
        })
        .catch(error=>{
            console.log(error);
            store.dispatch({
                type:GET_ERRORS,
                payload:error.response.data,
            })
        })
}

export function logoutUser(){
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    store.dispatch({
        type:SET_CURRENT_USER,
        payload:{}
    })
    window.location.href ='/';
}