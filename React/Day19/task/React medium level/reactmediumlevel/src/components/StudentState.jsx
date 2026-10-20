import { useState } from "react";
function StudentState() {
  const [students, setStudents] = useState(["Arun", "Priya"]);
  function addStudent() {
    let newStudent = "Kumar";
    let updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    console.log("Old Array:", students);
    console.log("New Array:", updatedStudents);
  }
  return (
    <div>
      <h2>Student State</h2>
      <button onClick={addStudent}>Add Student</button>
      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  );
}
export default StudentState;