import useDocTitle from "../components/Child";

const Parent = () => {
  const [
    number,
    handleIncrement,
    handleDecrement,
    handleReset,
    count,
    handleClick,
  ] = useDocTitle(10, 10);

  useDocTitle(count);

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Number = {number}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Parent;

// import React, {
//   useCallback,
//   useEffect,
//   useReducer,
//   useRef,
//   useState,
// } from "react";
// import Child from "./Child";

// const ACTIONS = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
// };

// const reducer = (state, action) => {
//   if (action.type === ACTIONS.INCREMENT) {
//     return { addcount: state.addcount + 1 };
//   } else if (action.type === ACTIONS.DECREMENT) {
//     return { addcount: state.addcount - 1 };
//   } else {
//     return state;
//   }
// };

// const Parent = () => {
//   const [add, setAdd] = useState(0);
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Nagashree");
//   const refElement = useRef();
//   const renderCount = useRef(0);
//   const previousCount = useRef(0);
//   const [state, dispatch] = useReducer(reducer, { addcount: 0 });

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//     console.log("renderCount.current", renderCount.current);
//   });

//   useEffect(() => {
//     previousCount.current = count;
//     console.log("previousCount.current ", previousCount.current);
//   }, [count]);

//   const handleAdd = () => {
//     setAdd(add + 1);
//   };

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const handleInputChange = () => {
//     setName("");
//     refElement.current.focus();
//   };

//   const MemorizedValue = useCallback(() => {}, [count]);

//   useEffect(() => {
//     console.log("Component has mounted or count has changed");
//     return () => {
//       console.log("Component will unmount or count is changing");
//     };
//   }, [count]);

//   const IncrementButton = () => {
//     dispatch({ type: ACTIONS.INCREMENT });
//   };
//   const DecrementButton = () => {
//     dispatch({ type: ACTIONS.DECREMENT });
//   };

//   return (
//     <div>
//       <p>Add:{add}</p>
//       <button onClick={handleAdd}>Add</button>
//       <Child
//         MemorizedValue={MemorizedValue}
//         count={count}
//         name="nagashree"
//         age={28}
//       />
//       <p>Count:{count}</p>
//       <h3>previous count is :{previousCount.current}</h3>
//       <button onClick={handleClick}>Count</button>
//       <p>Enter the below Input Field</p>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         ref={refElement}
//       ></input>
//       <button onClick={handleInputChange}>Reset</button>
//       <p> Use Reducer</p>
//       <button onClick={IncrementButton}>Increment button + </button>
//       <p>{state.addcount}</p>
//       <button onClick={DecrementButton}>Decrement button - </button>
//       <p>{state.addcount}</p>
//     </div>
//   );
// };

// export default Parent;
