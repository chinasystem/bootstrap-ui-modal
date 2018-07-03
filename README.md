# bootstrap-ui-modal
modal plugin for bootstrap

Setps:

    npm install
    npm install -g grunt
    grunt build

Usage:

    _ui.modal.create().title('Modal Title').body('This is the modal body').default().open();

    _ui.modal.create().title('Modal Title').body('This is the modal body').info().open();

    _ui.modal.create().title('Modal Title').body('This is the modal body').success().open();

    _ui.modal.create().title('Modal Title').body('This is the modal body').danger().open();

    _ui.modal.create().title('Modal Title').body('This is the modal body').warning().open();

    _ui.modal.create().title('Modal Title').body('This is the modal body').large().info().open();

    _ui.modal.create().title('Modal Title').body('This is the modal body').small().info().open();