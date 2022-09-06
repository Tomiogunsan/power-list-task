import React, {Fragment} from 'react';
import Task from './models/Task';
import classes from './Tasks.module.css';
import { AiOutlineClose } from 'react-icons/ai';



const Tasks: React.FC<{tasks: Task[]; onRemoveTask: (id: string) => void}> = (props) => {
    
    
    return (
        <Fragment>
        
           {props.tasks.map((task) => (
           <div key={task.id} 
            className={classes.task_row} >
            <p>{task.text}</p>
            <AiOutlineClose onClick={props.onRemoveTask.bind(null, task.id)} className={classes.icon}/>
           </div>))} 
        

        
        </Fragment>
    )
}

export default Tasks 

