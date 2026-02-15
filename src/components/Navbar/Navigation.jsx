import { NavLink } from "react-router-dom"
import routes from "../../utils/routes"

const Navigation = ()=> {
    return (
<nav className="nav-links">
    <NavLink to = {routes.Home}>Home</NavLink>
    <NavLink to = {routes.About}>About</NavLink>
    <NavLink to = {routes.Progress}>Progress</NavLink>
    <NavLink to = {routes.Toolkit}>Toolkit</NavLink>
</nav>
    )
}

export default Navigation