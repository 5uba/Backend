//employee CRUD with localstorage build add, edit and delete for an array of employee objects. 
//Save evry change in localstorage and store data after refresh
import React, { useState, useEffect } from "react";

function Crud() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let employee = {
      id: editId === null ? Date.now() : editId,
      name: name,
      department: department,
      salary: salary
    };

    let updatedEmployees;
    if (editId === null) {
      updatedEmployees = [...employees, employee];
    } else {
      updatedEmployees = employees.map((item) =>
        item.id === editId ? employee : item
      );
    }
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setName("");
    setDepartment("");
    setSalary("");
    setEditId(null);
  };
  const handleEdit = (item) => {
    setName(item.name);
    setDepartment(item.department);
    setSalary(item.salary);
    setEditId(item.id);
  };
  const handleDelete = (id) => {
    let updatedEmployees = employees.filter((item) => item.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };
  return (
    <div>
      <h2>Employee CRUD</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required/>
        <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required/>
        <button type="submit">
          {editId === null ? "Add Employee" : "Update Employee"}
        </button>
      </form>
      <h3>Employee List</h3>
      {employees.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Department: {item.department}</p>
          <p>Salary: {item.salary}</p>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default Crud;

