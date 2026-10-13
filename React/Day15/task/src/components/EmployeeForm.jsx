
import { useState } from "react";

function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId !== null) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editId ? { ...form, id: editId } : emp
        )
      );
      setEditId(null);
    } else {
      setEmployees([
        ...employees,
        { ...form, id: Date.now() }
      ]);
    }

    setForm({ name: "", department: "", salary: "" });
  }

  function handleEdit(emp) {
    setForm({
      name: emp.name,
      department: emp.department,
      salary: emp.salary
    });
    setEditId(emp.id);
  }

  function handleDelete(id) {
    setEmployees(employees.filter((emp) => emp.id !== id));
  }

  return (
    <div>
      <h2>Employee Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name}
          onChange={handleChange} required />
        <input name="department" placeholder="Department"
          value={form.department} onChange={handleChange} required />
        <input name="salary" type="number" placeholder="Salary"
          value={form.salary} onChange={handleChange} required />

        <button type="submit">
          {editId !== null ? "Update" : "Add Employee"}
        </button>
      </form>

      <h3>Employee List</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeForm;
