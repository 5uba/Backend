// make the component -click the button till 5. after 5 it will added another 5 after again click again 
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(5)

  const handleClick = () => {
    if (count < number) {
      setCount(count + 1)
    } else {
      setNumber(number + 5)
      setCount(count + 1)
    }
  } 
  return (
    <div>
      <p>Count: {count}</p>
      <p>Number: {number}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App