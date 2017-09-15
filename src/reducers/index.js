import { combineReducers } from 'redux';
import authentication from './authReducer';
import bucketlists from './bucketlistReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
   authentication,
   bucketlists,
   modal
});

export default rootReducer;