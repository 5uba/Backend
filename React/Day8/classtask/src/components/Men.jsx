import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
function Men() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Men</h1>
      <div className="grid grid-cols-3 gap-6">
        <img src={men1} className="h-64 w-full object-cover" />
        <img src={men2} className="h-64 w-full object-cover" />
        <img src={men3} className="h-64 w-full object-cover" />
      </div>
    </div>
  );
}
export default Men;