/* global describe, it */

var assert = require('assert');
var inlineStyles = require('../');

describe('inlinestyles', function () {
	it('keeps object keys with values', function () {
		assert.equal(inlineStyles({
			background: 'black',
			color: 'gold',
			margin: 0,
			padding: undefined
		}), 'background:black;color:gold;margin:0;');
	});

	it('joins arrays of styles and ignore falsy values', function () {
		assert.equal(inlineStyles('background:black', 0, null, undefined, true, 1, 'color:gold'), 'background:black;color:gold;');
	});
  
	it('supports heterogenous arguments', function () {
		assert.equal(inlineStyles({background: 'black'}, 'color:gold', 0), 'background:black;color:gold;');
	});
  
	it('should be trimmed', function () {
		assert.equal(inlineStyles('', 'background:black', {}, ''), 'background:black;');
	});

	it('returns an empty string for an empty configuration', function () {
		assert.equal(inlineStyles({}), '');
	});
	
	it('handles all types of truthy and falsy property values as expected', function () {
		var addMargin = false;
		var addPadding = true;
		
		assert.equal(inlineStyles({
			background: 'black',
			color: 'gold',
			margin: addMargin && '20px',
			padding: addPadding && '20px'
		}), 'background:black;color:gold;padding:20px;');
	});

	it('handles all types of variable values as expected', function () {
		var background = 'url("./some-image.gif")';
		var margin = 0;
		var padding = '20px';

		assert.equal(inlineStyles({
			background: background,
			margin: margin,
			padding: padding
		}), 'background:url("./some-image.gif");margin:0;padding:20px;');
	});

	it('handles list of arguments including object', function () {
		assert.equal(inlineStyles('background:black','color:gold', {
			margin: 0,
			padding: '20px'
		}), 'background:black;color:gold;margin:0;padding:20px;');
	});
});
