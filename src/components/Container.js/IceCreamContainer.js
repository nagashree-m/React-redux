import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../../redux/IceCream/IceCreamActions";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of IceCreams- {props.numofIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numofIceCreams: state.icecream.numofIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
