
import { useState } from "react";

function TaskFive() {
  const [name, setName] = useState("");
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAdd() {
    if (name.trim() === "") return;
    setEmployees([...employees, name.trim()]);
    setName("");
  }

  function handleEdit(index) {
    setName(employees[index]);
    setEditIndex(index);
  }

  function handleUpdate() {
    if (name.trim() === "" || editIndex === null) return;

    setEmployees(
      employees.map((employee, index) =>
        index === editIndex ? name.trim() : employee
      )
    );

    setName("");
    setEditIndex(null);
  }

  function handleDelete(index) {
    setEmployees(employees.filter((employee, i) => i !== index));

    if (editIndex === index) {
      setName("");
      setEditIndex(null);
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Employee Management
        </h2>

        <div className="flex gap-3 mb-6">
          <input
            value={name}
            onChange={handleChange}
            placeholder="Enter employee name"
            className="flex-1 min-w-0 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {editIndex === null ? (
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add Employee
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

        <h3 className="font-semibold text-lg mb-3">Employee List</h3>

        {employees.length === 0 ? (
          <p className="text-gray-500 text-center py-6">
            No employees added yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {employees.map((employee, index) => (
              <li
                key={index}
                className="flex flex-wrap items-center justify-between gap-3 border rounded-lg p-4 hover:bg-gray-50"
              >
                <span className="font-medium">{employee}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-4 py-1.5 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 text-white px-4 py-1.5 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskFive;
