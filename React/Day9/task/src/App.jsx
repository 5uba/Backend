import React from 'react'
const App = () => {

  // 1. Name Change
  const [name, setName] = React.useState("Ravi")
  const changeName = () => {
    setName("Kumar")
  }


  // 2. Counter
  const [number, setNumber] = React.useState(0)
  const increase = () => {
    setNumber(number + 1)
  }
  const decrease = () => {
    setNumber(number - 1)
  }
  const reset = () => {
    setNumber(0)
  }


  // 3. Show / Hide
  const [show, setShow] = React.useState(false)
  const showHide = () => {
    setShow(!show)
  }


  // 4. Input Name
  const [inputName, setInputName] = React.useState("")
  const handleChange = (event) => {
    setInputName(event.target.value)
  }


  // 5. Like Button
  const [likes, setLikes] = React.useState(0)
  const handleLike = () => {
    setLikes(likes + 1)
  }
  return (
    <div>
      {/* 1. Name Change */}
      <h2>Name Change</h2>
      <h3>{name}</h3>
      <button onClick={changeName}>
        Change Name
      </button>

      {/* 2. Counter */}
      <h2>Counter</h2>
      <h3>{number}</h3>
      <button onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>
        Decrease
      </button>
      <button onClick={reset}>
        Reset
      </button>


      {/* 3. Show / Hide */}
      <h2>Show / Hide</h2>
      <button onClick={showHide}>
        Show / Hide
      </button>
      {show && <h3>Welcome to React</h3>}


      {/* 4. Input Name */}
      <h2>Input Name</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <h3>{inputName}</h3>


      {/* 5. Like Button */}
      <h2>Like Button</h2>
      <h3>Likes: {likes}</h3>
      <button onClick={handleLike}>
        Like
      </button>

    </div>
  )
}

export default App