import StudentState from "./components/StudentState";
import UserFilter from "./components/UserFilter";
import EmployeeCRUD from "./components/EmployeeCRUD";
import CountTimer from "./components/CountTimer";
import DebouncedSearch from "./components/DebouncedSearch";
function App() {
  return (
    <div>
      <h1>Medium Level React Tasks</h1>

      <StudentState />
      <hr />

      <UserFilter />
      <hr />

      <EmployeeCRUD />
      <hr />

      <CountTimer />
      <hr />

      <DebouncedSearch />
    </div>
  );
}
export default App;