import { useState } from 'react'
import LikeCounter from './redux/LikeCounter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LikeCounter/>
    </>
  )
}

export default App
