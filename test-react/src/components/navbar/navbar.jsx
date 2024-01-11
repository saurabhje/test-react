import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () =>{
    return(
        <div className="navbar">
            <Link to="/" className="logo">Logo</Link>
            <nav className='navLinks'>
                <Link to="/">Feed</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Navbar