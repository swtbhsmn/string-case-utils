"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countOccurrences = countOccurrences;
function countOccurrences(str, substr) {
    return (str.match(new RegExp(substr, 'g')) || []).length;
}
