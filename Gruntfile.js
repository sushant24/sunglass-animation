module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch : {
            compass  :{
                files : ["sass/*"],
                tasks : ["compass:project"]
            }
        },

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
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['compass']);
    grunt.registerTask('start', ['build','watch']);

    grunt.registerTask('default', ['build']);

};