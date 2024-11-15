import React, { useState } from 'react'



export default function App() {
  const [input, setInput] = useState("")
  const [todoListValue, setToDoListValue] = useState([
  ])

  function changeInputValue(event) {
    setInput(event.target.value)
  }

  function addList() {
    todoListValue.push({
      id: todoListValue.length,
      name: input
    })
    setInput("")
  }

  function deleteList(id) {
    console.log(id)
    setToDoListValue(prev => prev = todoListValue.filter(item => item.id !== id))
  }


  return (
    <div className='app'>
      <div className='app-form'>
        <input type="text" onChange={(event) => changeInputValue(event)} />
        <button onClick={addList}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className='app-content'>
        {
          todoListValue.map((item) => (
            <div className='app-content__list' key={item.id}>
              <p>{item.name}</p>
              <div className='content-list__buttons'>
                <button onClick={() => deleteList(item.id)}>
                  <i className="fa-solid fa-delete-left"></i>
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
