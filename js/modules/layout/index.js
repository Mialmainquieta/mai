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

            <!-- ==========================================
                            MARCA
            =========================================== -->

            <div class="mai-footer-brand">

                <img
                    src="https://mialmainquieta.github.io/mai/img/logo-footer.png"
                    alt="Mi Alma Inquieta"
                    class="mai-footer-logo">

                <p class="mai-footer-claim">

                    Calidez y calidad cerca tuyo.

                </p>

                <p class="mai-footer-description">

                    Diseño artesanal<br>
                    Deco • Textiles • Cestería

                </p>

            </div>

            <!-- ==========================================
                            COMPRÁ
            =========================================== -->

            <div class="mai-footer-column">

                <h3>COMPRÁ</h3>

                <ul>

                    <li><a href="/productos">Tienda</a></li>
                    <li><a href="/categoria/cesteria">Cestería</a></li>
                    <li><a href="/categoria/textiles">Textiles</a></li>
                    <li><a href="/categoria/detalles-deco">Detalles Deco</a></li>
                    <li><a href="/categoria/mai-outfit">MAI Outfit</a></li>

                </ul>

            </div>

            <!-- ==========================================
                            AYUDA
            =========================================== -->

            <div class="mai-footer-column">

                <h3>AYUDA</h3>

                <ul>

                    <li><a href="/como-comprar">Cómo comprar</a></li>
                    <li><a href="/cambios-y-devoluciones">Cambios y devoluciones</a></li>
                    <li><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li>

                </ul>

            </div>

            <!-- ==========================================
                            SEGUINOS
            =========================================== -->

            <div class="mai-footer-column">

                <h3>SEGUINOS</h3>

                <ul>

                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">WhatsApp</a></li>
                    <li><a href="#">Facebook</a></li>

                </ul>

            </div>

        </div>

    </div>

    `;

}

};