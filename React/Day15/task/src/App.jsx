
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import EmployeeForm from "./components/EmployeeForm";
import ProductForm from "./components/ProductForm";
import CourseForm from "./components/CourseForm";
import ExpenseForm from "./components/ExpenseForm";
import StudentMarksForm from "./components/StudentMarksForm";

function App() {
  return (
    <BrowserRouter>
      <h1>React Form Handling Tasks</h1>

      <nav>
        <Link to="/">Employee</Link>{" | "}
        <Link to="/product">Product</Link>{" | "}
        <Link to="/course">Course</Link>{" | "}
        <Link to="/expense">Expense</Link>{" | "}
        <Link to="/student">Student Marks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/product" element={<ProductForm />} />
        <Route path="/course" element={<CourseForm />} />
        <Route path="/expense" element={<ExpenseForm />} />
        <Route path="/student" element={<StudentMarksForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
