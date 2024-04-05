import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/text/textSlice";
import authReducer from "../features/auth/authSlice";
import apiReducer from "../features/api/apiResponseSlice";
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store =  configureStore({
    reducer:{
        input: textReducer,
        auth: authReducer,
        apiResponse: apiReducer
    },
    preloadedState: persistedState
})

store.subscribe(() => {
    saveState(store.getState().input);
    saveState(store.getState().auth);
})

export default store
