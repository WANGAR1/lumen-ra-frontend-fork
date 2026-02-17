
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Toolkit from "./pages/Toolkit/Toolkit"
import Progress from "./pages/Progress/Progress"
import Navigation from "./components/Navbar/Navigation"
import Footer from "./components/Footer/Footer"
import routes from './utils/routes'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
   <div className='App'>
   
    <Navigation/>
      <Routes>
        <Route path = {routes.Home} element = {<Home/>}></Route>
        <Route path = {routes.About} element = {<About/>}></Route>
        <Route path = {routes.Progress} element = {<Progress/>}></Route>
        <Route path = {routes.Toolkit} element = {<Toolkit/>}></Route>
        <Route path = {routes.Signup} element = {<Signup/>}></Route>
        <Route path = {routes.Login} element = {<Login/>}></Route>
      </Routes>
    <Footer/>
  
   </div>
   </>
  )
}

export default App
