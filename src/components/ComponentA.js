import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateData } from "../redux/ComponentsData/Actions";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  color: purple;
  font-family: fantasy;
`;

export const Btn = styled.button`
  background-color: ${(props) => (props.btn && "grey") || "darkcyan"};
`;

const Wrapper = styled.div`
  h1 {
    text-align: center;
    color: violet;
  }

  p {
    font-size: 20px;
    color: violet;
    text-align: center;
  }

  button {
    background-color: pink;
    padding: 4px 8px;
    border: none;
    text-align: center;
  }
`;

const ComponentA = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleUpdate = () => {
    const newData = "Updated component from component A ";
    dispatch(UpdateData(newData));
  };
  return (
    <div>
      <Title>Component A</Title>
      <p>data from redux store : {data}</p>
      <Btn onClick={handleUpdate}>Update Data</Btn>
      <Btn btn>Click Me</Btn>
      <Wrapper>
        <h1>Heading</h1>
        <p>Paragraph</p>
        <button>Button</button>
      </Wrapper>
    </div>
  );
};

export default ComponentA;
