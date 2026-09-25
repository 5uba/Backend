import React from "react";
function ArrayRendering() {
  let skills = ["HTML", "CSS", "JavaScript", "React", "Node"];
  return (
    <div>
      <h2>My Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayRendering;