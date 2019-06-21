import { combineReducers } from 'redux';
import configurationsReducer from "./configurations-reducer";
import pageReducer from "./page.reducer";

export default combineReducers({
    operation: configurationsReducer,
    page: pageReducer
})