import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  initialState,
  name: "cake",
  reducers: {
    orderCake: (state, action) => {
      state.numOfCakes -= action.payload;
    },
    restockCake: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { orderCake, restockCake } = cakeSlice.actions;
