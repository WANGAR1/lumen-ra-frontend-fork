import { NavLink } from "react-router-dom"
import routes from "../../utils/routes"

const Navigation = ()=> {
    return (
<nav className="nav-links">
    <NavLink to = {routes.Home}>Home</NavLink>
    <NavLink to = {routes.About}>About</NavLink>
    <NavLink to = {routes.Modules}>Modules</NavLink>
    <NavLink to = {routes.Community}>Community</NavLink>
    <NavLink to = {routes.Signup}>Signup</NavLink>
</nav>
    )
}

export default Navigation