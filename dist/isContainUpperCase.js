"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContainUpperCase = isContainUpperCase;
function isContainUpperCase(str) {
    return (str === null || str === void 0 ? void 0 : str.match(/^[A-Z]/)) ? true : false;
}
