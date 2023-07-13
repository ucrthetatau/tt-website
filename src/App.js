import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Members from './components/Members'
import About from './components/About'
import Rush from './components/Rush'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
          <Route path="/rush" element={<Rush />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
