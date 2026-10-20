import { useState, useEffect } from "react";
function EmployeeCRUD() {
  const [employees, setEmployees] = useState(() => {
    let saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [editId, setEditId] = useState(null);
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || salary === "" || Number(salary) <= 0) {
      alert("Enter valid name and salary");
      return;
    }
    if (editId !== null) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editId
            ? { ...emp, name: name, salary: Number(salary) }
            : emp
        )
      );
      setEditId(null);
    } else {
      let newEmployee = {
        id: Date.now(),
        name: name,
        salary: Number(salary)
      };
      setEmployees([...employees, newEmployee]);
    }
    setName("");
    setSalary("");
  }
  function handleEdit(emp) {
    setName(emp.name);
    setSalary(String(emp.salary));
    setEditId(emp.id);
  }
  function handleDelete(id) {
    setEmployees(employees.filter((emp) => emp.id !== id));
  }
  return (
    <div>
      <h2>Employee CRUD</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
      {employees.map((emp) => (
        <div key={emp.id}>
          <p>
            {emp.name} - ₹{emp.salary}
          </p>
          <button onClick={() => handleEdit(emp)}>Edit</button>
          <button onClick={() => handleDelete(emp.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default EmployeeCRUD;