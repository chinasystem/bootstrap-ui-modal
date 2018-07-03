var createPrimaryModal = function(){
  _ui.modal.create().title('Modal Title').body('This is the modal body').default().open();
};
var createInfoModal = function(){
  _ui.modal.create().title('Modal Title').body('This is the modal body').info().open();
};

var createSuccessModal = function(){
  _ui.modal.create().title('Modal Title').body('This is the modal body').success().open();
};

var createDangerModal = function(){
  _ui.modal.create().title('Modal Title').body('This is the modal body').danger().open();
};

var createWarningModal = function(){
  _ui.modal.create().title('Modal Title').body('This is the modal body').warning().open();
};

var createLargeInfoModal = function(){
  _ui.modal.create().title('Modal Title').body('This is the modal body').large().info().open();
};

var createSmallInfoModal = function(){
  _ui.modal.create().title('Modal Title').body('This is the modal body').small().info().open();
};
