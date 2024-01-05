import React, { useReducer, useState } from "react";

const initialState = {};

const reducer = () => {};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContact = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button onClick={addContact}>add Contact</button>
    </div>
  );
};

export default UseReducerComponent;
