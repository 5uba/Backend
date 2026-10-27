import { useState, useMemo } from "react";
function calculateDouble(number) {
  console.log("Calculation running...");

  for (let i = 0; i < 1000000; i++) {
    
  }

  return number * 2;
}

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const result = useMemo(() => {
    return calculateDouble(number);
  }, [number]);

  return (
    <div style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
      }}>
      <h2>Number Multiplication</h2>

      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
      <h3>Double: {result}</h3>

      <button onClick={() => setDark(!dark)}>Change Theme</button>
    </div>
  );
}

export default App;
