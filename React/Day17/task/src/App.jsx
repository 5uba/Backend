import TaskOne from "./components/taskOne";
import TaskThree from "./components/taskThree";
import TaskTwo from "./components/taskTwo";


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