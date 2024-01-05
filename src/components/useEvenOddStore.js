import { useState } from "react";

const useEvenOddStore = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = (number) => {
    setNumbers((prevNumbers) => [...prevNumbers, number]);
  };

  const getEvenNumbers = () => {
    return numbers.filter((number) => number % 2 === 0);
  };

  const getOddNumbers = () => {
    return numbers.filter((number) => number % 2 !== 0);
  };
  return { addNumber, getEvenNumbers, getOddNumbers };
};

export default useEvenOddStore;
