
import { useState } from "react";

function CourseForm() {
  const [form, setForm] = useState({
    name: "",
    trainer: "",
    duration: ""
  });

  const [courses, setCourses] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCourses([...courses, { ...form, id: Date.now() }]);

    setForm({ name: "", trainer: "", duration: "" });
  }

  return (
    <div>
      <h2>Course Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Course Name"
          value={form.name} onChange={handleChange} required />
        <input name="trainer" placeholder="Trainer"
          value={form.trainer} onChange={handleChange} required />
        <input name="duration" placeholder="Duration"
          value={form.duration} onChange={handleChange} required />

        <button type="submit">Add Course</button>
      </form>

      <h3>Course List</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Course</th>
            <th>Trainer</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.trainer}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseForm;
