"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = kebabCase;
function kebabCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
}
