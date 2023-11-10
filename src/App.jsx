import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  )
}

export default App
