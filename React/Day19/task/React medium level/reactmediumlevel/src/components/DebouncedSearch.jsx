import { useState, useEffect } from "react";
function DebouncedSearch() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (search.trim() === "") {
        setUsers([]);
        return;
      }
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        const result = data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );
        setUsers(result);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  return (
    <div>
      <h2>Debounced Search</h2>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
export default DebouncedSearch;