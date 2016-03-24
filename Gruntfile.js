module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Read docs here: http://gruntjs.com/configuring-tasks
    sass: {
      options: {
        outputStyle: 'expanded',
        sourceMap: false
      },
      dev: {
        files: [{
          'dist/mixins.css': 'mixins.scss'
        }]
      },
      dev2: {
        files: [{
          'demo/css/style.css': 'demo/demo.scss'
        }]
      }
    },
    watch: {
      files: ['mixins.scss', 'demo/demo.scss'],
      tasks: ['sass',]
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');


  // Default task(s).
  grunt.registerTask('default', [
      'sass'
  ]);

};