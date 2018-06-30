inlinestyles 
============

[![Build Status](https://travis-ci.org/subpx/inlinestyles.svg?branch=master)](https://travis-ci.org/subpx/inlinestyles)

A simple JavaScript utility for conditionally joining inline styles.

```js
var inlineStyles = require('inlinestyles');
inlineStyles('background:black', 'color:gold'); // => 'background:black;color:gold;'
```

Alternatively, you can simply include `index.js` on your page with a standalone `<script>` tag and it will export a 
global `inlineStyles` method, or define the module if you are using RequireJS.

## Usage

The `inlineStyles` function takes any number of arguments which can be a string or object.
The argument `'foo'` is short for `{ foo: true }`. If the value associated with a given key is falsy, that key won't be included in the output.

```js
inlineStyles('foo', 'bar'); // => 'foo bar'
inlineStyles('foo', { bar: true }); // => 'foo bar'
inlineStyles({ 'foo-bar': true }); // => 'foo-bar'
inlineStyles({ 'foo-bar': false }); // => ''
inlineStyles({ foo: true }, { bar: true }); // => 'foo bar'
inlineStyles({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
inlineStyles('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
inlineStyles(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

Arrays will be recursively flattened as per the rules above:

```js
var arr = ['b', { c: true, d: false }];
inlineStyles('a', arr); // => 'a b c'
```

### Dynamic class names with ES2015

If you're in an environment that supports [computed keys](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer) (available in ES2015 and Babel) you can use dynamic class names:

```js
let buttonType = 'primary';
inlineStyles({ [`btn-${buttonType}`]: true });
```
