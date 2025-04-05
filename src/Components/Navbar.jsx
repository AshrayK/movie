import { Link } from "react-router-dom";        
import '../css/Navbar.css'
function Navbar(){
    return(<div className="navbar">
        <div className="navbar_brand">
        <Link to='/'>Movie Website</Link>
        </div>
        <div className="navbar_links">
        <Link to = '/' className  = "navbar_link">Home</Link> 
        <Link to = '/favourites' className = "navbar_link">Favourites</Link>
        </div>
    </div>)
}
export default Navbar