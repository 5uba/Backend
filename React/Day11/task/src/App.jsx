import { useState } from "react";
function App() {
  // TASK 1 - PRIMITIVE STATE

  const [employeeName] = useState("Arun");
  const [salary, setSalary] = useState(25000);

  const increaseSalary = () => {
    setSalary(salary + 5000);
  };

  // TASK 2 - ARRAY

  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const addReact = () => {
    setCourses([...courses, "React"]);
  };

  const updateCSS = () => {
    setCourses(
      courses.map((course) =>
        course === "CSS"
          ? "Advanced CSS"
          : course
      )
    );
  };

  // TASK 3 - OBJECT

  const [product, setProduct] = useState({
    name: "Laptop",
    price: 45000,
    stock: 10
  });

  const updatePrice = () => {
    setProduct({
      ...product,
      price: 50000
    });
  };

  const addBrand = () => {
    setProduct({
      ...product,
      brand: "Dell"
    });
  };

  // TASK 4 - ARRAY OF OBJECTS

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Arun",
      salary: 25000
    },
    {
      id: 2,
      name: "Priya",
      salary: 30000
    },
    {
      id: 3,
      name: "Kumar",
      salary: 28000
    }
  ]);

  const addEmployee = () => {
    setEmployees([
      ...employees,
      {
        id: 4,
        name: "Bala",
        salary: 32000
      }
    ]);
  };

  const updateEmployeeSalary = () => {
    setEmployees(
      employees.map((employee) =>
        employee.id === 2
          ? {
              ...employee,
              salary: 35000
            }
          : employee
      )
    );
  };

  // TASK 5 - BOOLEAN

  const [password] = useState("react123");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      {/* MAIN TITLE */}

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        React useState Tasks
      </h1>


      {/* TASK 1 */}

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">

        <h2 className="text-2xl font-bold text-blue-600 mb-5">
          Task 1 - Employee Salary
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-5">

          <p className="text-lg mb-2">
            <span className="font-bold">Employee Name:</span>{" "}
            {employeeName}
          </p>

          <p className="text-lg">
            <span className="font-bold">Salary:</span>{" "}
            ₹{salary}
          </p>

        </div>

        <button
          onClick={increaseSalary}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          Increase Salary
        </button>

      </div>


      {/* TASK 2 */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">

        <h2 className="text-2xl font-bold text-green-600 mb-5">
          Task 2 - Course List
        </h2>

        <div className="space-y-2 mb-5">

          {courses.map((course, index) => (
            <p
              key={index}
              className="bg-gray-100 p-3 rounded-lg font-medium"
            >
              {course}
            </p>
          ))}

        </div>

        <button
          onClick={addReact}
          className="bg-green-500 text-white px-5 py-2 rounded-lg mr-3 hover:bg-green-600"
        >
          Add React
        </button>

        <button
          onClick={updateCSS}
          className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600"
        >
          Update CSS
        </button>

      </div>


      {/* TASK 3 */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-5">
          Task 3 - Product Details
        </h2>
        <div className="bg-orange-50 p-4 rounded-lg mb-5">
          <p className="mb-2">
            <span className="font-bold">Name:</span>{" "}
            {product.name}
          </p>
          <p className="mb-2">
            <span className="font-bold">Price:</span>{" "}
            ₹{product.price}
          </p>
          <p className="mb-2">
            <span className="font-bold">Stock:</span>{" "}
            {product.stock}
          </p>
          {product.brand && (
            <p>
              <span className="font-bold">Brand:</span>{" "}
              {product.brand}
            </p>
          )}

        </div>
        <button
          onClick={updatePrice}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg mr-3 hover:bg-orange-600"
        >
          Update Price
        </button>

        <button
          onClick={addBrand}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Add Brand
        </button>

      </div>


      {/* TASK 4 */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">

        <h2 className="text-2xl font-bold text-purple-600 mb-5">
          Task 4 - Employee List
        </h2>
        <div className="space-y-3 mb-5">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-purple-50 p-4 rounded-lg border border-purple-100"
            >

              <p className="mb-1">
                <span className="font-bold">ID:</span>{" "}
                {employee.id}
              </p>

              <p className="mb-1">
                <span className="font-bold">Name:</span>{" "}
                {employee.name}
              </p>

              <p>
                <span className="font-bold">Salary:</span>{" "}
                ₹{employee.salary}
              </p>

            </div>
          ))}

        </div>
        <button
          onClick={addEmployee}
          className="bg-purple-500 text-white px-5 py-2 rounded-lg mr-3 hover:bg-purple-600"
        >
          Add Employee
        </button>
        <button
          onClick={updateEmployeeSalary}
          className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
        >
          Update Salary
        </button>

      </div>

      {/* TASK 5 */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-bold text-pink-600 mb-5">
          Task 5 - Show / Hide Password
        </h2>

        <div className="bg-pink-50 p-4 rounded-lg mb-5">
          <p className="text-lg">
            <span className="font-bold">Password:</span>{" "}

            {showPassword
              ? password
              : "********"
            }
          </p>
        </div>
        <button
          onClick={togglePassword}
          className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
        >
          {showPassword
            ? "Hide Password"
            : "Show Password"
          }
        </button>
      </div>
    </div>
  );
}
export default App;