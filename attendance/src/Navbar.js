import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The University of Professional Sciences </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white", backgroundColor: 'blue', borderRadius:'8px'
                }}>Log in</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;