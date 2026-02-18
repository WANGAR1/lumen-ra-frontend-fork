import { NavLink } from "react-router-dom"
import routes from "../../utils/routes"

const Navigation = ()=> {
    return (
<nav className="nav-links">
    <NavLink to = {routes.Home}>Home</NavLink>
    <NavLink to = {routes.About}>About</NavLink>
<<<<<<< HEAD
    <NavLink to = {routes.Modules}>Modules</NavLink>
    <NavLink to = {routes.Community}>Community</NavLink>
    <NavLink to = {routes.Signup}>Signup</NavLink>
=======
    <NavLink to = {routes.Progress}>Progress</NavLink>
    <NavLink to = {routes.Toolkit}>Toolkit</NavLink>
>>>>>>> 322f03083b0529fcc0e8b1e3a7dea1481884de17
</nav>
    )
}

export default Navigation