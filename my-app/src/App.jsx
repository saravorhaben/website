
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Resume from './pages/resume';
import Technical from './pages/technical';
import Home from './pages/home';
import Contact from './pages/contact';

function App() {
  return(<>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qualifications" element={<Resume />} />
        <Route path="/portfolio" element={<Technical/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
