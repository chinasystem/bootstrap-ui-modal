/**
 * ui.js based on Bootstrap 4. This requires Bootstrap 4.
 * Author: chinasystem
 * Email: 214277706@qq.com
 */

if (typeof jQuery === 'undefined') {
  throw new Error('ui\'s JavaScript requires jQuery');
} else {
  if (!jQuery.fn.modal || typeof jQuery.fn.modal !== 'function') {
    throw new Error('ui\'s JavaScript requires Bootstrap 4');
  }
  if (!jQuery.fn.tooltip || typeof jQuery.fn.tooltip !== 'function') {
    throw new Error('ui\'s JavaScript requires Bootstrap 4');
  }
}

+function($, window){
  //define ui to window object
  var version = '1.0.0',  _ui = {};

  _ui.version = version;

  window._ui = _ui;

}(jQuery, window);

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

/**
 * ui-mdoal.js based on Bootstrap 4. This requires Bootstrap 4.
 * Author: chinasystem
 * Email: 214277706@qq.com
 */

 if (typeof _ui === 'undefined') {
   throw new Error('ui-modal model requires ui.js');
 }

+function($, _ui){
  //define ui modal to window vui object
  var version = '1.0.0', _utils = _ui.utils, ui_modal = {};

  var _options_ = {
    backdrop : true,
    keyboard : true,
    show : true,
  };

  var mm = _ui.modal = ui_modal;

  mm.version = version;

  var Modal = function(modal){
    var _this = this;
    this.modal = modal;
    this.status = 'normal';
    this.options = _utils.copy(_options_);

    function _destroy_() {
      _this.modal = null;
      _this.status = 'destroy';
    };

    function _invalid_() {
      return _this.modal == null;
    };

    //backdrop should be invoked before the open function: true/false/'static'
    this.backdrop = function(value){
      if (_invalid_()){
        return _this;
      }
      _this.options.backdrop = value;
      return _this;
    };

    //keyboard should be invoked before the open function： true/false
    this.keyboard = function(value){
      if (_invalid_()){
        return _this;
      }
      _this.options.keyboard = value;
      return _this;
    };

    this.open = function() {
      if (_invalid_()){
        return _this;
      }
      _this.options.show = true;
      _this.modal.modal(_this.options);
      return _this;
    };

    this.hide = function() {
      if (_invalid_()){
        return _this;
      }
      _this.modal.modal('hide');
      return _this;
    };

    this.toggle = function() {
      if (_invalid_()){
        return _this;
      }
      _this.modal.modal('toggle');
      return _this;
    };

    this.delete = function() {
      if (_invalid_()){
        return _this;
      }
      _this.hide();
      setTimeout(function(){_this.modal.remove();_destroy_();}, 1000);
      return _this;
    };

     _this.modal.find('.modal-close').bind('click', this.delete);

    // set modal level start
    var CLASS_MODAL_DANGER = 'modal-danger',
        CLASS_MODAL_WARNING = 'modal-warning',
        CLASS_MODAL_SUCCESS = 'modal-success',
        CLASS_MODAL_INFO = 'modal-info',
        CLASS_MODAL_DEFAULT = 'modal-default';

    var clearLevelStyle = function() {
      _this.modal.removeClass(CLASS_MODAL_DANGER + ' ' + CLASS_MODAL_WARNING + ' ' + CLASS_MODAL_SUCCESS + ' ' + CLASS_MODAL_INFO + ' ' + CLASS_MODAL_DEFAULT);
    };

    this.danger = function() {
      if (_invalid_()){
        return _this;
      }
      clearLevelStyle();
      _this.modal.addClass(CLASS_MODAL_DANGER);
      return _this;
    };

    this.warning = function() {
      if (_invalid_()){
        return _this;
      }
      clearLevelStyle();
      _this.modal.addClass(CLASS_MODAL_WARNING);
      return _this;
    };

    this.success = function() {
      if (_invalid_()){
        return _this;
      }
      clearLevelStyle();
      _this.modal.addClass(CLASS_MODAL_SUCCESS);
      return _this;
    };

    this.info = function() {
      if (_invalid_()){
        return _this;
      }
      clearLevelStyle();
      _this.modal.addClass(CLASS_MODAL_INFO);
      return _this;
    };

    this.default = function() {
      if (_invalid_()){
        return _this;
      }
      clearLevelStyle();
      _this.modal.addClass(CLASS_MODAL_DEFAULT);
      return _this;
    };

    // set modal level end

    // set id, title, body start
    this.id = function(id) {
      if (_invalid_()){
        return _this;
      }
      _this.modal.attr('id', id);
      return _this;
    };

    this.title = function(title){
      if (_invalid_()){
        return _this;
      }
      _this.modal.find('.modal-title').html(title);
      return _this;
    };

    this.body = function(body){
      if (_invalid_()){
        return _this;
      }
      _this.modal.find('.modal-body').html(body);
      return _this;
    };

    // set id, title, body end

    // set buttons start

    var CLASS_MODAL_COMMIT = '.modal-commit', CLASS_MODAL_CLOSE = '.modal-close';

    this.hideClose = function() {
      if (_invalid_()){
        return _this;
      }
      _this.modal.find(CLASS_MODAL_CLOSE).hide();
      return _this;
    };

    this.hideCommit = function() {
      if (_invalid_()){
        return _this;
      }
      _this.modal.find(CLASS_MODAL_COMMIT).hide();
      return _this;
    };

    this.showClose = function(text) {
      if (_invalid_()){
        return _this;
      }
      _this.modal.find(CLASS_MODAL_CLOSE).show();
      if (text) {
        _this.modal.find(CLASS_MODAL_CLOSE).eq(1).text(text);
      }
      return _this;
    };

    this.showCommit = function(text) {
      if (_invalid_()){
        return _this;
      }
      _this.modal.find(CLASS_MODAL_COMMIT).show();
      if (text) {
        _this.modal.find(CLASS_MODAL_COMMIT).text(text);
      }
      return _this;
    };

    this.addButton = function(button, callback){
      if (_invalid_()){
        return _this;
      }
      if (button) {
        var _button = $(button);
        _this.modal.find('.modal-footer').append(_button);
        _button.unbind('click');
        _button.click(function(){
          if (callback && typeof callback === 'function') {
            callback.apply(null, [_this]);
          }
        });
      }
      return _this;
    };
    // set buttons end
    // set modal size start

    var BS_MODAL_SM = 'bs-example-modal-sm', BS_MODAL_LG='bs-example-modal-lg', MODAL_SM = 'modal-sm', MODAL_LG = 'modal-lg';

    var CLASS_MODAL_DIALOG = '.modal-dialog';

    this.small = function(){
      if (_invalid_()){
        return _this;
      }
      _this.size();
      _this.modal.addClass(BS_MODAL_SM);
      _this.modal.find(CLASS_MODAL_DIALOG).addClass(MODAL_SM);
      return _this;
    };

    this.large = function(){
      if (_invalid_()){
        return _this;
      }
      _this.size();
      _this.modal.addClass(BS_MODAL_LG);
      _this.modal.find(CLASS_MODAL_DIALOG).addClass(MODAL_LG);
      return _this;
    };

    this.size = function(){
      if (_invalid_()){
        return _this;
      }
      _this.modal.removeClass(BS_MODAL_SM + ' '+ BS_MODAL_LG);
      _this.modal.find(CLASS_MODAL_DIALOG).removeClass(MODAL_SM + ' ' +MODAL_LG);
      return _this;
    };
    // set modal size end

    //bind events start

    //bind callback to commit button
    /**
    * function(vmodal){
    *
    * }
    */
    this.commit = function(callback) {
      if (_invalid_()){
        return _this;
      }
      _this.modal.find(CLASS_MODAL_COMMIT).unbind('click');
      _this.modal.find(CLASS_MODAL_COMMIT).click(function(){
        if (callback && typeof callback === 'function') {
          callback.apply(null, [_this]);
        }
      });
      return _this;
    };

    //bind callback to close button
    /**
    * function(vmodal){
    *
    * }
    */
    this.close = function(callback) {
      if (_invalid_()){
        return _this;
      }
      _this.modal.find(CLASS_MODAL_CLOSE).unbind('click');
      _this.modal.find(CLASS_MODAL_CLOSE).click(function(){
        if (callback && typeof callback === 'function') {
          callback.apply(null, [_this]);
        }
      });
      return _this;
    };

    this.error = function(error) {
      if (_invalid_()){
        return _this;
      }
      _this.modal.find('.modal-error').html(error).removeClass('hide');
      return _this;
    };

    this.addClass = function(c) {
      if (_invalid_()){
        return _this;
      }
      _this.modal.addClass(c);
      return _this;
    };

    //bind events end
  };

   var template = '<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"></h4><button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-info modal-close" data-dismiss="modal">Close</button><button type="button" class="btn btn-info modal-commit">Commit</button></div></div></div></div>';
   /**
  * this function is used to create a new modal.
  * id : the id assigned to the modal, it's required, but can be null
  * title : the modal title, it's required
  * body : the modal body content, it's optional
  * options : options control the modal
  */
  mm.create = function(options) {
    var modal = $(template);
    $('body').append(modal);
    var vmodal = new Modal(modal, options);
    return vmodal;
  };

}(jQuery, window._ui);
