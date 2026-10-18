import FormHandling from "./components/FormHandling";
import StateUpdate from "./components/StateUpdate";
import StudentList from "./components/StudentList";
import UserSearch from "./components/UserSearch";
import WelcomeTimer from "./components/WelcomeTimer";

function App() {
  return (
    <div>
       <StateUpdate/>
       <FormHandling/>
       <StudentList/>
       <UserSearch/>
       <WelcomeTimer/>
    </div>
  );
}

export default App;