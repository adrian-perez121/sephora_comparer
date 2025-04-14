import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Button({text, onClickFunc}) {
    return <button className="bg-red-500" onClick={onClickFunc}>{text}</button>
}

function App() {
    const [count, setCount] = useState(0)
    const goToGithub = () => {window.location.href = "https://github.com/"}

  return (
    <>
      <div>
          <Button onClickFunc={goToGithub} text={"Click Me"}/>
      </div>
      <p className="read-the-docs text-amber-50">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
