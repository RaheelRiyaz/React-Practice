import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './user/components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
