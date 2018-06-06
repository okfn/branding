module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },

    cssmin: {
      bs: {
        files: [{
          expand: true,
          cwd: 'css',
          src: 'bootstrap-custom.css',
          dest: 'oki/css',
          ext: '.min.css'
        }]
      },
      base: {
        files: [{
          expand: true,
          cwd: 'css',
          src: 'base.css',
          dest: 'oki/css',
          ext: '.css'
        }]
      }
    },

		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass', 'postcss:dist', 'cssmin']
			}
		}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default',['watch']);

};
