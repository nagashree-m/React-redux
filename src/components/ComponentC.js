import React from "react";
import styled from "styled-components";
import "../index.css";

const ComponentC = ({ className }) => {
  return (
    <div className={className}>
      <h2>Component C</h2>
      <button>Click Me!</button>
      <h3>CSS Variables</h3>
    </div>
  );
};

const Wrapper = styled(ComponentC)`
  h2 {
    color: green;
    text-align: center;
  }

  button {
    padding: 4px 10px;
    background-color: violet;
    border: none;
  }
  h3 {
    color: var(--primary-color);
  }
`;

export default Wrapper;
