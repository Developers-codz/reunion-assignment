import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  when: "",
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
      state.when = action.payload;
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
    // getFilteredEstate: (state) => {
    //   console.log(state.estate);
    //   console.log(state.location);
    //   console.log(state.price);
    //   state.estate = state.estate.filter(
    //     (item) =>
    //       item.location.city === state.location &&
    //       item["property-type"] === state.propertyType &&
    //        Number(item.price) < Number(state.price.max)
    //   );
    // },
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
