import LoanApplication from "./components/LoanApplication";
import ProductList from "./components/ProductList";
import OptimisticUpdate from "./components/OptimisticUpdate";
import OTPVerification from "./components/OTPVerification";
import RaceCondition from "./components/RaceCondition";
function App() {
  return (
    <div>
      <h1>Hard Level React Tasks</h1>

      <LoanApplication />
      <hr />

      <ProductList />
      <hr />

      <OptimisticUpdate />
      <hr />

      <OTPVerification />
      <hr />

      <RaceCondition />
    </div>
  );
}

export default App;
