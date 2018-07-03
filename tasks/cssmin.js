'use strict';

module.exports = function cssmin(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Options
    return  {
		target : {
			files :[
				{
			     src:['dist/ui.css'],
					 dest:'dist/ui.min.css'
			  }
			]
		}
    };
};
