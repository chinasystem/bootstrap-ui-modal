/**
 * ui.js based on Bootstrap 4. This requires Bootstrap 4.
 * Author: chinasystem
 * Email: 214277706@qq.com
 */

if (typeof jQuery === 'undefined') {
  throw new Error('ui\'s JavaScript requires jQuery');
} else {
  if (!jQuery.fn.modal || typeof jQuery.fn.modal !== 'function') {
    throw new Error('ui\'s JavaScript requires Bootstrap 3');
  }
  if (!jQuery.fn.tooltip || typeof jQuery.fn.tooltip !== 'function') {
    throw new Error('ui\'s JavaScript requires Bootstrap 3');
  }
}

+function($, window){
  //define ui to window object
  var version = '1.0.0',  _ui = {};

  _ui.version = version;

  window._ui = _ui;

}(jQuery, window);
