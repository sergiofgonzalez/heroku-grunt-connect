"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true // search for .jshintrc files relative to the files being linted
      },
      build: {
        src: ["Gruntfile.js"]
      },
      server: {
        src: ["app.js"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("heroku", "lint JavaScript files", ["jshint"]);
};
