import {combineReducers} from 'redux';
import { apiReducer } from './apiReducer';
import { loginReducer } from './loginReducer';


const rootReducer = combineReducers({
    api: apiReducer,
    auth: loginReducer
});

export default rootReducer;
