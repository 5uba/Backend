import { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  function addStudent() {
    if (name.trim() === "") {
      alert("Enter student name");
      return;
    }

    setStudents([...students, name]);
    setName("");
  }

  function deleteStudent(index) {
    setStudents(students.filter((student, i) => i !== index));
  }

  return (
    <div>
      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => deleteStudent(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;