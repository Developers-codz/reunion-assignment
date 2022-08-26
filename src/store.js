import { configureStore } from "@reduxjs/toolkit";
import favReducers from "./features/favorites/favoriteSlice"

const reducer = {
    fav:favReducers
}
const store = configureStore({
    reducer:reducer
})

export default store;