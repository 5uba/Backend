import { useState, useEffect } from "react";
function CountTimer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}
export default CountTimer;