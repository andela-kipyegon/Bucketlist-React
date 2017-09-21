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
            };

        case types.EDIT_BUCKETLIST_SUCCESS:
            return {
                ...state,
                bucketlist: [action.bucketlist, ...state.bucketlist.filter(bucketlist => bucketlist.id !== action.bucketlist.id)]
            };

        case types.EDIT_ITEM_SUCCESS:
            return {
                ...state,
                bucketlist: [ ...state.bucketlist.map(bucket => {
                    if (bucket.id == action.bucketId) {
                        return {...bucket,
                            items: [...bucket.items.filter(item => item.bucketlist_item_id != action.savedItem.bucketlist_item_id), action.savedItem]
                            }
                    }
                    return bucket
                })]
            };

         case types.DELETE_ITEM_SUCCESS:
             return {
                 ...state,
                 bucketlist: [ ...state.bucketlist.map(bucket => {
                    if (bucket.id == action.bucketId) {
                        return {...bucket,
                            items: [...bucket.items.filter(item => item.bucketlist_item_id !== action.itemId)]
                            }
                    }
                    return bucket
                })]
             } 


        default:
            return state;
    }
}
// { ...state.bucketlist.filter(bucket => bucket.id == action.bucketId),
//                     items: [...state.items.filter(item => item.id != action.savedItem.id), action.savedItem ]
//                 }, ...state.bucketlist.filter(bucket => bucket.id != action.bucketId)