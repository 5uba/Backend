import React from "react";

const ArrayOfObjectMap = () => {

  let students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  return (
    <div>
      <h2>Student Details</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default ArrayOfObjectMap;