import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const ReactReduxComponent = () => {
  const BUY_CAKE = "BUY_CAKE";
  const BUY_ICECREAM = "BUY_ICECREAM";

  const buyCake = () => {
    return {
      type: BUY_CAKE,
      info: "Buy Cake action",
    };
  };

  const buyIceCream = () => {
    return {
      type: BUY_ICECREAM,
      info: "Buy Ice Cream action",
    };
  };

  //   const initialState = {
  //     numberofCakes: 10,
  //     numberofIceCreams: 20,
  //   };

  const initialCakeState = {
    numberofCakes: 10,
  };

  const initialIceCreamState = {
    numberofIceCreams: 20,
  };

  //   const reducer = (state = initialState, action) => {
  //     if (action.type === BUY_CAKE) {
  //       return {
  //         ...state,
  //         numberofCakes: state.numberofCakes - 1,
  //       };
  //     } else if (action.type === BUY_ICECREAM) {
  //       return {
  //         ...state,
  //         numberofIceCreams: state.numberofIceCreams - 1,
  //       };
  //     } else {
  //       return state;
  //     }
  //   };

  const cakeReducer = (state = initialCakeState, action) => {
    if (action.type === BUY_CAKE) {
      return {
        ...state,
        numberofCakes: state.numberofCakes - 1,
      };
    } else {
      return state;
    }
  };

  const iceCreamReducer = (state = initialIceCreamState, action) => {
    if (action.type === BUY_ICECREAM) {
      return {
        ...state,
        numberofIceCreams: state.numberofIceCreams - 1,
      };
    } else {
      return state;
    }
  };

  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(logger));
  console.log("Initial state", store.getState());
  // const unSubscribe = store.subscribe(() =>
  //   console.log("Updated state ", store.getState())
  // );
  const unSubscribe = store.subscribe(() => {});
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  unSubscribe();

  return <div></div>;
};

export default ReactReduxComponent;
