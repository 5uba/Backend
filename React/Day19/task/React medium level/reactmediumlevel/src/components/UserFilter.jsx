import { useState, useEffect } from "react";

function UserFilter() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  let result = [...users];

  result = result.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (city !== "") {
    result = result.filter(
      (user) => user.address.city === city
    );
  }

  result.sort((a, b) => {
    if (order === "asc") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  let cities = [...new Set(users.map((user) => user.address.city))];

  return (
    <div>
      <h2>User Search, Filter and Sort</h2>

      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">All Cities</option>

        {cities.map((cityName) => (
          <option key={cityName} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>

      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">ID Ascending</option>
        <option value="desc">ID Descending</option>
      </select>

      {result.map((user) => (
        <p key={user.id}>
          {user.id}. {user.name} — {user.address.city}
        </p>
      ))}
    </div>
  );
}

export default UserFilter;