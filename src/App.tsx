import  {useEffect, useState} from 'react';

import Tasks from './components/Tasks';
import Task from './components/models/Task';
import NewTask from './components/NewTask';
import Heading from './components/Date';

function App() {
  // @ts-ignore
  const initialState = JSON.parse(localStorage.getItem('task')) || []
 const [task, setTasks] = useState<Task[]>(initialState)
 
 useEffect(() => {
  const temp = JSON.stringify(task);
  // const taskId: string = new Date().toISOString()
  localStorage.setItem( 'task', temp)
 }, [task])
 
    
 
 const addToTask = (taskText: string) => {
   const newTask = new Task(taskText)

    setTasks((prevTask) => prevTask.concat(newTask))
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
