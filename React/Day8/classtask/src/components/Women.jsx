import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
function Men() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Women</h1>
      <div className="grid grid-cols-3 gap-6">
        <img src={women1} className="h-64 w-full object-cover" />
        <img src={women2} className="h-64 w-full object-cover" />
        <img src={women3} className="h-64 w-full object-cover" />
      </div>
    </div>
  );
}
export default Men;