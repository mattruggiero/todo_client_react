import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {setAuthToken} from '../helperFunctions';
import store from '../store';
import {GET_ERRORS, SET_CURRENT_USER,CLEAR_ERRORS} from './types';


