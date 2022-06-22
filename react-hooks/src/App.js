import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[windowWidth, setWindowWidth] = useState(window.innerWidth)
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
    </div>
  );
}

export default App;
