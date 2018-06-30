/*!
  Copyright (c) 2018 Subpixel Digital
  Licensed under the MIT License (MIT), see
  https://github.com/subpx/inlinestyles
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function inlineStyles () {
		var styles = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string') {
				styles.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = inlineStyles.apply(null, arg);
				if (inner) {
					styles.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key)) {
						var valueType = typeof arg[key];

						if(valueType === 'string' || valueType === 'number') {
							styles.push(key + ':' + arg[key]);
						}
					}
				}
			}
		}

		if(styles.length) {
			styles.push('');
		}

		return styles.join(';');
	}

	if (typeof module !== 'undefined' && module.exports) {
		inlineStyles.default = inlineStyles;
		module.exports = inlineStyles;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define('inlineStyles', [], function () {
			return inlineStyles;
		});
	} else {
		window.inlineStyles = inlineStyles;
	}
}());
