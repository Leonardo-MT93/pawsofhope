import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <Home/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
