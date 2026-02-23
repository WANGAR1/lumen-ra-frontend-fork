
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Toolkit from "./pages/Toolkit/Toolkit"
import Progress from "./pages/Progress/Progress"
import Dashboard from "./pages/Dashboard/Dashboard"
import Quiz from "./pages/Quiz/QuizSection"
import PersonalityCheck from "./pages/PersonalityCheck/PersonalityCheck"
import Navigation from "./components/Navbar/Navigation"
import Footer from "./components/Footer/Footer"
import AIChatbot from './components/Navbar/AIChatbot'
import routes from './utils/routes'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Contacts from './pages/Contacts/contacts';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import OTPVerification from './pages/OTP Verification/OTPVerification';
import ResetPassword from './pages/Reset-Password/ResetPassword';


function App() {
  const toolkitData = [
    { id: 1, title: 'Pre-Assessment Completed', status: 'completed', description: 'Established your baseline knowledge' },
    { id: 2, title: 'Understanding GBV Module', status: 'completed', description: 'Learned fundamentals', score: 92, completedDate: 'Feb 15, 2026' },
    { id: 3, title: 'Trauma Awareness Module', status: 'completed', description: 'Care training', score: 88, completedDate: 'Feb 17, 2026' },
    { id: 4, title: 'Active Listening Skills', status: 'in-progress', description: 'Techniques' },
    { id: 5, title: 'Boundaries & Referrals', status: 'upcoming', description: 'Professional boundaries' },
    { id: 6, title: 'Self-Care for Allies', status: 'upcoming', description: 'Managing trauma' },
    { id: 7, title: 'Final Assessment', status: 'upcoming', description: 'Knowledge demo' },
    { id: 8, title: 'Certificate Earned', status: 'upcoming', description: 'Certification' },
  ];

  return (
    
   <div className='App'>
    <Navigation/>
      <Routes>
        <Route path = {routes.Home} element = {<Home/>}></Route>
        <Route path = {routes.About} element = {<About/>}></Route>
        <Route path={routes.Progress} element={<Progress toolkitModules={toolkitData} />} />
        <Route path = {routes.Toolkit} element = {<Toolkit/>}></Route>
        <Route path={routes.Dashboard} element={<Dashboard />} />
        <Route path={routes.Dashboard} element={<Quiz />} />
        <Route path={routes.Dashboard} element={<PersonalityCheck />} />
        <Route path = {routes.Signup} element = {<Signup/>}></Route>
        <Route path = {routes.Login} element = {<Login/>}></Route>
        <Route path = {routes.AIChatbot} element = {<AIChatbot/>}></Route>
        <Route path={routes.Contacts} element={<Contacts />} />
        <Route path={routes.ForgotPassword} element={<ForgotPassword />} />
        <Route path={routes.OTPVerification} element={<OTPVerification />} />
        <Route path={routes.ResetPassword} element={<ResetPassword />} />
        <Route path = {routes.PersonalityCheck} element = {<PersonalityCheck/>}></Route>
        

      </Routes>
      <Footer/>
   </div>
   
  )
}

export default App;