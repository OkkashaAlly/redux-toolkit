const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe( () => {});

store.dispatch(cakeActions.orderCake(2));
store.dispatch(cakeActions.orderCake(3));
store.dispatch(cakeActions.orderCake(4));
store.dispatch(cakeActions.restockCake(9));

store.dispatch(iceCreamActions.orderIceCream(1));
store.dispatch(iceCreamActions.orderIceCream(2));
store.dispatch(iceCreamActions.orderIceCream(3));
store.dispatch(iceCreamActions.restockIceCream(6));

unsubscribe();
