import { useState } from "react";

function TaskOne() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">
        Status: {isOn ? "ON" : "OFF"}
      </h2>

      <button
        className="border px-4 py-2 rounded"
        onClick={() => setIsOn(!isOn)}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default TaskOne;