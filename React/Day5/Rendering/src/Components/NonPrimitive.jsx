const NonPrimitive = () => {

  let skills = ["HTML", "CSS", "JavaScript", "React"];

  let student = {
    name: "Subashini",
    course: "Full Stack Development"
  };

  return (
    <div className="container">
      <h2>Non-Primitive Data Types</h2>

      <h3>Skills</h3>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <h3>Student Details</h3>

      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default NonPrimitive;