import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-info d-flex justify-content-start p-3">
            <h3 className="text-dark">Google Books</h3>
            <Link to="/search"><h4 className="ml-5 p-3 text-light nav">Search</h4></Link>
            <Link to="/saved"><h4 className="p-3 text-light nav">Saved</h4></Link>
        </nav>
    )
}

export default Navbar;