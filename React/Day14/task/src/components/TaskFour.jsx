
import { useState } from "react";

function TaskFour() {
  const [fruit, setFruit] = useState("");
  const [fruits, setFruits] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setFruit(e.target.value);
  }

  function handleAdd() {
    if (fruit.trim() === "") return;
    setFruits([...fruits, fruit.trim()]);
    setFruit("");
  }

  function handleEdit(index) {
    setFruit(fruits[index]);
    setEditIndex(index);
  }

  function handleUpdate() {
    if (fruit.trim() === "" || editIndex === null) return;

    setFruits(
      fruits.map((item, index) =>
        index === editIndex ? fruit.trim() : item
      )
    );

    setFruit("");
    setEditIndex(null);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Fruit List
        </h2>

        <div className="flex gap-3 mb-5">
          <input
            value={fruit}
            onChange={handleChange}
            placeholder="Enter fruit name"
            className="flex-1 min-w-0 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {editIndex === null ? (
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add Fruit
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Save
            </button>
          )}
        </div>

        <ul className="space-y-3">
          {fruits.map((item, index) => (
            <li key={index} className="flex justify-between items-center border rounded-lg p-3">
              <span>{item}</span>
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white px-4 py-1.5 rounded-md hover:bg-yellow-600"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskFour;
