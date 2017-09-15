import authApi from '../api/authApi';
import * as types from '../constants/actionTypes';

export function loginSuccess(loggedIn) {
    return {type: types.LOGIN_SUCCESS, loggedIn };
}

export function loginFailure(loggedIn) {
    return {type: types.LOGIN_FAILURE, loggedIn };
}

export function registerSuccess(loggedIn) {
    return {type: types.REGISTER_SUCCESS, loggedIn };
}

export function loginUser(credentials) {
    return function(dispatch) {
        return authApi.login(credentials).then(response => {
            localStorage.setItem('auth_token', response.auth_token);
            let username = response.first_name + ' ' + response.last_name;
            localStorage.setItem('username', username);
            dispatch(loginSuccess(!!localStorage.getItem('auth_token')));
        }).catch(error => {
            throw(error);
        });
    };
}

export function registerUser(credentials) {
    return function(dispatch) {
        return authApi.regster(credentials).then(response => {
            localStorage.setItem('auth_token', response.auth_token);
            dispatch(registerSuccess(!!localStorage.getItem('auth_token')));
        }).catch( error => {
            throw(error);
        });
    };
}