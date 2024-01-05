import React, { memo } from "react";

const UseCallbackComponent = ({ drecrementCounter, decrementCount }) => {
  console.log("Child Component rendered");
  return <div>{/* <h2>decrementCount:{decrementCount}</h2> */}</div>;
};

export default memo(UseCallbackComponent);
