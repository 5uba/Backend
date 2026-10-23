import { useRef } from "react";
function App() {
  const box = useRef(null);
  const changeColor = () => {
    box.current.style.backgroundColor = "lightblue";
  };
  return (
    <div>
      <div ref={box} style={{ padding: "50px" }}>
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
