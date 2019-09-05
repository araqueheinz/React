// Import React library
import React from 'react';

// Import our own useResource custom hook
import useResources from './useResources';


// Refactoring a class to a function HOOKS
const ResourceList = ({ resource }) => {
  
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(element => <li key={element.id}>{element.title}</li>)}
    </ul>
  )
}

export default ResourceList;