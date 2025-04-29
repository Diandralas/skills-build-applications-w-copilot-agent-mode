import React, { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_CODESPACE_URL || 'http://localhost:8000';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/users/`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
