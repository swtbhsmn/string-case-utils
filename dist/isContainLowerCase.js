"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContainLowerCase = isContainLowerCase;
function isContainLowerCase(str) {
    return (str === null || str === void 0 ? void 0 : str.match(/^[a-z]/)) ? true : false;
}
