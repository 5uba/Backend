import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTask = async () => {
    setMessage("");
    setError("");

    if (!task.trim()) {
      setError("Please enter a task before clicking Add Task.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: task.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ " + data.message);
        setTask("");
      } else {
        setError("❌ " + (data.error || "Something went wrong."));
      }
    } catch (err) {
      setError("❌ Could not reach the server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button onClick={handleAddTask} disabled={loading}>
          {loading ? "Saving..." : "Add Task"}
        </button>
      </div>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
