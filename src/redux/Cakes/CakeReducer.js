import { BUY_CAKE } from "./CakeTypes";

const initialState = {
  numofCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === BUY_CAKE) {
    return {
      ...state,
      numofCakes: state.numofCakes - action.payload,
    };
  } else {
    return state;
  }
};

export default cakeReducer;
