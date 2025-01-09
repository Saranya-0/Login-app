
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
   
    
     
    </>
  )
}

export default App
