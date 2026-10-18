import { useState } from "react";
const StudentsList = () => {
  const [students, setStudents] = useState(["Arun", "Priya", "Kumar"]);
  const [studentName, setStudentName] = useState("");

  const addStudent = () => {
    if (studentName === "") {
      return;
    }

    setStudents([...students, studentName]);
    setStudentName("");
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((student, i) => i !== index));
  };

  return (
    <>
      <h1>Student List</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      {students.map((student, index) => (
        <div key={index}>
          <p>{student}</p>
          <button onClick={() => deleteStudent(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default StudentsList;