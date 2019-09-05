// Import React library
import React from 'react';

// Import our own useResource custom hook
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li> )}
    </ul>
  )
}

export default UserList;