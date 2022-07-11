import {combineReducers} from "redux";
import authReducer from './authReducer';
import productsReducer from './productsReducers';
// export default rootReducer
export const rootReducer = combineReducers({
   auth : authReducer,
   // products : productsReducer
})