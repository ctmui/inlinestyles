inlinestyles 
============

[![Build Status](https://api.travis-ci.org/subpx/inlinestyles.svg?branch=master)](https://travis-ci.org/subpx/inlinestyles)

A simple JavaScript utility for conditionally joining css style declaration.

```js
var inlinestyles = require('inlinestyles');
inlineStyles({ background:'black' },{ color:'gold' }); // => 'background:black;color:gold;'
```

## Usage

The `inlinestyles` function takes any number of arguments which must be objects.
If the value associated with a given key is not a string or a number, that key won't be included in the output.

```js
inlineStyles({ background:'black' },{ color:'gold' },{ opacity:0.3 }); // => 'background:black;color:gold;opacity:0.5;'
inlineStyles({ background: false }); // => ''
inlineStyles({ background: null }); // => ''
```

Duplicate object keys will override previous value if valid:

```js
inlineStyles({ background:'black' },{ background:'gold' }; // => background:'gold';
inlineStyles({ background:'black' },{ background:false }; // => background:'black';
```

### Usage with Svelte

```html
<button style="{InlineStyles}"></button>

<script>
  import inlinestyles from 'inlinestyles';

  export default {
    data() {
      return {
        bgColor: 'black',
        isBlock: false,
        textColor: 'gold',
        width: '100%'
      }
    },
    computed: {
      InlineStyles: ({ bgColor, textColor, width }) => {
        return inlinestyles(
			{
			  background: bgColor,
			  color: textColor,
			  width: width
			},
			isBlock && {
			  width: '100%'
			}
        );
      }
    }
  }
</script>
