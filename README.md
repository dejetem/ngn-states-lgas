# Nigeria States and LGAs Package

A simple JavaScript/TypeScript package that provides a list of all states in Nigeria, along with their respective Local Government Areas (LGAs). This package works for both JavaScript and TypeScript projects.

## Features

- Get a list of all Nigerian states.
- Retrieve the LGAs for a specific state.
- Case-insensitive querying (supports abbreviations and full names for the Federal Capital Territory).
- Supports both JavaScript and TypeScript projects.

## Installation

You can install the package from npm.

### npm

```bash
npm install ngn-states-lgas
yarn add ngn-states-lgas
```

## Installation

You can install the package from yarn.

### yarn

```bash
yarn add ngn-states-lgas
```

``` Javascript
for JavaScript
const { getStates, getLgas } = require('ngn-states-lgas');

// Get all states in Nigeria
const states = getStates();
console.log(states); // ["Abia", "Adamawa", ..., "Zamfara"]

// Get LGAs for a specific state
const lagosLgas = getLgas('Lagos');
console.log(lagosLgas); // ["Agege", "Alimosho", "Ikeja", "Surulere"]

// Get LGAs for the Federal Capital Territory (case-insensitive input)
const fctLgas = getLgas('fct');
console.log(fctLgas); // ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"]

```

``` Javascript
for TypeScript
import { getStates, getLgas } from 'ngn-states-lgas';

// Get all states in Nigeria
const states: string[] = getStates();
console.log(states); // ["Abia", "Adamawa", ..., "Zamfara"]

// Get LGAs for a specific state
const lagosLgas: string[] = getLgas('Lagos');
console.log(lagosLgas); // ["Agege", "Alimosho", "Ikeja", "Surulere"]

// Get LGAs for the Federal Capital Territory (case-insensitive input)
const fctLgas: string[] = getLgas('fct');
console.log(fctLgas); // ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"]

```


### Functions
```bash
getStates()
- Returns a list of all states in Nigeria.
- Returns: An array of state names (strings).

getLgas(state: string)
- Returns a list of Local Government Areas (LGAs) for the specified state. The state name is case-insensitive.

- Parameters:
   - state: A string representing the state name. It can be the full name or an abbreviation for the Federal Capital Territory (e.g., 'fct', 'abuja', 'f c t').
- Returns: An array of LGAs (strings) for the specified state.
- Throws: If the state is not found, an error is thrown.
```
### Example
``` javascript
const lagosLgas = getLgas('Lagos'); // returns ["Agege", "Alimosho", "Ikeja", "Surulere"]
```

## Data
The package includes data for the 36 states of Nigeria and the Federal Capital Territory (FCT), with their respective LGAs.

The states and LGAs are stored in a JSON format, which is imported into the package.
Aliases for Federal Capital Territory (FCT)
The following aliases are recognized for the Federal Capital Territory:

- 'fct'
- 'f.c.t'
- 'abuja'
- 'f c t'
- 'Federal Capital Territory'
- 'federal capital territory'
- 'federalcapitalterritory'
These aliases will all return the LGAs for the Federal Capital Territory.


### Example

#### Example of getStates usage:
```javascript
const states = getStates();
console.log(states);  // Output: ['Abia', 'Adamawa', 'Akwa Ibom', ..., 'Zamfara']
```

#### Example of getLgas usage:
```javascript
const lagosLgas = getLgas('Lagos');
console.log(lagosLgas);
// Output: ['Agege', 'Alimosho', 'Ikeja', 'Surulere']

const fctLgas = getLgas('fct');
console.log(fctLgas);
// Output: ['Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal Area Council']
```

## Testing
To run unit tests, make sure you have Jest installed and configured in your project. You can then run the tests using the following command:
```bash
npx jest
```
### Optional: Test Coverage
If you'd like to generate a test coverage report, you can use:
```bash
npx jest --coverage
```

## License
This project is licensed under the MIT License

## Contributing
Feel free to fork the repository, make changes, and create pull requests. We welcome contributions that improve the functionality or documentation of this package.