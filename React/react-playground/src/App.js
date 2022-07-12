import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Blog from './component/Blog/Blog';
import { useRef, useState, } from 'react';

function App() {
  const sidebarRef = useRef(null)
  const contentRef = useRef(null)
  const [openSidebar, setOpenSidebar] = useState(false)

  const onToggle = () => {
      setOpenSidebar(pre => !pre)
      updateClassName()
}

const updateClassName = () => {
  if (sidebarRef.current.className == "sidebar") {
      sidebarRef.current.className = 'sidebar active'
      contentRef.current.className = 'content push'
  }
  else{
      sidebarRef.current.className = 'sidebar'
      contentRef.current.className = 'content'
  }
}

  return (
    <div className='container'>
      <Sidebar sidebarRef={sidebarRef}/>
      <Blog onToggle={onToggle} openSidebar={openSidebar} contentRef={contentRef}/>
    </div>
  );
}

export default App;
