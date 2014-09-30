module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %>\n <%= grunt.template.today("yyyy-mm-dd") %>\n Author:<%= pkg.author %>\n License: <%= pkg.license %>\n*/\n',

    browserify: {
      build: {
        files: {
          "build/js/<%= pkg.name %>.js": ["src/.temp/js/**/*.js"]
        },
        options: {

        }
      },
    },

    traceur: {
      options: {
        experimental: true,
        blockBinding: true,
        includeRuntime: false,
        modules: "commonjs"
      },
      custom: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: ['**/*.js'],
          dest: 'src/.temp/js'
        }]
      },
    },
    sass: {
      build: {
        files: {
          'src/css/<%= pkg.name %>.css': ['src/scss/*.scss'],
        }
      }
    },
    autoprefixer: {
      build: {
        files: {
          'build/css/<%= pkg.name %>.css': 'src/css/<%= pkg.name %>.css'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build',
          keepalive: true,
          hostname: '127.0.0.1'
        }
      }
    },
    watch: {
      scss: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass']
      },
      css: {
        files: 'src/css/*.css',
        tasks: ['autoprefixer'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks : ['traceur', 'browserify']
      },
      gruntfile: {
        files: "Gruntfile.js"
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('dev', ['watch']);
};