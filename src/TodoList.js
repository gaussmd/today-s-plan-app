import React, { useState } from 'react'

function TodoList() {
  const [activity,setActivity] = useState('')
  const [listData,setListData] = useState([]);
  function addActivity () {
  //  setListData([...listData,activity])
  //  console.log(listData)
    setListData((listData)=> { 
    const updatedList = [...listData,activity]
    // console.log(updatedList)
    setActivity('');
    return updatedList
    })
}
function removeTodos (i) {
  const updataedListData = listData.filter((elem,id)=>{
    return i!==id
  })
  setListData(updataedListData);
}
function removeAll () {
  setListData([]);
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
    <h2>What To do !</h2>
    {listData!==[] && listData.map((data,i)=>{
      return(
        <div key={i}>
        <p className='list-item'> {data}</p>
        <button className='btn' onClick={()=>removeTodos(i)}>Remove</button>
        </div>
      )
    })}

<div className='new-btn'>
  {listData.length>=1 &&  <button onClick={removeAll}>Remove All</button>}
   
  </div>
  </div>

  </>
  )
}

export default TodoList
