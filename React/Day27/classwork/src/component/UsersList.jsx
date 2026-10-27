const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName} {user.lastName}</h3>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default UserList