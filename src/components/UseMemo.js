import { useCallback, useMemo, useState } from "react";
import UseCallbackComponent from "./UseCallback";

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);
  const [double, setDouble] = useState(1);
  const [decrementCount, setdecrementCount] = useState(10);

  //   const multiCountMemo = () => {
  //     console.log("multiCountMemo");
  //     return count * 2;
  //   };

  const multiCountMemo = useMemo(() => {
    // console.log("multiCountMemo", count * 2);
    return count * 2;
  }, [count]);

  //   const slowFunction = () => {
  //     console.log("slow function called");
  //     let result;
  //     for (let i = 0; i < 100000000; i++) {
  //       result = double * 2;
  //     }
  //     return result;
  //   };

  const slowFunction = useMemo(() => {
    // console.log("slow function called");
    let result;
    for (let i = 0; i < 100000000; i++) {
      result = double * 2;
    }
    return result;
  }, [double]);

  const drecrementCounter = useCallback(() => {
    setdecrementCount((prevcount) => prevcount - 1);
  }, [decrementCount]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <h2>multiCountMemo:{multiCountMemo}</h2>
      <h2>{item}</h2>
      <button onClick={() => setItem(item * 2)}>Multiply Item by 2 </button>
      <h2>{double}</h2>
      <button onClick={() => setDouble(double + 1)}>Get Double</button>
      <h2>slowFunction:{slowFunction}</h2>
      <UseCallbackComponent
        drecrementCounter={drecrementCounter}
        decrementCount={decrementCount}
      />
      <h2>decrementCount:{decrementCount}</h2>
      <button onClick={() => setdecrementCount(decrementCount - 1)}>
        Decrement Count
      </button>
    </div>
  );
};

export default UseMemoComponent;
