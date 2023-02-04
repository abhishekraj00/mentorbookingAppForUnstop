import { combineReducers } from "redux";
import teacherReducer from "./teacherReducer";


export const rootReducer = combineReducers({
    teachers:teacherReducer
});