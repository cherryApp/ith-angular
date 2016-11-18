module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/js/concat.js',
        dest: 'build/js/main.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'src/**/*.html'],
        tasks: ['concat', 'copy', 'uglify'],
        options: {
          spawn: false,
        },
      },
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
              expand: true, 
              cwd: 'src', 
              src: ['index.html'], 
              dest: 'build/'
          },
          {
              expand: true, 
              cwd: 'src', 
              src: [
                  'bower_components/angular/angular.min.js',
                  'bower_components/bootstrap/dist/**',
                  'bower_components/jquery/dist/jquery.min.js',
                  'templates/**'
              ], 
              dest: 'build/'
          }
        ]
      }
    },
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [
              'src/bower_components/angular-route/angular-route.js',
              'src/js/main.js', 
              'src/js/directives/**/*.js',
              'src/js/controllers/**/*.js'
          ],
          dest: 'build/js/concat.js',
        },
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};