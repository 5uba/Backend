import { useMemo, useState } from "react";

const App = () => {
  
  const [evenNumber, setEvenNumber] = useState("");
 
  const [darkMode, setDarkMode] = useState(false);
  
  const findingeven = useMemo(() => {
    console.log("Running memo");
    return evenNumber%2===0? "Even":"Odd";
  }, [evenNumber]);
  
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "10px",}}>
      <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light Theme" : "Dark Theme"}</button>
      <br/><br/>
      <input type="number" value={evenNumber} onChange={(e) => setEvenNumber(e.target.value)} placeholder="Enter a number"/>
      <h3>Result: {evenNumber !== "" ? findingeven : ""}</h3>
      
    </div>
  );
};

export default App;
