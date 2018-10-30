import { combineReducers } from 'redux';
import postReducers from './postreducer';

export default combineReducers({
        posts: postReducers
    }
)