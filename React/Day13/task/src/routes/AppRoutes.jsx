
import { Routes, Route } from "react-router-dom";

import TaskOne from "../components/TaskOne";
import TaskTwo from "../components/TaskTwo";
import TaskThree from "../components/TaskThree";
import TaskFour from "../components/TaskFour";
import TaskFive from "../components/TaskFive";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TaskOne />} />
      <Route path="/TaskTwo" element={<TaskTwo />} />
      <Route path="/TaskThree" element={<TaskThree />} />
      <Route path="/TaskFour" element={<TaskFour />} />
      <Route path="/TaskFive" element={<TaskFive />} />
    </Routes>
  );
}

export default AppRoutes;
