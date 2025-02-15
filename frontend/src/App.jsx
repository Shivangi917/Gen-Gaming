import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Homepage from '../Components/Homepage'
import About from '../Components/About';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Homepage />} path='/'></Route>
        <Route element={<About />} path='/about'></Route>
      </Routes>
    </Router>
  )
}

export default App
