'use strict';


module.exports = function clean(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Options
    return {
  		before:{
  			src:['dist']
  		},
  		after: {

  		}
    };
};
