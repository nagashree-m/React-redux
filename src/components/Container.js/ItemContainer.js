import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../../redux";

const ItemContainer = ({ item, buyItem }) => {
  return (
    <div>
      <h2>Item - {item}</h2>
      <button onClick={buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => {
  const itemState = ownprops.cake
    ? state.cake.numofCakes
    : state.icecream.numofIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  const dispatchFunction = ownprops.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
