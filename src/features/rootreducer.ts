import {reducer as counterReducer} from "./counter";
import { combineReducers } from "redux";
import { profileReducer } from "./profile";


const rootReducer = combineReducers({
	counter: counterReducer,
	profile: profileReducer
})


export {rootReducer};