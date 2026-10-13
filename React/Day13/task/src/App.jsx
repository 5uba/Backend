
import { HashRouter, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <HashRouter>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">
          Day13 React Tasks
        </h1>

        <nav className="flex flex-wrap gap-3 mb-5">
          <Link className="border rounded px-3 py-2" to="/">
            Task 1
          </Link>

          <Link className="border rounded px-3 py-2" to="/TaskTwo">
            Task 2
          </Link>

          <Link className="border rounded px-3 py-2" to="/TaskThree">
            Task 3
          </Link>

          <Link className="border rounded px-3 py-2" to="/TaskFour">
            Task 4
          </Link>

          <Link className="border rounded px-3 py-2" to="/TaskFive">
            Task 5
          </Link>
        </nav>

        <AppRoutes />
      </div>
    </HashRouter>
  );
}

export default App;
