import React from "react";

function Onclick_button() {
    window.open('https://idx.dev/', '_blank');
}

function Contacto() {
    return(
        <>
            <main>
                <div className="contendor-contenido-main">
                    <div className="contenedor-posts">
                        <div className="contenedor-contenido-post">
                            <div className="post1-contacto">
                                <section className="subtitulo-post1-contacto">
                                    <h2>Visita Nuestra Página Oficial</h2>
                                </section>
                                <p>¡Descubre <strong>"Project IDX"</strong>, el editor popular que está revolucionando la forma en que los desarrolladores crean! Visítanos en nuestra página oficial para conocer todas las funcionalidades, tutoriales, y las últimas actualizaciones.</p>
                                <p>No te pierdas la oportunidad de mejorar tu flujo de trabajo con la herramienta más innovadora del mercado.</p>
                                <section className="mensaje_comunidad">
                                    <h2>🎉¡Únete a la comunidad de Project IDX hoy mismo!🎉</h2>
                                </section>
                            </div>
                            <div className="post2-contacto-images">
                                <div className="img">
                                    <section className="img-left">
                                        <img src="https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/image6_dbjg6nV.original.png" alt=""/>
                                        <img src="https://static.wixstatic.com/media/10a674_3fde0ee80ca643e0be7ee761df17e9e8~mv2.png/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/10a674_3fde0ee80ca643e0be7ee761df17e9e8~mv2.png" alt="" />
                                    </section>
                                    <section className="img-right">
                                        <img src="https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/73.2e16d0ba.fill-1200x600.png" alt="" />
                                        <img src="https://s3.amazonaws.com/media.mediapost.com/dam/cropped/2023/08/08/screenshot-2023-08-08-at-24419-pm_adg5Crg.jpg" alt="" />
                                    </section>
                                </div>
                                <div className="button-entry-pag-oficial">
                                    <button type="button" onClick={Onclick_button}className="button-entry-pag-oficial"><em>🎉¡Accede a la Página Oficial!🎉</em></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contacto;