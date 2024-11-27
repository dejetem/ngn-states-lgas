"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStates = getStates;
exports.getLgas = getLgas;
// Import the data and assert its type
const data_json_1 = __importDefault(require("./data.json"));
const data = data_json_1.default;
/**
 * Normalize input by converting to lowercase and trimming whitespace.
 */
function normalize(input) {
    return input.toLowerCase().trim();
}
// Aliases for states
const stateAliases = {
    "fct": "Federal Capital Territory",
    "f.c.t": "Federal Capital Territory",
    "abuja": "Federal Capital Territory",
    "f c t": "Federal Capital Territory",
    "Federal Capital Territory": "Federal Capital Territory",
    "federal capital territory": "Federal Capital Territory",
    "federalcapitalterritory": "Federal Capital Territory"
};
/**
 * Get all states (keys from the data).
 */
function getStates() {
    return Object.keys(data);
}
/**
 * Get LGAs for a specific state (case-insensitive).
 */
function getLgas(state) {
    const normalizedState = normalize(state);
    // Check if the input matches an alias
    const resolvedState = stateAliases[normalizedState] || state;
    // Find the state in the data
    const matchingState = Object.keys(data).find((key) => normalize(key) === normalize(resolvedState));
    if (!matchingState) {
        throw new Error(`State "${state}" not found.`);
    }
    return data[matchingState];
}
