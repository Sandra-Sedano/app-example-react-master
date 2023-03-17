import './App.css'
import { Gallery } from './components/Gallery'
import { NavBarMenu } from './components/NavBarMenu'
import { Home } from './pages/Home'
import { StateExample } from './pages/StateExample'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Agenda } from './components/Agenda'

 
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/Agenda' element={ <Agenda/>} />
        </Routes>
        <NavBarMenu />
      </BrowserRouter>

    </div>
  )
}

export default App
