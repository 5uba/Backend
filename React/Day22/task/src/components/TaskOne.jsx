import { useRef } from "react";
const TaskOne = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const handleClear = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
  };
  const handleSubmit = () => {
    alert(
      "Name: " + nameRef.current.value +
      "\nEmail: " + emailRef.current.value
    );
  };
  return (
    <div>
      <h2>Input Focus and Clear</h2>
      <input type="text" placeholder="Enter Name" ref={nameRef}/>
      <br /><br />
      <input type="email" placeholder="Enter Email" ref={emailRef}/>
      <br /><br />
      <button onClick={() => nameRef.current.focus()}>Focus Name</button>
      <button onClick={() => emailRef.current.focus()}>Focus Email</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default TaskOne;
