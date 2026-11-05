//using fetch API and Showing use details in table and add search or filter based on city

import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users").then((res) => res.json()).then((data) => {
        setUsers(data.users);
      }).catch((error) => console.log(error));
  }, []);
  const filteredUsers = users.filter((user) =>
    user.address.city.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <div>
      <h2>User Details</h2>

      <input type="text" placeholder="Search by city" value={city}onChange={(e) => setCity(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  }

export default App;