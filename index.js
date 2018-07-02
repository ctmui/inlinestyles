'use strict';

module.exports = (...args) => {
	const declarations = {};
	let inlineStyles = '';
	for (const item of args) {
		if (item && typeof item === 'object') {
			for (const [key, value] of Object.entries(item)) {
				const typeOfValue = typeof value;
				if (typeOfValue === 'string' || typeOfValue === 'number') {
					declarations[key] = value;
				}
			}
		}
	}

	for (const [key, value] of Object.entries(declarations)) {
		inlineStyles += `${key}:${value};`;
	}

	return inlineStyles;
};
