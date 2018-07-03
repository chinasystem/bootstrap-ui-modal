/**
 * ui-utils.js
 * Author: chinasystem
 * Email: 214277706@qq.com
 */
 if (typeof _ui === 'undefined') {
   throw new Error('ui-utils model requires ui.js');
 }

+function($, _ui){
  //define vanguard ui utils to window vui object
  var version = '1.0.2', _utils = {};

  _utils.version = version;

  var vu = _ui.utils = _utils;

  /**
  * merge object 2 into object 1
  * case 1 : two array merge
  * case 2 : two object merge
  */

  vu.merge = function(obj1, obj2, options) {
    if (obj2) {
      if (typeof obj1 === 'undefined') {
        obj1 = obj2;
      } else {
        if (obj1 instanceof Array && obj2 instanceof Array) {

        } else if (!(obj1 instanceof Array) && !(obj2 instanceof Array)){

        }
      }
    }
    return obj1;
  };

  vu.isSimpleObject = function(obj) {
    return obj && (typeof obj === 'string'|| typeof obj === 'number' || typeof obj === 'boolean');
  };

  vu.isFunction = function(obj) {
    return obj && typeof obj === 'function';
  }

  vu.copy = function(obj) {
    if (!obj || vu.isSimpleObject(obj) || vu.isFunction(obj)) {
      return obj;
    }

    if (obj instanceof Array) {
      var _copy = [];
      for (var i = 0; i < obj.length; i++) {
        _copy.push(vu.copy(obj[i]));
      }
      return _copy;
    } else if(obj instanceof Object){
      var _copy = {};
      for (var k in obj) {
        _copy.k = vu.copy(obj[k]);
      }
      return _copy;
    }
    return obj;
  };

}(jQuery, window._ui);
