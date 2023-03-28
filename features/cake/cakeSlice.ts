import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CakeState = {
  numOfCakes: number;
};

const initialState: CakeState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  initialState,
  name: "cake",
  reducers: {
    orderCake: (state, action: PayloadAction<number>) => {
      state.numOfCakes -= action.payload;
    },
    restockCake: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { orderCake, restockCake } = cakeSlice.actions;
