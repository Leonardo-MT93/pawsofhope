import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Home/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
