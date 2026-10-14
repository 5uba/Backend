
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 500);

      return () => clearInterval(timer);
    }
  }, [start]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">
        Timer: {count}
      </h1>

      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setStart(true)}
        >
          Start
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setStart(false)}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
