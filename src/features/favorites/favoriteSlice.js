import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fav:[],
}
const favSlice = createSlice({
    name:"fav",
    initialState,
    reducers:{
        addToFavHandler:(state,action)=>{
            state.fav = [...state.fav,action.payload]
        },
        removefromFavHandler:(state,action) =>{
            state.fav = state.fav.filter(f => f.id !== action.payload)
        }
    }
})


export default favSlice.reducer;
export const {addToFavHandler,removefromFavHandler} =favSlice.actions;