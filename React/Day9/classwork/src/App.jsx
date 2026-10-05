import React from 'react'

const App = () => {

  let a =10

  const handleClick = () => {
    a++
    console.log(a)
  }

  return (
    <div>
      <h1>{a}</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default App