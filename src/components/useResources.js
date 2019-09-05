// Import HOOKS functions from react library
import { useState, useEffect } from 'react';

// Import axios library
import axios from 'axios';

// Hooks
const useResources = (resource) => {
  // Hooks
  const [resources, setResources] = useState([]);

  // Lifecycle methods with hooks
  useEffect(
    () => {
      (async resource => {

        const response =  await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        setResources(response.data);

      })(resource)
    },
    [resource]
  );

  return resources;
}

export default useResources;