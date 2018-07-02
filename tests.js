/* global describe, it */

const assert = require('assert');
const inlinestyles = require('.');

describe('inlinestyles', () => {
	it('keeps string or number object values', () => {
		assert.equal(inlinestyles({
			background: 'black',
			color: 'gold',
			margin: 0,
			padding: undefined
		}), 'background:black;color:gold;margin:0;');
	});

	it('should be trimmed', () => {
		assert.equal(inlinestyles({background: 'black'}, 'color:gold', 0, undefined, false, null), 'background:black;');
	});

	it('returns an empty string for an empty configuration', () => {
		assert.equal(inlinestyles({}), '');
	});

	it('handles list of object arguments', () => {
		assert.equal(inlinestyles(
			{
				background: 'black',
				color: 'gold'
			},
			{
				background: 'gold',
				color: 'black'
			}
		), 'background:gold;color:black;');
	});

	it('handles duplicate object property names', () => {
		assert.equal(inlinestyles(
			{
				background: 'black'
			},
			{
				background: 'gold'
			},
			{
				background: false
			}
		), 'background:gold;');
	});
});
