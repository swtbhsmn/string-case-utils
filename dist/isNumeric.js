"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = isNumeric;
function isNumeric(str) {
    return /^[0-9]+$/.test(str);
}
