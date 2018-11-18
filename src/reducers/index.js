import {combineReducers} from 'redux';
import { apiReducer } from './apiReducer';
import { loginReducer } from './loginReducer';
import { questionsReducer, answersReducer } from './questionsReducer';


const rootReducer = combineReducers({
    api: apiReducer,
    auth: loginReducer,
    questions: questionsReducer,
    answers: answersReducer
});

export default rootReducer;
