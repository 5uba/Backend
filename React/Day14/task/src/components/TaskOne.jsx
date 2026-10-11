
import { useState } from "react";

function TaskOne() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAdd() {
    if (name.trim() === "") return;
    setStudents([...students, name.trim()]);
    setName("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Student Name List
        </h2>

        <div className="flex gap-3 mb-5">
          <input
            value={name}
            onChange={handleChange}
            placeholder="Enter student name"
            className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Student
          </button>
        </div>

        <ul className="space-y-3">
          {students.map((student, index) => (
            <li key={index} className="bg-gray-50 border rounded-lg p-3">
              {student}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskOne;
