{/* =================Navigation and Routing================== */}
import { NavLink } from "react-router-dom";
import "./Navigation.css"
import Button from "../Buttons/Button";
import routes from "../../utils/routes";

const Navigation = ()=> {
    return (
<nav className="navbar">
  <div className="container">
  <div className=" logo"><span>LUMEN-RA</span></div>

    <ul className="nav-links">
      <li><NavLink to = {routes.Home} className={({ isActive }) => 
        (isActive ? "active-link" : "")}>Home</NavLink></li>

      <li><NavLink to = {routes.About} className={({ isActive }) => 
        (isActive ? "active-link" : "")}>About</NavLink></li>

      <li><NavLink to = {routes.Progress} className={({ isActive }) => 
        (isActive ? "active-link" : "")}>Progress</NavLink></li>
        
      <li><NavLink to = {routes.Toolkit} className={({ isActive }) => 
        (isActive ? "active-link" : "")}>Toolkit</NavLink></li>
     </ul>
     <div>
     <NavLink to="/Login">
      <Button label="Login" variant="secondary" />
     </NavLink>

     <NavLink to="/AIChatbot">
      <Button label="Let's Chat" variant="primary" />
     </NavLink>

   </div> 
   </div>
</nav>
)
};

export default Navigation;