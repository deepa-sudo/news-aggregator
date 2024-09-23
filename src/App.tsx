import { useState } from 'react'
import './App.css'
import Layout from './components/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            The count is {count}
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
          This is a test package
        </p>
      </Layout>
    </>
  )
}

export default App
