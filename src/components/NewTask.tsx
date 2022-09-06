import React, {useRef} from 'react';
import {AiOutlinePlus}  from 'react-icons/ai';
import classes from './NewTask.module.css';




const NewTask: React.FC<{onAddTask: (text: string) => void}>= (props) => {
    const taskTextInputRef = useRef<HTMLInputElement>(null)
    

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = taskTextInputRef.current!.value;
        if(enteredText?.trim().length === 0){
            return
        }
        taskTextInputRef.current!.value = ''

       props.onAddTask(enteredText)
            
          

        
    }
    return(
        <form onSubmit={submitHandler}>
            <div className={classes.form_input}>
                
                <input type='text' 
                id='text' 
                placeholder='Enter a task'
                ref={taskTextInputRef}/>
               <button > <AiOutlinePlus size={25} /></button>
            </div>

        </form>
    )
}

export default NewTask;