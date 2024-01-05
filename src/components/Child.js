import { useEffect, useState } from "react";

const useDocTitle = (initialCount = 0, value) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(initialCount);

  useEffect(() => {
    console.log("<<<count>>>.", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + value);
  };

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  const handleReset = () => {
    setNumber(initialCount);
  };
  return [
    number,
    handleIncrement,
    handleDecrement,
    handleReset,
    count,
    handleClick,
  ];
};

export default useDocTitle;

// import React, { useContext } from "react";
// import { MyContext } from "../components/ContextProvider";
// import propTypes from "prop-types";

// const Child = ({ MemorizedValue, count, name, age }) => {
//   const { number, setNumber } = useContext(MyContext);
//   console.log("child is Rendering");

//   const handleChange = () => {
//     setNumber(number + 5);
//   };

//   return (
//     <div>
//       <p>Number is :{number}</p>
//       <button onClick={handleChange}>Increment + 5</button>
//       <p>
//         Name is {name} and age is {age}
//       </p>
//     </div>
//   );
// };

// Child.propTypes = {
//   name: propTypes.string,
//   age: propTypes.number,
// };

// export default React.memo(Child);
