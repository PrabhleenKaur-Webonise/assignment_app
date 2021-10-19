import { combineReducers } from "redux";
import {todoReducer} from './todo.reducer'
const reducers = {
    todo: todoReducer,
};

export const allReducers = combineReducers(reducers);