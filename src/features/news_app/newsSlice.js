import { createSlice } from "@reduxjs/toolkit";

const getInitialNews = () => {
    const localTodoList = window.localStorage.getItem('favouriteNews');
    if (localTodoList) {
        return JSON.parse(localTodoList);
    }
    window.localStorage.setItem("favouriteNews", JSON.stringify([]));
    return [];
}


const initialState = {
    
    favouriteNews: getInitialNews()
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{
        addFavourite:(state, action) => {
            state.favouriteNews.push(action.payload);
            const favouriteNews = window.localStorage.getItem('favouriteNews');
            if(favouriteNews){
                const favouriteNewsArr = JSON.parse(favouriteNews);
                favouriteNewsArr.push({
                    ...action.payload,
                })
                window.localStorage.setItem('favouriteNews', JSON.stringify(favouriteNewsArr));
            }else{
                window.localStorage.setItem('favouriteNews', JSON.stringify([{...action.payload}]));
            }
        },
    }
});

export const { addFavourite } = newsSlice.actions;

export default newsSlice.reducer;
