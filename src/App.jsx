
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Toolkit from "./pages/Toolkit/Toolkit"
import Progress from "./pages/Progress/Progress"
import Navigation from "./components/Navbar/Navigation"
import routes from './utils/routes'

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
      </Routes>
   </div>
   </>
  )
}

export default App
