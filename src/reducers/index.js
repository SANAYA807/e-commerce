import changeCart from "./count";
import addToCart from "./addProduct";
import { combineReducers } from "redux";



const rootReducer = combineReducers({ changeCart, addToCart });

export default rootReducer;