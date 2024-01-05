import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateData } from "../redux/ComponentsData/Actions";
// import styled from "styled-components";
import { Title } from "./ComponentA";
import { Btn } from "./ComponentA";

// const Title = styled.h1`
//   color: brown;
//   font-family: fantasy;
//   font-size: 1.5em;
// `;

// const Btn = styled.button`
//   background-color: darkcyan;
// `;

const ComponentB = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleUpdate = () => {
    const newData = "Updated component from Component B";
    dispatch(UpdateData(newData));
  };

  return (
    <div>
      <Title>Component B</Title>
      <p>Data from Redux store: {data}</p>
      <Btn onClick={handleUpdate}>Update Data</Btn>
      <Btn btn>Click here</Btn>
    </div>
  );
};

export default ComponentB;
