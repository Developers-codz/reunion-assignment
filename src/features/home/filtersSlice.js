import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  dateText: "",
  price: { min: null, max: null },
  propertyType: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDate: (state, action) => {
      state.dateText = action.payload;
    },
    setPrice: (state, action) => {
      const [min, max] = action.payload.split("-");
      console.log(min, max);
      state.price.min = min;
      state.price.max = max;
    },
    setPropertyType: (state, action) => {
      state.propertyType = action.payload;
      console.log(action.payload)
    },
   
  },
});

export default filterSlice.reducer;
export const {
  setDate,
  setLocation,
  setPropertyType,
  setPrice,
  getFilteredEstate,
} = filterSlice.actions;
