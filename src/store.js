import { configureStore } from "@reduxjs/toolkit";
import favReducers from "./features/favorites/favoriteSlice"
import filterReducers from "./features/home/filtersSlice"

const reducer = {
    fav:favReducers,
    filters:filterReducers
}
const store = configureStore({
    reducer:reducer
})

export default store;