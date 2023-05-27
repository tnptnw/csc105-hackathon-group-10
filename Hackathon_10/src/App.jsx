import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login.jsx'
import RegisterUsers from './Pages/RegisterUsers.jsx'
import RegisterGuard from './Pages/RegisterGuard.jsx'
import RegisterEmployee from './Pages/RegisterEmployee.jsx' 
import Home from './Pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login></Login> */}
      {/* <RegisterUsers></RegisterUsers> */}
      {/* <RegisterGuard></RegisterGuard> */}
      <RegisterEmployee></RegisterEmployee>
      {/* <Home></Home> */}
    </>
  )
}

export default App
