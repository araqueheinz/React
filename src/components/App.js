// Import React Library
import React from 'react';

// React hooks functions
import { useState } from 'react';  

// Import our ResourceList Component
import ResourceList from './ResourceList';

// Import our UserList component
import UserList from './UserList'

const App = () => {  
  // Hooks magic
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList/> 
      <div>
        <button onClick={() => setResource('posts')} >Posts</button>
        <button onClick={() => setResource('todos')} >Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  ) 
}

export default App;