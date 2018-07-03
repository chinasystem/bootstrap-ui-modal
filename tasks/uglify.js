'use strict';

module.exports = function uglify(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Options
    return  {
      basic : {
        src: 'dist/ui.js',
        dest:'dist/ui.min.js'
      }
    };
};
