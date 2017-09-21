import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function modalReducer(state = initialState.modal, action) {

    switch (action.type) {

        case types.SHOW_MODAL:
            return {
                ...state,
                type: action.payload.type,
                props: action.payload.props
            };

        case types.HIDE_MODAL:
            return initialState;

        default:
            return state;
    }
}