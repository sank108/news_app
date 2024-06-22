import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news_app/newsSlice";

export const store = configureStore({
    reducer:{
        news:newsReducer
    }
});