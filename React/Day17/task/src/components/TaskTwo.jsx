import { useState, useEffect } from "react";

function TaskTwo() {
  const [message, setMessage] = useState("Please Wait...");
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Welcome to React");
    }, 3000);

    return () => clearTimeout(timer);
  }, [restart]);

  const handleRestart = () => {
    setMessage("Please Wait...");
    setRestart((prev) => prev + 1);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">
        {message}
      </h2>

      <button
        onClick={handleRestart}
        className="border px-4 py-2 rounded"
      >
        Restart
      </button>
    </div>
  );
}

export default TaskTwo;