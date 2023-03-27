const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators

// action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
// action creator
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};
const restockCake = (qty = 1) => {
  return {
    type: 'CAKE_RESTOCKED',
    payload: qty
  }
}

// state
const initialState = {
  numberOfCakes: 10,
};
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload
      }

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state: ", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
const actions = bindActionCreators({orderCake, restockCake}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

unsubscribe();
