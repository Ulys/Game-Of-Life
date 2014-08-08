module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ["js/*"],
            options: {
                bitwise: true,
                freeze: true,
                noarg: true,
                noempty: true,
                nonew: true,
                eqeqeq: true,
                curly: true,
                newcap: true,
                undef: true,
                browser: true,
                strict: true,
                maxlen: 90,
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
        uglify: {
            options: {
                mangle: false
            },
            my_target:{
                files: {
                    "product/js/game.min.js":["js/gameOfLife.js", "js/field.js", "js/main.js", "js/view.js", "js/template.js"]
                }
            }
        },
        watch: {
            files: ["js/*", "css/*", "stylus/*"],
            tsks: ["jshint"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("hint", ["jshint"]);
    grunt.registerTask("ugl", ["uglify"]);
    grunt.registerTask("default", ["jshint", "jasmine"]);
}