import React from "react";

function About() {
    return(
        <>
            <main>
                <div className="contenedor-contenido-main-about">
                    <div className="contenedor-posts-about">
                        <div className="contenedor-contenido-post-about">
                            <div className="post1-about">
                                <section className="subtitulo-post1-about">
                                    <h2>Sobre <em>Project IDX</em></h2>
                                </section>
                                <p>Project IDX es un editor de código abierto que permite a los desarrolladores crear contenido de alta calidad y alta velocidad. Construido para simplificar el proceso de creación y distribución de contenido, Project IDX te permite crear, editar, y publicar contenido en la web de manera rápida y fácil.</p>
                            </div>
                            {/* segundo sector */}
                            <div className="post2-about">
                                <section className="subtitulo-post2-about">
                                    <h2>Project IDX: Una Herramienta para el Desarrollo Web</h2>
                                </section>
                                <p>Project IDX se basa en la inteligencia artificial (IA) para proporcionar un entorno de desarrollo integrado (IDE) en la nube que simplifica el proceso de creación y distribución de contenido. Con esta plataforma, los desarrolladores pueden editar, probar y publicar contenido en la web de manera rápida y fácil, lo que les permite optimizar su tiempo de trabajo y reducir la fricción en el proceso de creación y distribución de contenido.</p>
                            </div>
                            {/* tercer sector */}
                            <div className="post3-about">
                                <div className="grid-contenedor">
                                    <section className="images-about">
                                        <img src="/src/images/start_project_idx.png" alt="" />
                                        <img src="/src/images/interface_project_idx.png" alt="" />
                                        <img src="/src/images/code_project_idx.png" alt="" />
                                    </section>
                                    <section className="txt-about">
                                        <p>Project IDX es una plataforma innovadora diseñada para revolucionar el desarrollo de aplicaciones web y contenido digital. Su enfoque principal es proporcionar a los desarrolladores una experiencia de codificación eficiente y colaborativa, con un conjunto de herramientas poderosas que facilitan cada etapa del proceso, desde la creación hasta la implementación. Al ser un editor de código abierto, Project IDX fomenta la participación activa de la comunidad, permitiendo a los usuarios personalizar y adaptar la plataforma a sus necesidades específicas.</p>
                                        <p>Con su interfaz intuitiva y su integración fluida con diversas tecnologías y marcos de trabajo, Project IDX busca agilizar el flujo de trabajo de los desarrolladores y diseñadores. Ya sea para proyectos pequeños o grandes, el editor permite un entorno de trabajo sin fricciones, reduciendo los tiempos de desarrollo y mejorando la calidad del código final. La compatibilidad con múltiples lenguajes de programación y herramientas de desarrollo populares es una de sus características destacadas, haciendo que sea accesible para una amplia gama de usuarios.</p>
                                        <p>Además, Project IDX facilita la colaboración en tiempo real, permitiendo que varios desarrolladores trabajen de manera conjunta en un proyecto, sin importar su ubicación geográfica. La integración de control de versiones y las opciones de despliegue automático contribuyen a un flujo de trabajo ágil y eficiente, asegurando que las aplicaciones se puedan probar y poner en producción rápidamente.</p>
                                        <p>La comunidad de Project IDX sigue creciendo constantemente, y la plataforma continúa evolucionando para satisfacer las demandas cambiantes del desarrollo web moderno. Su arquitectura abierta y flexible no solo permite la personalización, sino que también ofrece un ecosistema robusto de extensiones y complementos para ampliar sus capacidades.</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;