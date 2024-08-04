import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-items">An item</li>
          <li className="list-group-items">A conclusion</li>
          <li className="list-group items">A body</li>
        </ul>
      </div>
    </>
  )
}

export default App
