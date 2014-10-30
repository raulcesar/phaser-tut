module.exports = function(grunt) {

	grunt.initConfig({
		connect : {
			server: {
				options: {
					port: 9090,
					keepalive: true
				}
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

	grunt.registerMultiTask('showTargetFiles', 'blabla', function() {
		this.files.forEach(function(file) {
			console.log("source: " + file.src + " -> dest: " + file.dest);
		});
	});
	
}