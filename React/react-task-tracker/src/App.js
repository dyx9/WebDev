import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'task 1',
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'task 2',
        day: 'Feb 6th',
        reminder: true,
    },
    {
        id: 3,
        text: 'task 3',
        day: 'Feb 7th',
        reminder: true,
    }
  ])

  // delete task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter( (task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header />
      {tasks.length <= 0 ? "No tasks" :
        <Tasks tasks={tasks} onDelete={deleteTask} />
      }
    </div>
  );
}



export default App;
