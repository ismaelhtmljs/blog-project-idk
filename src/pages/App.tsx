import React from "react";
import Footer from "../components/footer";

function App(){
    return(
        <>
        <main>
            <div className="contenedor-main">
                <div className="subtitulo">
                    <h1></h1>
                </div>
            </div>
            <div className="contenedor-contenido">
                {/* primer post del blog */}
                <div className="post">
                    <section className="subtitulo-post1">
                        <h2>Que es <a href="https://idx.dev/" target="_blank" rel="noopener noreferrer" className="link_idx_pag_oficial">
                        Project IDX</a></h2>
                    </section>
                    <p>Project IDX es una ambiciosa iniciativa de Google que busca redefinir el desarrollo web mediante una plataforma en la nube, impulsada por la inteligencia artificial, que facilita la creación y el despliegue de aplicaciones web y multiplataforma.</p>
                    <h2><strong>Más que un simple IDE en la nube</strong></h2>
                    <p>IDX va más allá de ser un simple entorno de desarrollo integrado (IDE) accesible desde el navegador. Si bien ofrece las ventajas de un IDE tradicional, como la edición de código, la depuración y la gestión de proyectos, su enfoque se centra en proporcionar una experiencia de desarrollo integral, integrada y potenciada por la IA.</p>
                </div>
                {/* segundo post del blog */}
                <div className="post2">
                    <section className="subtitulo-post2">
                        <h2>Project IDX: La Revolución de la Gestión de Proyectos en la Era Digital</h2>
                    </section>
                    <p>La tecnología ha transformado todos los aspectos de nuestra vida diaria, desde cómo trabajamos hasta cómo nos comunicamos. En este contexto, la gestión de proyectos ha experimentado una evolución significativa. En lugar de los métodos tradicionales de papel y lápiz, las herramientas digitales han facilitado la organización, monitoreo y ejecución de proyectos de manera eficiente y efectiva. Project IDX es una de las innovaciones más recientes en este campo, destinada a transformar cómo las empresas y equipos gestionan sus proyectos.</p>
                </div>
                {/* tercer post del blog */}
                <div className="post3">
                    <section className="subtitulo-post3">
                        <h2>Características Clave de Project IDX</h2>
                    </section>
                    <section className="lista-de-caracteristicas">
                        <ul>
                            <li><strong>Interfaz Intuitiva:</strong> Una de las características más atractivas de <strong>Project IDX</strong> es su interfaz fácil de usar. Diseñada para adaptarse tanto a usuarios novatos como experimentados, permite navegar por las funciones de la plataforma de manera fluida. Desde la asignación de tareas hasta la visualización de cronogramas, todo está a un clic de distancia.</li>
                            <li><strong>Gestión de Equipos:</strong>Con la posibilidad de crear equipos, asignar roles y tareas específicas, y visualizar el progreso en tiempo real, <strong>Project IDX</strong> se convierte en el centro de operaciones de cualquier proyecto. Los miembros del equipo pueden colaborar de manera eficiente y mantenerse actualizados sobre los cambios o tareas pendientes.</li>
                            <li><strong>Análisis y Reportes:</strong>El análisis de datos es crucial para optimizar cualquier proceso de trabajo. <strong>Project IDX</strong> incluye herramientas avanzadas para monitorear el progreso del proyecto, identificar posibles riesgos y ofrecer informes detallados que permiten tomar decisiones informadas.</li>
                            <li><strong>Integraciones:</strong>La plataforma también se integra con otras herramientas populares, como Slack, Trello, Google Calendar y más, lo que facilita la incorporación de <strong>Project IDX</strong> en el flujo de trabajo existente.</li>
                        </ul>
                    </section>
                </div>
                {/* cuarto post del blog*/}
                <div className="post4">
                    <section className="subtitulo-post4">
                        <h2>Beneficios de Usar Project IDX</h2>
                    </section>
                    <p>Los beneficios de <strong>Project IDX</strong> van más allá de la simplicidad y la organización. Al adoptar esta plataforma, las empresas pueden mejorar la eficiencia de su equipo, reducir los errores, y obtener una visión clara del progreso de sus proyectos en tiempo real. Además, la flexibilidad que ofrece la herramienta permite adaptarse a proyectos de diversas industrias, desde el desarrollo de software hasta la gestión de campañas de marketing o construcción.</p>
                    <section className="lista-beneficios">
                        <ul>
                            <li><strong>Reducción de Errores y Desviaciones de Cronograma:</strong>
                            El uso de herramientas de gestión de proyectos como <strong>Project IDX</strong> reduce las posibilidades de error humano y mejora la precisión en el cumplimiento de los plazos, lo que es crucial para cualquier empresa.</li>
                            <li><strong>Mayor Colaboración y Transparencia: </strong>Al permitir una colaboración fluida entre los miembros del equipo, <strong>Project IDX</strong> aumenta la transparencia y la comunicación, lo que puede ayudar a resolver problemas de manera más rápida y eficaz.</li>
                            <li><strong>Ahorro de Tiempo:</strong>Automatizando tareas repetitivas y mejorando la visibilidad del proyecto, los equipos pueden centrarse en lo que realmente importa y trabajar de manera más eficiente, ahorrando tiempo y recursos.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
}

export default App;