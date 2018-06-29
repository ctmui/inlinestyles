Inline Styles
===========

A simple JavaScript utility for conditionally joining inline styles.

```js
var inlineStyles = require('inlinestyles');
inlineStyles('foo', 'bar'); // => 'foo bar'
```

Alternatively, you can simply include `index.js` on your page with a standalone `<script>` tag and it will export a global `classNames` method, or define the module if you are using RequireJS.

### Project philosophy

We take the stability and performance of this package seriously, because it is run millions of times a day in browsers all around the world. Updates are thoroughly reviewed for performance impacts before being released, and we have a comprehensive test suite.

Classnames follows the [SemVer](http://semver.org/) standard for versioning.

There is also a [Changelog](https://github.com/JedWatson/classnames/blob/master/HISTORY.md).

## Usage

The `classNames` function takes any number of arguments which can be a string or object.
The argument `'foo'` is short for `{ foo: true }`. If the value associated with a given key is falsy, that key won't be included in the output.

```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

Arrays will be recursively flattened as per the rules above:

```js
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

### Dynamic class names with ES2015

If you're in an environment that supports [computed keys](http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer) (available in ES2015 and Babel) you can use dynamic class names:

```js
let buttonType = 'primary';
classNames({ [`btn-${buttonType}`]: true });
```

### Usage with React.js

This package is the official replacement for `classSet`, which was originally shipped in the React.js Addons bundle.

One of its primary use cases is to make dynamic and conditional `className` props simpler to work with (especially more so than conditional string manipulation). So where you may have the following code to generate a `className` prop for a `<button>` in React:

```js
var Button = React.createClass({
  // ...
  render () {
    var btnClass = 'btn';
    if (this.state.isPressed) btnClass += ' btn-pressed';
    else if (this.state.isHovered) btnClass += ' btn-over';
    return <button className={btnClass}>{this.props.label}</button>;
  }
});
```

You can express the conditional classes more simply as an object:

```js
var classNames = require('classnames');

var Button = React.createClass({
  // ...
  render () {
    var btnClass = classNames({
      btn: true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
});
```

Because you can mix together object, array and string arguments, supporting optional `className` props is also simpler as only truthy arguments get included in the result:

```js
var btnClass = classNames('btn', this.props.className, {
  'btn-pressed': this.state.isPressed,
  'btn-over': !this.state.isPressed && this.state.isHovered
});
```
