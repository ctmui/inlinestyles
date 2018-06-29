Inline Styles
===========

[![Build Status](https://travis-ci.org/JedWatson/classnames.svg?branch=master)](https://travis-ci.org/JedWatson/classnames)

A simple JavaScript utility for conditionally joining inline styles.

```js
var inlineStyles = require('inlinestyles');
inlineStyles('background', 'blue'); // => 'background:blue;'
```

Alternatively, you can simply include `index.js` on your page with a standalone `<script>` tag and it will export a global `classNames` method, or define the module if you are using RequireJS.

## Usage

The `classNames` function takes any number of arguments which can be a string or object.
The argument `'foo'` is short for `{ foo: true }`. If the value associated with a given key is falsy, that key won't be included in the output.

```js
inlinestyles('foo', 'bar'); // => 'foo bar'
inlinestyles('foo', { bar: true }); // => 'foo bar'
inlinestyles({ 'foo-bar': true }); // => 'foo-bar'
inlinestyles({ 'foo-bar': false }); // => ''
inlinestyles({ foo: true }, { bar: true }); // => 'foo bar'
inlinestyles({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
inlinestyles('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
inlinestyles(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

Arrays will be recursively flattened as per the rules above:

```js
var arr = ['b', { c: true, d: false }];
inlinestyles('a', arr); // => 'a b c'
```

### Dynamic class names with ES2015

If you're in an environment that supports [computed keys](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer) (available in ES2015 and Babel) you can use dynamic class names:

```js
let buttonType = 'primary';
inlinestyles({ [`btn-${buttonType}`]: true });
```
