import { useState } from "react";
function StateUpdate() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <h2>State Update Prediction</h2>
      <h3>{count}</h3>
      <button onClick={handleClick}>Click</button>
    </div>
  );
} 
export default StateUpdate;