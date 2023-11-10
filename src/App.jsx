import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Signup } from './Components/Pages/Signup'
import { Login } from './Components/Pages/Login'
import { Register } from './Components/Pages/Register'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App
