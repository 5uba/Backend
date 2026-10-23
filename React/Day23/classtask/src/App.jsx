
import { useRef } from "react";

function App() {
  const boxRef = useRef(null);

  const changeColor = () => {
    boxRef.current.style.backgroundColor = "pink";
  };

  return (
    <div>
      <div ref={boxRef}>
        Hello React
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
