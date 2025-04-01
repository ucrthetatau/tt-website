import styles from './App.module.css'
import React, { useEffect } from "react"
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Rush from './pages/Rush'
import Footer from './components/Footer'
import Brothers from './pages/Brothers'

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
	}, [location]);

	return (
		<div className={styles.page}>
			<div className={styles.header}>
				<Navbar />
			</div>
			<div className={styles.body}>
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
	)
}

export default App