import { createStore } from "redux";
import bookingReducer from "./bookingReducer";

//Todo: pass a reducer function 

const store = createStore(bookingReducer);

export default store;