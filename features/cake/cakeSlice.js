const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
