import React, { useState } from 'react'

const AddTodo = ({fetchedapi}) => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [completed, setCompleted] = useState(true);
    const onbtnClicked = (e) => {
        // e.preventDefault();
        
        if(!name || !status || !completed){
            alert('Please Enter Task!')
        }
        else{
            fetchedapi(name,status,completed)
        }
        

    }
    return (
        <div>
            <form onSubmit={onbtnClicked}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label>status</label>
                <input type="text" value={status} onChange={(e)=>{setStatus(e.target.value)}}/>
                <label>Completed</label>
                <input type="checkbox" value={completed} onChange={(e)=>{setCompleted(e.target.value)}} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default AddTodo
