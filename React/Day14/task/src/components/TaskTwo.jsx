
import { useState } from "react";

function TaskTwo() {
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  function handleChange(e) {
    setCourse(e.target.value);
  }

  function handleAdd() {
    if (course.trim() === "") return;
    setCourses([...courses, course.trim()]);
    setCourse("");
  }

  function handleDelete(index) {
    setCourses(courses.filter((item, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Course Management
        </h2>

        <div className="flex gap-3 mb-5">
          <input
            value={course}
            onChange={handleChange}
            placeholder="Enter course name"
            className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Course
          </button>
        </div>

        <ul className="space-y-3">
          {courses.map((item, index) => (
            <li key={index} className="flex justify-between items-center border rounded-lg p-3">
              <span>{item}</span>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskTwo;
