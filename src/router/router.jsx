import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import Header from "../components/header";
import About from "../pages/about-section";
import Contacto from "../pages/Contacto-section";

function Index() {
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pagina-oficial" element={<Contacto/>} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    );
}

export default Index;
