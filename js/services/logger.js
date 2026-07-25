// ======================================
// MAI Framework
// Logger Service
// Versión 0.1.0
// ======================================

MAI.logger = {

    info(message) {
        console.log(`🟢 [MAI] ${message}`);
    },

    warn(message) {
        console.warn(`🟡 [MAI] ${message}`);
    },

    error(message) {
        console.error(`🔴 [MAI] ${message}`);
    },

    debug(message) {
        console.log(`🔵 [MAI DEBUG] ${message}`);
    }

};