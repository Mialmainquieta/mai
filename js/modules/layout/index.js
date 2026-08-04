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

        <div class="mai-footer-brand">

            <div class="mai-footer-logo">

                Mi Alma Inquieta

            </div>

            <p class="mai-footer-claim">

                Calidez y calidad cerca tuyo.

            </p>

            <p class="mai-footer-description">

            Diseño artesanal · Deco · Textiles · Cestería

            </p>

            <div class="mai-footer-divider"></div>

        </div>

    </div>

    `;

}

};