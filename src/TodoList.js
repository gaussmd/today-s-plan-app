import React, { useState } from 'react'

function TodoList() {
  const [activity,setActivity] = useState('')

  function addActivity () {

  }
  return (
  <>
  <div className='content'>
   <h1 className='header'>
    TODOLIST</h1>
    <input type='text' placeholder='Add What to do ?' value={activity}
    onChange={(e)=>setActivity(e.target.value)}
    />
    <button onClick={addActivity}>Add</button>
  </div>
  </>
  )
}

export default TodoList
