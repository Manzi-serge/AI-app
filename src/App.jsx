import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
