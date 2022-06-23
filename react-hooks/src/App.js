import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const[windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo( () => {
    return slowFunction(number) 
  }, [number])
  
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark? 'white' : 'black'
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // clean up listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {windowWidth}
      <div></div>
      <input 
        type="number" 
        value={number} 
        onChange= {e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(pre => !pre)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log('calling slow function');
  for (let i = 0; i<= 1000000000; i++) {}
  return num * 2
}

export default App;
