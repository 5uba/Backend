import { useEffect, useState } from "react";
import UserList from "./component/UsersList";
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then ((res) => res.json())
    .then ((data)=>{
      setUsers(data.users)
    })
    .catch((error)=> console.log(error))
  }, []);
  return (
    <div>
      <h1>User Details</h1>
      <UserList users={users} />
    </div>
  )
}
export default App;