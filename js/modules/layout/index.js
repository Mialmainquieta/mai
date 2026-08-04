// ======================================
//
// MAI Framework
// Módulo Layout
// Versión 1.0.0
//
// ======================================

MAI.modules.layout = {

    init() {

        this.insertarFooterHeader();

    },

    insertarFooterHeader() {

        const footerTop = document.querySelector(".footer__top");

        if (!footerTop) return;

        if (document.querySelector(".mai-footer-header")) return;

        footerTop.insertAdjacentHTML(
            "afterbegin",
            this.renderFooterHeader()
        );

    },

    renderFooterHeader() {

    return `

    <div class="mai-footer-header">

        <div class="mai-footer-grid">

            <div class="mai-footer-brand">

                <a href="/" class="mai-footer-logo-link">

                    <img
                        src="https://mialmainquieta.github.io/mai/Img/logo-footer.png"
                        alt="Mi Alma Inquieta"
                        class="mai-footer-logo">

                </a>

                <p class="mai-footer-claim">
                    Calidez y calidad cerca tuyo.
                </p>

                <p class="mai-footer-description">
                    Diseño artesanal<br>
                    Deco • Textiles • Cestería
                </p>

            </div>

            <div class="mai-footer-column">

                <h3>COMPRÁ</h3>

                <ul>

                    <li><a href="https://www.mialmainquieta.com.ar/">Tienda</a></li>
                    <li><a href="https://www.mialmainquieta.com.ar/cesteria">Cestería</a></li>
                    <li><a href="https://www.mialmainquieta.com.ar/textiles">Textiles</a></li>
                    <li><a href="https://www.mialmainquieta.com.ar/accesorios">Detalles Deco</a></li>
                    <li><a href="https://www.mialmainquieta.com.ar/mai-outfit">MAI Outfit</a></li>
                    <li><a href="https://www.mialmainquieta.com.ar/combos-y-ofertas">Combos y ofertas</a></li>

                </ul>

            </div>

            <div class="mai-footer-column">

                <h3>AYUDA</h3>

                <ul>

                    <li><a href="#">Cómo comprar</a></li>
                    <li><a href="https://www.mialmainquieta.com.ar/cambios-y-devoluciones">Cambios y devoluciones</a></li>
                    <li><a href="#">Preguntas frecuentes</a></li>

                </ul>

            </div>

        </div>

    </div>

    `;

}

};