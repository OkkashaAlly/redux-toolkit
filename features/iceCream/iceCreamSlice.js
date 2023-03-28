import { createSlice } from "@reduxjs/toolkit";
import { orderCake } from "../cake/cakeSlice";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  initialState,
  name: "iceCream",
  reducers: {
    orderIceCream: (state, action) => {
      state.numOfIceCream -= action.payload;
    },
    restockIceCream: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/orderCake"]: state => {
  //     state.numOfIceCream--;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(orderCake, state => {
      state.numOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { orderIceCream, restockIceCream } = iceCreamSlice.actions;
