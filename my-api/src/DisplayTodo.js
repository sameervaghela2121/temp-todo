import React, { useState } from 'react'
import axios from 'axios'

const DisplayTodo = () => {
    const [fdata, setFdata] = useState([]);
    console.log(fdata)
    
    axios.get("http://localhost:3006/task")
    .then(res=>{
        console.log("display: ",res.data)
        // setFdata(res.data)
    })

    return (
        <div>
            {
                

            }
            
        </div>
    )
}

export default DisplayTodo
