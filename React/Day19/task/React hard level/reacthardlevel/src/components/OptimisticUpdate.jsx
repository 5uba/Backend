import { useState } from "react";
function OptimisticUpdate() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Practice JavaScript", completed: false }
  ]);
  const [message, setMessage] = useState("");
  const updateTask = async (id) => {
    const previousTasks = tasks;
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    // Update the UI immediately
    setTasks(updatedTasks);
    setMessage("Updating...");
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            completed: updatedTasks.find(
              (task) => task.id === id
            ).completed
          })
        }
      );
      if (!response.ok) {
        throw new Error("Update failed");
      }
      setMessage("Task updated successfully");
    } catch (error) {
      // Roll back if the API fails
      setTasks(previousTasks);
      setMessage("Update failed. Previous data restored.");
    }
  };
  return (
    <div>
      <h2>Optimistic Task Update</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>
            {task.title} - {task.completed ? "Completed" : "Pending"}
          </p>
          <button onClick={() => updateTask(task.id)}>
            Toggle Status
          </button>
        </div>
      ))}
      <p>{message}</p>
    </div>
  );
}
export default OptimisticUpdate;