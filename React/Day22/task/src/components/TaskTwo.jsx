import { useRef } from "react";
const TaskTwo = () => {
  const passwordRef = useRef(null);
  const handleShow = () => {
    passwordRef.current.type = "text";
  };
  const handleHide = () => {
    passwordRef.current.type = "password";
  };
  return (
    <div>
      <h2>Password Show / Hide</h2>
      <input type="password" placeholder="Enter Password" ref={passwordRef}/>
      <button onClick={handleShow}>Show</button>
      <button onClick={handleHide}>Hide</button>
    </div>
  );
};
export default TaskTwo;
