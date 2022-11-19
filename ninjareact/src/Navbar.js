const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Acostas12 Practice</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRaidus: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;