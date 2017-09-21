import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function bucketlistReducer(state = initialState.bucketlists, action) {
    switch(action.type) {

        case types.LOAD_BUCKETLIST_SUCCESS:
            return action.bucketlists;

        case types.CREATE_BUCKETLIST_SUCCESS:
            return { ...state,
                bucketlist : [action.bucketlist, ...state.bucketlist]
            };
        
        case types.DELETE_BUCKETLIST_SUCCESS:
            return {
                ...state,
                bucketlist: state.bucketlist.filter(bucketlist => bucketlist.id !== action.bucketlistId )
            }

        case types.EDIT_BUCKETLIST_SUCCESS:
            return {
                ...state,
                bucketlist: [action.bucketlist, ...state.bucketlist.filter(bucketlist => bucketlist.id !== action.bucketlist.id)]
            };

        default:
            return state;
    }
}
