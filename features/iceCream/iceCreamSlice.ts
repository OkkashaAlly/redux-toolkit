import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderCake } from "../cake/cakeSlice";

type IceCreamState = {
  numOfIceCream: number;
};

const initialState: IceCreamState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  initialState,
  name: "iceCream",
  reducers: {
    orderIceCream: (state, action: PayloadAction<number>) => {
      state.numOfIceCream -= action.payload;
    },
    restockIceCream: (state, action: PayloadAction<number>) => {
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
