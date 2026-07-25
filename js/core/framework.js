// ======================================
// MAI Framework
// Framework Core
// Versión 0.1.0
// ======================================

MAI.init = function () {

    // Verificar dependencias
    if (!MAI.logger || !MAI.config) {
        console.error("No se pudieron cargar los servicios básicos.");
        return;
    }

    MAI.logger.info(`${MAI.config.framework.name} v${MAI.config.framework.version}`);

    MAI.logger.info("Logger ............. OK");
    MAI.logger.info("Config ............. OK");

    // ==========================
    // Inicializar módulos
    // ==========================

    if (MAI.modules.producto) {

        MAI.modules.producto.init();

    }

    MAI.logger.info("Framework iniciado correctamente.");

};