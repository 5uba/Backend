
import { useState } from "react";

function TaskThree() {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  function handleChange(e) {
    setNumber(e.target.value);
  }

  function handleAdd() {
    if (number.trim() === "") return;

    setNumbers([...numbers, Number(number)]);
    setNumber("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Number Storage
        </h2>

        <div className="flex gap-3 mb-5">
          <input
            type="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter a number"
            className="flex-1 min-w-0 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Number
          </button>
        </div>

        <ul className="space-y-3">
          {numbers.map((num, index) => (
            <li
              key={index}
              className="flex justify-between items-center border rounded-lg p-3"
            >
              <span className="font-medium">{num}</span>

              <span className="px-3 py-1 rounded-md text-sm bg-green-600 text-white">
                {num % 2 === 0 ? "Even" : "Odd"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskThree;
