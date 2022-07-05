import { combineReducers } from "redux";
import { CounterReducer } from "./counter.reducer";
import { medicineReducer } from "./medicine.reducer";

export const rootReducer = combineReducers({
    Counter: CounterReducer,
    medikit: medicineReducer
})