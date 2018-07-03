'use strict';

module.exports = function concat(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Options
    return  {
      basic : {
        src: ['src/js/ui.js', 'src/js/ui-utils.js', 'src/js/ui-modal.js'],
        dest: 'dist/ui.js',
        nonull: true
      }
    };
};
