import React, { useState } from "react";


function App() {
  const storageTasks = JSON.parse(localStorage.getItem('task'))
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(storageTasks ?? [])
  const handleSubmit = () => {
    setTasks(prev => {
      const newTasks = [...prev, task]
      const jsonTasks = JSON.stringify(newTasks)
      localStorage.setItem('task', jsonTasks)
      return newTasks
    })

    setTask('')
  }
  console.log(task)
  return (
    <div className="App">
      <input style={{ margin: 20 }}
        value={task}
        onChange={e => { setTask(e.target.value) }}
      />

      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
