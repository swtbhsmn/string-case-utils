"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = titleCase;
const capitalize_1 = require("./capitalize");
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => (0, capitalize_1.capitalize)(word))
        .join(' ');
}
