
import { useState } from "react";

function TaskFive() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ravi", marks: 70, passed: true },
    { id: 2, name: "Priya", marks: 45, passed: false },
    { id: 3, name: "Kumar", marks: 80, passed: true },
  ]);

  function increaseMarks(id) {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, marks: student.marks + 5 }
          : student
      )
    );
  }

  function toggleResult(id) {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, passed: !student.passed }
          : student
      )
    );
  }

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Student Management</h2>

      {students.map((student) => (
        <div key={student.id} className="border rounded p-3 mb-3">
          <p>Name: {student.name}</p>
          <p>Marks: {student.marks}</p>
          <p>Result: {student.passed ? "Pass" : "Fail"}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            <button
              className="border rounded px-3 py-2"
              onClick={() => increaseMarks(student.id)}
            >
              Add 5 Marks
            </button>

            <button
              className="border rounded px-3 py-2"
              onClick={() => toggleResult(student.id)}
            >
              Toggle Result
            </button>

            <button
              className="border rounded px-3 py-2"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskFive;
