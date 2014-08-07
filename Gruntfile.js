module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ["js/*"],
            options: {
                eqeqeq: true,
                curly: true,
                latedef: true,
                newcap: true,
                undef: true,
                browser: true,
                globals: {
                    console: true,
                    ViewModule: true,
                    Templates: true,
                    GameOfLifeModule: true,
                    FieldModule: true
                }
            }
        },
        jasmine: {
            pivotal: {
                src: ["js/*"],
                options:{
                    spec: ["tests/*"]
                }
            }
        },
        stylus: {
            files: {
                "css/main.css": ["styl/main.styl"]
            }
        },
        watch: {
            files: ["js/*", "css/*", "stylus/*"],
            tsks: ["jshint", "jasmine", "stylus"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-stylus");

    grunt.registerTask("hint", ["jshint"]);
    grunt.registerTask("style", ["stylus"]);
    grunt.registerTask("default", ["jshint", "jasmine", "stylus"]);
}