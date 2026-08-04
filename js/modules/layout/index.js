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

                <h2 class="mai-footer-title">
                    Mi Alma Inquieta
                </h2>

                <p class="mai-footer-claim">
                    Calidez y calidad cerca tuyo.
                </p>

                <p class="mai-footer-description">
                    Diseño artesanal · Deco · Textiles · Cestería
                </p>

            </div>

            <div class="mai-footer-column">

                <h3>Comprá</h3>

            </div>

            <div class="mai-footer-column">

                <h3>Ayuda</h3>

            </div>

            <div class="mai-footer-column">

                <h3>Seguinos</h3>

            </div>

        </div>

    </div>

    `;

}

};