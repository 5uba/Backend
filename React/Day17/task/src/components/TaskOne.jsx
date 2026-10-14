import { useState, useEffect } from "react";

function TaskOne() {
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

  const handleStart = () => setStart(true);
  const handleStop = () => setStart(false);

  const handleReset = () => {
    setStart(false);
    setCount(0);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">
        Digital Timer
      </h2>

      <h1 className="text-3xl mb-4">
        {count} Seconds
      </h1>

      <div className="flex gap-2">
        <button
          onClick={handleStart}
          className="border px-4 py-2 rounded"
        >
          Start
        </button>

        <button
          onClick={handleStop}
          className="border px-4 py-2 rounded"
        >
          Stop
        </button>

        <button
          onClick={handleReset}
          className="border px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TaskOne;