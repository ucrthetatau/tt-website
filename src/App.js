import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Members from './components/Members'
import About from './components/About'
import Rush from './components/Rush'
import Officers from './components/Officers'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div class="flex-wrapper">
        <Navbar />
        <div class="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/about" element={<About />} />
            <Route path="/rush" element={<Rush />} />
            <Route path="/officers" element={<Officers />} />
          </Routes>
        </div>
        <div class="footer--pin">
          <Footer />
        </div>
      </div>
        
    </>
  )
}

export default App
