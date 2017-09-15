import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.session, action) {
    switch(action.type) {

        case types.LOGIN_SUCCESS:
            return !!localStorage.getItem('auth_token');

        case types.REGISTER_SUCCESS:
            return !!localStorage.getItem('auth_token');
            
        default:
            return state;
    }
}