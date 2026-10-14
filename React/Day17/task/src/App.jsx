import TaskOne from "./components/TaskOne";
import TaskThree from "./components/TaskThree";
import TaskTwo from "./components/TaskTwo";
function App() {
  return (
    <div className="p-4">
      <TaskOne />

      <hr className="my-4" />

      <TaskTwo />

      <hr className="my-4" />

      <TaskThree />
    </div>
  );
}

export default App;