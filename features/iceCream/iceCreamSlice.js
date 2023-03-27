const createSlice = require("@reduxjs/toolkit").createSlice;

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
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
