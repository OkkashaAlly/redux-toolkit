const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

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
  extraReducers: (builder) => {
    builder.addCase(cakeActions.orderCake, (state) => {
      state.numOfIceCream--;
    });
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
