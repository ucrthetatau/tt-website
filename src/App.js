import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {
  return (
    <div>
      <Navbar/> 
      <main> 
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </main>


    </div>
  );
}

export default App;
