'use strict';


module.exports = function less(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Options
  return {
      dist: {
        options: {                       // Target options
          style: 'expanded'
        },
          files:[ {
                  'dist/ui.css': 'src/scss/ui.scss'
              }]
      }
  };
};
