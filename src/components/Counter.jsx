import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  if (count === 5) throw new Error("The count can not be equal to 5");

  return (
    <div className="counter">
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
