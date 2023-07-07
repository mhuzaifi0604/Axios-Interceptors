import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/dashboard';
import Login from './Components/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
