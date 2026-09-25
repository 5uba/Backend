import NonPrimitive from "./Components/NonPrimitive";
import Primitive from "./Components/Primitive";
import PrimitiveDataRendering from "./Components/PrimitiveDataRendering";
import ArrayRendering from "./Components/ArrayRendering";
import ObjectRendering from "./Components/ObjectRendering";
import ArrayOfObjectMap from "./Components/ArrayOfObjectMap";
function App() {

  return (
    <div>
      <h1>React Rendering</h1>

      <Primitive />
      <NonPrimitive />
      <PrimitiveDataRendering />
      <ArrayRendering />
      <ObjectRendering/>
      <ArrayOfObjectMap/>
    </div>
  );
}

export default App;