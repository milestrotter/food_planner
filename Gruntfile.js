module.exports = function(grunt){
	grunt.initConfig({
		watch: {
			js: {
				files: ['Gruntfile.js', 'spec/*.js', './client/lib/src/css/sass/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		},
		jasmine: {
			src: 'server/**/*.js',
			options: {
				specs: 'spec/**/*.js',
				host: 'http://localhost:3000'
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: './client/lib/src/css/sass',
					src: ['*.scss'],
					dest: './client/lib/src/css/build',
					ext: '.css'
				}]
			}
		},
		jshint: {
			all: {
				src: ['Gruntfile.js', 'server.js', 'server/**/*.js', 'client/**/*.js', 'spec/**/*.js'],
				options: {
					jshintrc: true
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true, 
					cwd: './client/lib/src/css/build',
					src: ['*.css'],
					dest: './client/lib/dist/css',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('test', ['jasmine', 'jshint']);
};