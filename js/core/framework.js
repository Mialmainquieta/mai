// ======================================
// MAI Framework
// Framework Core
// Versión 0.1.0
// ======================================

MAI.init = function () {

    // Verificar dependencias básicas
    if (!MAI.logger || !MAI.config) {
        console.error("MAI Framework: No se pudieron cargar los servicios básicos.");
        return;
    }

    // Información del Framework
    MAI.logger.info(`${MAI.config.framework.name} v${MAI.config.framework.version}`);

    // Verificación de servicios
    MAI.logger.info("Logger ............. OK");
    MAI.logger.info("Config ............. OK");

    // Framework listo
    MAI.logger.info("Framework iniciado correctamente.");

};