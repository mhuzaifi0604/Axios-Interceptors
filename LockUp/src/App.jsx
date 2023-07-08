import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/dashboard';
import File_Manager from './Components/filemanager';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/file-manager' element={<File_Manager/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
