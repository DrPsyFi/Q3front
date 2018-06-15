import auth from './auth.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth,
    
});
export default rootReducer;
