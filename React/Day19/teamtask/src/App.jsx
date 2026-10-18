import React from "react";
import StudentsList from "./components/StudentsList";
import Count from "./components/count";
import Crud from "./components/crud";
function App() {
  return (
    <div>
      <Count/>
      <StudentsList />
      <Crud />
    </div>
  );
}

export default App;