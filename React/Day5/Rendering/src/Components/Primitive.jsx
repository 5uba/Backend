const Primitive = () => {
  let name = "Subashini";
  let age = 21;
  let isStudent = true;
  return (
    <div className="container">
      <h2>Primitive Data Types</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Primitive;