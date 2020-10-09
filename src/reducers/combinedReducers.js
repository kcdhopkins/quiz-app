import { combineReducers } from "redux";
import initialstateReducer from './initialstateReducer';
import questionReducer from './questionReducer';

export default combineReducers({
    initialstateReducer,
    questionReducer
});