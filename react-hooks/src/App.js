import { useEffect, useMemo, useState, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const rerenderCount = useRef(1);
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  const updateName = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    rerenderCount.current += 1;
  })

  return (
    <>
      <div>Rendered: {rerenderCount.current}</div>
      <input ref={inputRef} onChange={e => updateName(e)}/>
      <div></div>
      <button onClick={focusInput}> Focus Input</button>
    </>
  )
}

export default App;