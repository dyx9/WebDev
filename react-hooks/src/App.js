import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1)

  const decrement = () => {
    setCount(pre => pre-1)
  }

  const increment = () => {
    setCount(pre => pre+1)
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
