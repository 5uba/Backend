import { useState } from "react";
function App() {
  // TASK 1 - ARRAY
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  // Add React
  const addReact = () => {
    setSkills([...skills, "React"]);
  };
  // Update JavaScript
  const updateJavaScript = () => {
    setSkills(
      skills.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };

  // TASK 2 - OBJECT
  const [student, setStudent] = useState({
    name: "Arun",
    age: 22,
    course: "React"
  });
  // Update Course
  const updateCourse = () => {
    setStudent({
      ...student,
      course: "MERN"
    });
  };
  // Add City
  const addCity = () => {
    setStudent({
      ...student,
      city: "Chennai"
    });
  };

  // TASK 3 - TOGGLE
  const [show, setShow] = useState(false);
  // Toggle
  const toggleDetails = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Task 1 - Array
      </h1>
      <h2 className="text-xl font-semibold mb-3">
        Skills
      </h2>

      {skills.map((skill, index) => (
        <p
          key={index}
          className="bg-white p-3 mb-2 rounded-lg shadow w-64"
        >
          {skill}
        </p>
      ))}

      <button
        onClick={addReact}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-3 hover:bg-blue-600"
      >
        Add React
      </button>

      <button
        onClick={updateJavaScript}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Update JavaScript
      </button>


      <hr className="my-8 border-gray-400" />


      <h1 className="text-3xl font-bold text-purple-600 mb-4">
        Task 2 - Object
      </h1>

      <div className="bg-white p-5 rounded-lg shadow w-80 mb-4">

        <p className="mb-2">
          <span className="font-bold">Name:</span> {student.name}
        </p>

        <p className="mb-2">
          <span className="font-bold">Age:</span> {student.age}
        </p>

        <p className="mb-2">
          <span className="font-bold">Course:</span> {student.course}
        </p>

        {student.city && (
          <p>
            <span className="font-bold">City:</span> {student.city}
          </p>
        )}

      </div>

      <button
        onClick={updateCourse}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg mr-3 hover:bg-purple-600"
      >
        Update Course
      </button>

      <button
        onClick={addCity}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
      >
        Add City
      </button>


      <hr className="my-8 border-gray-400" />


      <h1 className="text-3xl font-bold text-pink-600 mb-4">
        Task 3 - Toggle
      </h1>

      <button
        onClick={toggleDetails}
        className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
      >
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show ? (
        <div className="bg-white p-5 mt-4 rounded-lg shadow w-80">

          <h2 className="text-xl font-bold text-pink-600 mb-3">
            Student Details
          </h2>

          <p className="mb-2">
            <span className="font-bold">Name:</span> Arun
          </p>

          <p className="mb-2">
            <span className="font-bold">Age:</span> 22
          </p>

          <p>
            <span className="font-bold">Course:</span> MERN
          </p>

        </div>
      ) : null}

    </div>
  );
}

export default App;