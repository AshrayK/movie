import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import Navbar from './Components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext.jsx'
import './css/App.css'
function App() {
  return(
  <MovieProvider>
    <Navbar/>
    <main className='main_content'>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "favourites" element = {<Favourites/>}/>
    </Routes>
    </main>
  </MovieProvider>)
}

export default App
