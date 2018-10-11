'use strict';

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function () {
  var declarations = {};
  var inlineStyles = '';

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var _i = 0; _i < args.length; _i++) {
    var item = args[_i];

    if (item && _typeof(item) === 'object') {
      var _arr2 = Object.entries(item);

      for (var _i3 = 0; _i3 < _arr2.length; _i3++) {
        var _arr2$_i = _slicedToArray(_arr2[_i3], 2),
            key = _arr2$_i[0],
            value = _arr2$_i[1];

        var typeOfValue = _typeof(value);

        if (typeOfValue === 'string' || typeOfValue === 'number') {
          declarations[key] = value;
        }
      }
    }
  }

  var _arr = Object.entries(declarations);

  for (var _i2 = 0; _i2 < _arr.length; _i2++) {
    var _arr$_i = _slicedToArray(_arr[_i2], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    inlineStyles += "".concat(key, ":").concat(value, ";");
  }

  return inlineStyles;
};
