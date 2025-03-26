import styles from './App.module.css'
import React from "react"
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Rush from './pages/Rush'
import Footer from './components/Footer'
import Brothers from './pages/Brothers'

function App() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.header}>
          <Navbar />
        </div>
        <div className={styles.bodyWrapper}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="rush" element={<Rush />} />
            <Route path="brothers" element={<Brothers />} />
          </Routes>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App