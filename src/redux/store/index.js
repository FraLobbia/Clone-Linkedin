import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileReducers } from "../reducers/profileReducers";
import { multiProfiliReducers } from "../reducers/multiProfileReducers";
import { postReducer } from "../reducers/postReducer";
import { modalReducer } from "../reducers/modalReducer";
import { loadingReducer } from "../reducers/loadingReducer";

// qui assemblo nella variabile "rootReducer" tutti i reducer
const rootReducer = combineReducers({
	profilo: profileReducers,
	multiProfili: multiProfiliReducers,
	postData: postReducer,
	modalInfo: modalReducer,
	loading: loadingReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
