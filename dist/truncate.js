"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = truncate;
function truncate(str, length) {
    return str.length > length ? str.slice(0, length) + '...' : str;
}
