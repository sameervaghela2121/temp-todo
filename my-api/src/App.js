import React from 'react';
import './App.css';
import api from './Api';
import AddTodo from './AddTodo';
import axios from 'axios';
import DisplayTodo from './DisplayTodo';

function App() {

  // const retrievedata = () => {
  //   const response = api.get("/task");
  //   response.then(res=>{
  //     console.log(res.data)
  //   })
  // }

  const fetchedapi = (name,status,completed) => {
    axios.post("http://localhost:3006/task", {name:name,status:status,completed:completed })    
  }

  axios.get("http://localhost:3006/task")
  .then(res=>console.log(res.data))
  

    
  
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <AddTodo fetchedapi={fetchedapi}/>
      <DisplayTodo/>
    </div>
  );
}

export default App;
