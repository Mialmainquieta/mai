// ======================================
// MAI Framework
// Módulo Producto
// Tarjeta Transferencia
// Versión 0.3.1
// ======================================

MAI.modules.producto = {

    observer: null,

    init() {

        this.transferencia();

        this.observarPrecio();

    },

    observarPrecio() {

    const precio = document.querySelector(".product-vip__price");

    if (!precio) return;

    if (this.observer) {

        this.observer.disconnect();

    }

    this.observer = new MutationObserver(() => {

        this.transferencia();

    });

    this.observer.observe(precio, {

        childList: true,

        characterData: true,

        subtree: true

    });

},

    transferencia() {

        const box = document.querySelector(".product-vip__show-payment-offers-discount");

        if (!box) return;

        const descuento = Number(box.dataset.discount);

        if (isNaN(descuento) || descuento <= 0) return;

        const finalPrice = document.querySelector(
            ".product-vip__price-value"
        );

        if (!finalPrice) return;

        // Obtener únicamente el último precio mostrado
        // (ignorando el precio tachado)

        // Obtener únicamente el texto visible del precio final

       const textoPrecio = finalPrice.childNodes[
            finalPrice.childNodes.length - 1
        ].nodeValue.trim();

        const precioFinal = parseFloat(

            textoPrecio
                .replace(/\$/g, "")
                .replace(/\./g, "")
                .replace(",", ".")

        );

        if (isNaN(precioFinal)) return;

        // Precio publicado por Empretienda
        const precioLista = precioFinal;

        // Aplicar descuento por transferencia
        const precioTransferencia =
            precioLista * (1 - (descuento / 100));

        // Ahorro real
        const ahorro =
            precioLista - precioTransferencia;

        const dinero = (valor) =>

            valor.toLocaleString("es-AR", {

                style: "currency",

                currency: "ARS",

                minimumFractionDigits: 2

            });

        box.innerHTML = `

            <div class="mai-transfer-card">

                <div class="mai-transfer-header">

                    <div class="mai-transfer-title">

                        Ahorrá un <strong>${descuento}%</strong>

                    </div>

                    <div class="mai-transfer-subtitle">

                        pagando con transferencia bancaria o efectivo

                    </div>

                </div>

                <div class="mai-separator"></div>

                <div class="mai-label">

                    Precio Final

                </div>

                <div class="mai-price">

                    ${dinero(precioTransferencia)}

                </div>

                <div class="mai-separator"></div>

                <div class="mai-label">

                    Hoy ahorrás

                </div>

                <div class="mai-saving">

                    ${dinero(ahorro)}

                </div>

            </div>

        `;

    }

};