import React from "react";

function Click_logo(){
    window.open('https://idx.dev/','bank_');
}

function Footer() {
    return(
        <>
            <footer>
                <div className="titulo-footer">
                    <h2>Transformando la Forma en que Trabajamos</h2>
                </div>
                <p style={{color:'rgb(211, 211, 211)'}}>Al adoptar Project IDX, las empresas pueden dar un paso hacia la transformación digital de sus procesos. Esta plataforma ayuda a reducir la fricción entre los equipos, fomenta una mejor comunicación y proporciona una visibilidad clara sobre el progreso de los proyectos. Además, permite que los equipos trabajen de manera más colaborativa, eliminando las barreras de comunicación y asegurando que todos estén alineados con los mismos objetivos.</p>
                <h2>🎉Bienvenidos A <em>Project IDX</em>🎉</h2>
                <img src="/logo.svg" alt="" onClick={Click_logo} className="logo"/>
                <p className="copy">©CopyRight by Ismaelxd74 | official License from 2024-2058</p>
            </footer>
        </>
    );
}

export default Footer;