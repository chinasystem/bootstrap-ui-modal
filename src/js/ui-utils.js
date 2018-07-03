/**
 * ui-utils.js
 * Author: chinasystem
 * Email: 214277706@qq.com
 */
 if (typeof _ui === 'undefined') {
   throw new Error('ui-utils model requires ui.js');
 }

+function($, _ui){
  //define ui utils to window _ui object
  var version = '1.0.1', _utils = {};

  _utils.version = version;

  var vu = _ui.utils = _utils;

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
