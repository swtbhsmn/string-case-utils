"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpperCase = isUpperCase;
function isUpperCase(str) {
    return (str === null || str === void 0 ? void 0 : str.match(/^[A-Z]/)) ? true : false;
}
