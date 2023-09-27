import './App.css'
import React from "react"
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Members from './components/Members'
import About from './components/About'
import Rush from './components/Rush'
import Officers from './components/Officers'
import Footer from './components/Footer'
import Brothers from './components/Brothers'


function App() {
  return (
    <>
      <div class="flex-wrapper">
        <div class="header">
          <Navbar />
        </div>
        <div class="content-container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="rush" element={<Rush />} />
            <Route path="brothers" element={<Brothers />}>
              {/* <Route index element={<Members />} />
              <Route path="members" element={<Members />} />
              <Route path="officers" element={<Officers />} /> */}
            </Route>
          </Routes>
        </div>
        <div class="footer--pin">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;