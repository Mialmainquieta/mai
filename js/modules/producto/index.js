// ======================================
// MAI Framework
// Módulo Producto
// Transferencia
// Versión 0.1.0
// ======================================

MAI.modules.producto = {

    init() {

        this.transferencia();

    },

    transferencia() {

        const box = document.querySelector(".product-vip__show-payment-offers-discount");

        if (!box) return;

        const descuento = parseFloat(box.dataset.discount);

        const finalPriceElement = box.querySelector(".final-price");

        if (!finalPriceElement) return;

        const textoPrecio = finalPriceElement.textContent.trim();

        const precioFinal = parseFloat(
            textoPrecio
                .replace(/\$/g, "")
                .replace(/\./g, "")
                .replace(",", ".")
        );

        if (isNaN(precioFinal)) return;

        const precioLista = precioFinal / (1 - (descuento / 100));

        const ahorro = precioLista - precioFinal;

        const formato = valor =>
            valor.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 2
            });

        box.innerHTML = "";

        //--------------------------------------------------
        // Título
        //--------------------------------------------------

        const titulo = document.createElement("div");
        titulo.className = "mai-transfer-title";

        titulo.innerHTML = `
            Ahorrá un <strong>${descuento}%</strong> pagando con
            <strong>transferencia o efectivo</strong>
        `;

        //--------------------------------------------------

        const hr1 = document.createElement("div");
        hr1.className = "mai-divider";

        //--------------------------------------------------

        const lblFinal = document.createElement("div");
        lblFinal.className = "mai-final-label";
        lblFinal.textContent = "Precio Final";

        //--------------------------------------------------

        const precio = document.createElement("div");
        precio.className = "mai-final-price";
        precio.textContent = formato(precioFinal);

        //--------------------------------------------------

        const hr2 = document.createElement("div");
        hr2.className = "mai-divider";

        //--------------------------------------------------

        const lblAhorro = document.createElement("div");
        lblAhorro.className = "mai-saving-label";
        lblAhorro.textContent = "Tu ahorro es de";

        //--------------------------------------------------

        const ahorroFinal = document.createElement("div");
        ahorroFinal.className = "mai-saving-price";
        ahorroFinal.textContent = formato(ahorro);

        //--------------------------------------------------

        box.appendChild(titulo);
        box.appendChild(hr1);
        box.appendChild(lblFinal);
        box.appendChild(precio);
        box.appendChild(hr2);
        box.appendChild(lblAhorro);
        box.appendChild(ahorroFinal);

    }

};