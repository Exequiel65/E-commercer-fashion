import {createStore,applyMiddleware, compose} from "redux";
//redux thuink sirve para trabajar con lñas llamadas asincronas 
import thunk from "redux-thunk"
import { rootReducer } from "../reducer"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 
export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))  