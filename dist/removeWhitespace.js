"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWhitespace = removeWhitespace;
function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
