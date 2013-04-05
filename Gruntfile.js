module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            project : {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    relativeAssets: true,
                    debugInfo: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('build', ['compass']);

    grunt.registerTask('default', ['build']);

};