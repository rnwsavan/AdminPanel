import { combineReducers } from "redux";
import { CounterReducer } from "./counter.reducer";

export const rootReducer = combineReducers({
    Counter: CounterReducer
})