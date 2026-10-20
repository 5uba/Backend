import { useState, useEffect } from "react";
function RaceCondition() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (search.trim() === "") {
      setUsers([]);
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${encodeURIComponent(search)}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log("Error:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, [search]);
  return (
    <div>
      <h2>User Search</h2>
      <input type="text" placeholder="Search users" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {loading && <p>Loading...</p>}
      {users.map((user) => (
        <p key={user.id}>
          {user.firstName} {user.lastName}
        </p>
      ))}
      {!loading && search.trim() !== "" && users.length === 0 && (
        <p>No users found</p>
      )}
    </div>
  );
}
export default RaceCondition;