const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

store.dispatch(cakeActions.orderCake(2));
store.dispatch(cakeActions.orderCake(3));
store.dispatch(cakeActions.orderCake(4));
store.dispatch(cakeActions.restockCake(9));

unsubscribe()
