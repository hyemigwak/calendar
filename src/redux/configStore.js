import {createStore,combineReducers, applyMiddleware} from "redux";
import calendar from "./modules/calendar";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [thunk];


const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({calendar});
const store = createStore(rootReducer, enhancer);

export default store;