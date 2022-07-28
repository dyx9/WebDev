import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Cover from './component/Cover/Cover';
import Blog from './component/Blog/Blog';
import { useRef, useState, } from 'react';


function App() {
  const sidebarRef = useRef(null)
  const contentRef = useRef(null)
  const coverRef = useRef(null)
  const [openSidebar, setOpenSidebar] = useState(false)

  const onToggle = () => {
      setOpenSidebar(pre => !pre)
      updateClassName()
}

const updateClassName = () => {
  if (sidebarRef.current.className == "sidebar") {
      sidebarRef.current.className = 'sidebar active'
      contentRef.current.className = 'content push'
      coverRef.current.className = 'cover active'
  }
  else{
      sidebarRef.current.className = 'sidebar'
      contentRef.current.className = 'content'
      coverRef.current.className = 'cover'
  }
}

  return (
    <div className='container'>
      <Cover coverRef={coverRef} />
      <Sidebar
        onToggle={onToggle}
        openSidebar={openSidebar}
        sidebarRef={sidebarRef}
      />
      <Blog contentRef={contentRef}
      />
    </div>
  );
}

export default App;
