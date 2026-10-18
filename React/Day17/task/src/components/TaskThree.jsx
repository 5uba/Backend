import { useState, useEffect } from "react";
function TaskThree() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      age: age,
      email: email,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Data Saved Successfully");
  };

  useEffect(() => {
    const savedData = localStorage.getItem("userData");

    if (savedData) {
      const data = JSON.parse(savedData);

      setName(data.name);
      setAge(data.age);
      setEmail(data.email);
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Store User Details
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="border px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskThree;