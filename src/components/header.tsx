import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <nav className="navbar">
                <div className="titulo">
                    <h1>Project <span className="IDX-txt-color">IDX</span></h1>
                </div>
                <div className="contenedor-lista">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/pagina-oficial">Pagina Oficial</Link>
                        <Link to="/about">About</Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;