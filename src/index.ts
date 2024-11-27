type States = Record<string, string[]>;

// Import the data and assert its type
import rawData from './data.json';
const data: States = rawData;

/**
 * Normalize input by converting to lowercase and trimming whitespace.
 */
function normalize(input: string): string {
    return input.toLowerCase().trim();
}

// Aliases for states
const stateAliases: Record<string, string> = {
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
export function getStates(): string[] {
    return Object.keys(data);
}

/**
 * Get LGAs for a specific state (case-insensitive).
 */
export function getLgas(state: string): string[] {
    const normalizedState = normalize(state);

    // Check if the input matches an alias
    const resolvedState = stateAliases[normalizedState] || state;

    // Find the state in the data
    const matchingState = Object.keys(data).find(
        (key) => normalize(key) === normalize(resolvedState)
    );

    if (!matchingState) {
        throw new Error(`State "${state}" not found.`);
    }

    return data[matchingState];
}
