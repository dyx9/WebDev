import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Blog from './component/Blog/Blog';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Blog />
    </div>
  );
}

export default App;
