import { configureStore } from "@reduxjs/toolkit";
import topBarReducer from './states/header/topBar/topBar.js';
export const store = configureStore({
    reducer:{
        topBar:topBarReducer,
    },
});
    