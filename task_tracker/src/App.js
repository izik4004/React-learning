import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Rebrand my portfolio',
        day: 'April 25th at 12:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Finish a react project',
        day: 'April 26th at 12:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Work on job assessment',
        day: 'April 27th at 12:30pm',
        reminder: true,
    },
])

// deletae task 

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

//toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
}



  return (
    <div className="container">
        <Header title='Task Tracker'/>
        {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
          'No Task to show'
        )}
    </div>
  );
}

export default App;
