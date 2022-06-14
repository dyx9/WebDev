import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter( (task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length <= 0 ? "No tasks" :
        <Tasks 
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} 
        />
      }
    </div>
  );
}



export default App;
