
import { useState } from "react";

function StudentMarksForm() {
  const [form, setForm] = useState({
    name: "",
    tamil: "",
    english: "",
    maths: ""
  });

  const [students, setStudents] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const student = {
      ...form,
      id: Date.now(),
      total:
        Number(form.tamil) +
        Number(form.english) +
        Number(form.maths)
    };

    setStudents([...students, student]);

    setForm({
      name: "",
      tamil: "",
      english: "",
      maths: ""
    });
  }

  return (
    <div>
      <h2>Student Marks Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Student Name"
          value={form.name} onChange={handleChange} required />
        <input name="tamil" type="number" placeholder="Tamil Marks"
          min="0" max="100" value={form.tamil}
          onChange={handleChange} required />
        <input name="english" type="number" placeholder="English Marks"
          min="0" max="100" value={form.english}
          onChange={handleChange} required />
        <input name="maths" type="number" placeholder="Maths Marks"
          min="0" max="100" value={form.maths}
          onChange={handleChange} required />

        <button type="submit">Add Student</button>
      </form>

      <h3>Student Marks</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.tamil}</td>
              <td>{student.english}</td>
              <td>{student.maths}</td>
              <td>{student.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentMarksForm;
