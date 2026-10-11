
import { useState } from "react";

function TaskThree() {
  const [user, setUser] = useState({
    name: "Rahul",
    age: 22,
    city: "Chennai",
  });

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">User Details</h2>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        <button
          className="border rounded px-3 py-2"
          onClick={() => setUser({ ...user, name: "Arjun" })}
        >
          Change Name
        </button>

        <button
          className="border rounded px-3 py-2"
          onClick={() => setUser({ ...user, age: user.age + 1 })}
        >
          Increase Age
        </button>

        <button
          className="border rounded px-3 py-2"
          onClick={() => setUser({ ...user, city: "Bangalore" })}
        >
          Change City
        </button>
      </div>
    </div>
  );
}

export default TaskThree;
