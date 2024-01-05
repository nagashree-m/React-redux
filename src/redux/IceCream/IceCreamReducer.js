import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
  numofIceCreams: 20,
};

const IceCreamReducer = (state = initialState, action) => {
  if (action.type === BUY_ICECREAM) {
    return {
      ...state,
      numofIceCreams: state.numofIceCreams - 1,
    };
  } else {
    return state;
  }
};

export default IceCreamReducer;
