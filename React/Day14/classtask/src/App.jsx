import { useState } from "react";
function App() {
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" }
  ]);
  const [skill, setSkill] = useState("");
  const [editId, setEditId] = useState(null);
  const addSkill = () => {
    if (skill.trim() === "") return;
    if (editId !== null) {
      setSkills(
        skills.map((item) =>
          item.id === editId? { ...item, name: skill }: item
        )
      );
      setEditId(null);
    } else {
      setSkills([
        ...skills,
        { id: Date.now(), name: skill }
      ]);
    }
    setSkill("");
  };
  const editSkill = (item) => {
    setSkill(item.name);
    setEditId(item.id);
  };
  const deleteSkill = (id) => {
    setSkills(
      skills.filter((item) => item.id !== id)
    );
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Skills
        </h1>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter skill name"
            className="border border-gray-300 p-3 flex-1 outline-blue-500"
          />
          <button
            onClick={addSkill}
            className="bg-blue-500 text-white px-5 py-2"
          >
            {editId !== null ? "Update" : "Add"}
          </button>
        </div>
        {skills.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm mb-4"
          >
            <span className="font-medium text-gray-800">
              {item.name}
            </span><br />
            <div className="flex gap-3">
              <button
                onClick={() => editSkill(item)}
                className="bg-green-400 px-3 py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deleteSkill(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
