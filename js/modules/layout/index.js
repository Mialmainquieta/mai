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
            <h2>TEST</h2>
        </div>
    `;

}

};