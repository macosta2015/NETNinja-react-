import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Acostas12 Practice</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRaidus: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;