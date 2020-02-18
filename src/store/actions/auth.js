import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email,password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[AIzaSyAZ-IKHLOe7uRwi5Br2reUwzijqrvsaruA]');
    };
};