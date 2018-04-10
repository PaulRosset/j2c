"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require("lodash");

var Conversion = function () {
  function Conversion() {
    _classCallCheck(this, Conversion);

    this.tab = [];
  }

  _createClass(Conversion, [{
    key: "convert",
    value: function convert(obj) {
      var _this = this;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "obj";

      if (_.size(obj) === 0) return;
      _.map(obj, function (item, keys) {
        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) !== "object") {
          _this.tab.push(key + "." + keys + "," + item + "\n");
          return true;
        }
        _this.convert(item, key + "." + keys);
      });
    }
  }, {
    key: "onceFilled",
    value: function onceFilled() {
      return _.join(["Key,Values\n"].concat(_toConsumableArray(this.tab)), "");
    }
  }]);

  return Conversion;
}();

module.exports = Conversion;