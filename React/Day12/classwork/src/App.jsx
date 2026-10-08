import { useState } from "react";

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Raja",
      age: 22
    }
  ]);

  const addStudent = () => {

    const newStudent = {
      id: 2,
      name: "Rani",
      age: 23
    };

    setStudents([...students, newStudent]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        Students
      </h2>

      <div className="flex flex-wrap justify-center gap-5">

        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white w-64 p-5 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3">
              Student Details
            </h3>

            <p className="text-gray-700">
              Name: {student.name}
            </p>

            <p className="text-gray-700">
              Age: {student.age}
            </p>
          </div>
        ))}

      </div>

      <div className="text-center mt-6">
        <button
          onClick={addStudent}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Student
        </button>
      </div>

    </div>
  );
}

export default App;