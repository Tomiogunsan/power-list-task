import  {useState} from 'react';

import Tasks from './components/Tasks';
import Task from './components/models/Task';
import NewTask from './components/NewTask';
import Heading from './components/Date';

function App() {
 const [task, setTasks] = useState<Task[]>([])


 
 const addToTask = (taskText: string) => {
   const newTask = new Task(taskText)

    setTasks((prevTask) => {return prevTask.concat(newTask)})
  }

  const removeTaskHandler = (taskId: string) => {
      setTasks((prevTask) => {return prevTask.filter(task => task.id !== taskId)})
  }
  
  return (
    <div  className='app'>
      <Heading />
      <NewTask  onAddTask={addToTask}/>
      <Tasks tasks= {task} onRemoveTask = {removeTaskHandler} />
      <p>{  `You have ${task.length} task(s)`}</p>
    </div>
  );
}

export default App;
