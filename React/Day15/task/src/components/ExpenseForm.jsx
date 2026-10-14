
import { useState } from "react";

function ExpenseForm() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: ""
  });

  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId !== null) {
      setExpenses(expenses.map((expense) =>
        expense.id === editId ? { ...form, id: editId } : expense
      ));
      setEditId(null);
    } else {
      setExpenses([...expenses, { ...form, id: Date.now() }]);
    }

    setForm({ title: "", amount: "", category: "" });
  }

  function handleEdit(expense) {
    setForm({
      title: expense.title,
      amount: expense.amount,
      category: expense.category
    });
    setEditId(expense.id);
  }

  function handleDelete(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  return (
    <div>
      <h2>Expense Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Expense Title"
          value={form.title} onChange={handleChange} required />
        <input name="amount" type="number" placeholder="Amount"
          value={form.amount} onChange={handleChange} required />
        <input name="category" placeholder="Category"
          value={form.category} onChange={handleChange} required />
        <button type="submit">
          {editId !== null ? "Update Expense" : "Add Expense"}
        </button>
      </form>

      <h3>Expense List</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => handleEdit(expense)}>Edit</button>
                <button onClick={() => handleDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseForm;
