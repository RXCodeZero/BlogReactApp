import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useAuth } from "../hooks/useAuth"; 
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { logout } = useAuth(); 

    return (
    <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>Verb</div>
        <div className="nav-links">
        <Link to="/blogs">All Blogs</Link>
        <Link to="/blogs/create">Create</Link>
        <button onClick={logout}>Logout</button> 
        </div>
    </nav>
    );
}

export default Navbar;
