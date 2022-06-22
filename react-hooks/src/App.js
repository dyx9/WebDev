import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [resourceType, setResourceType] = useState("posts")
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

  }, [resourceType])

  return (
    <>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>
        {resourceType}
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
      </h1>
    </>
  );
}

export default App;
