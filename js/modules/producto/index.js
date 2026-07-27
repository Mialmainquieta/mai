// ======================================
// MAI Framework
// Módulo Producto
// Tarjeta Transferencia
// Versión 0.4.0
// ======================================

MAI.modules.producto = {

    init() {

        this.transferencia();

    },

    transferencia() {

        const box = document.querySelector(".product-vip__show-payment-offers-discount");

        if (!box) return;

        if (box.querySelector(".mai-transfer-card")) return;

        const descuento = this.#obtenerDescuento(box);

        if (descuento <= 0) return;

        const precioFinal = this.#obtenerPrecioFinal();

        if (isNaN(precioFinal) || precioFinal <= 0) return;

        const precioLista = precioFinal / (1 - (descuento / 100));
        const ahorro = precioLista - precioFinal;

        const card = this.#crearTarjeta({
            descuento,
            precioFinal,
            ahorro
        });

        box.insertAdjacentElement("afterend", card);

    },

    #obtenerDescuento(box) {

        return Number(box.dataset.discount || 0);

    },

    #obtenerPrecioFinal() {

        const priceElement = document.querySelector(".product-vip__price-value");

        if (!priceElement) return NaN;

        return parseFloat(
            priceElement.textContent
                .replace(/\$/g, "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
        );

    },

    #crearTarjeta({ descuento, precioFinal, ahorro }) {

        const card = document.createElement("div");

        card.className = "mai-transfer-card";

        card.innerHTML = `
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
                ${this.#formatearDinero(precioFinal)}
            </div>

            <div class="mai-separator"></div>

            <div class="mai-label">
                Hoy ahorrás
            </div>

            <div class="mai-saving">
                ${this.#formatearDinero(ahorro)}
            </div>
        `;

        return card;

    },

    #formatearDinero(valor) {

        return valor.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2
        });

    }

};