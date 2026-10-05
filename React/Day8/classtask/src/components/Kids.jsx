import kid1 from "../assets/kid1.jpg";
import kid2 from "../assets/kid2.jpg";
import kid3 from "../assets/kid3.jpg";
function Men() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Kids</h1>
      <div className="grid grid-cols-3 gap-6">
        <img src={kid1} className="h-64 w-full object-cover" />
        <img src={kid2} className="h-64 w-full object-cover" />
        <img src={kid3} className="h-64 w-full object-cover" />
      </div>
    </div>
  );
}
export default Men;