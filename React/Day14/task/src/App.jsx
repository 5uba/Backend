
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";
import TaskThree from "./components/TaskThree";
import TaskFour from "./components/TaskFour";
import TaskFive from "./components/TaskFive";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

        <header className="bg-white shadow-sm p-6">
          <h1 className="text-3xl font-bold text-center mb-5">
            React Form Handling Tasks
          </h1>

          <nav className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Task 1
            </Link>

            <Link
              to="/task2"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Task 2
            </Link>

            <Link
              to="/task3"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Task 3
            </Link>

            <Link
              to="/task4"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Task 4
            </Link>

            <Link
              to="/task5"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Task 5
            </Link>
          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<TaskOne />} />
            <Route path="/task2" element={<TaskTwo />} />
            <Route path="/task3" element={<TaskThree />} />
            <Route path="/task4" element={<TaskFour />} />
            <Route path="/task5" element={<TaskFive />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
