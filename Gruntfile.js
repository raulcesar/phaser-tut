module.exports = function(grunt) {

	grunt.initConfig({
		connect : {
			server: {
				options: {
					port: 9090,
					keepalive: true,
					open: {
						target:'http://localhost:9090/'
					}
				}
			}
		},

open : {
    dev : {
      path: 'http://127.0.0.1:9090',
      app: 'Google Chrome'
    }
    },

		jshint: {
			prodcode: {

				options: {
					reporter: require('jshint-html-reporter'),
					reporterOutput: 'jshint-report.html'
				},
				src:['src/**/*.js']
			} 
		}
	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-open');
	grunt.registerTask('develop', ['connect', 'open']);

	grunt.registerMultiTask('showTargetFiles', 'blabla', function() {
		this.files.forEach(function(file) {
			console.log("source: " + file.src + " -> dest: " + file.dest);
		});
	});
	
}