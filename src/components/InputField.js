import useEvenOddStore from "./useEvenOddStore";
import React, { useEffect, useReducer, useState } from "react";
import "../useEvenOddStore.scss";
import axios from "axios";

const initialState = {
  count: 0,
};

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state = initialState, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + 1 };
  } else if (action.type === ACTIONS.DECREMENT) {
    return { count: state.count - 1 };
  } else {
    return state;
  }
};

const InputField = () => {
  const { addNumber, getEvenNumbers, getOddNumbers } = useEvenOddStore();
  const [inputValue, setInputValue] = useState("");
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleAddNumber = () => {
    const number = parseInt(inputValue, 10);
    if (!isNaN(number)) {
      addNumber(number);
      setInputValue("");
    }
  };
  useEffect(() => {
    console.log("useEffect Called");
  }, [inputValue]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setInputValue(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts/1/comments/")
      .then((res) => {
        console.log("result is>>", res);
      })
      .catch((err) => {
        console.log("error is>>", err);
      });
  });

  return (
    <div className="container">
      <h1>Even Odd Number Store</h1>
      <input
        value={inputValue}
        type="number"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleAddNumber}>Add Number</button>
      <div>
        <h2>Even Numbers:</h2>
        <ul>
          {getEvenNumbers().map((evenNumber, index) => (
            <li key={index}>{evenNumber}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Odd Numbers:</h2>
        <ul>
          {getOddNumbers().map((oddNumber, index) => (
            <li key={index}>{oddNumber}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>
        <div>{post.title}</div>
        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}
      </div>
      <br></br>
      <div>Count: {count.count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br></br>
    </div>
  );
};

export default InputField;
