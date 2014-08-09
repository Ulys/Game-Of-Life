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
                    View: true,
                    Templates: true,
                    GameOfLife: true,
                    Field: true
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
                    "product/js/game.min.js":["js/template.js", "js/field.js", "js/view.js", "js/gameOfLife.js", "js/main.js"]
                }
            }
        },
        open: {
            file: {
                path: "index.html",
                app: "google-chrome"
            }
        },
        watch: {
            files: ["js/*", "css/*"],
            tsks: ["jshint", "open"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-open");

    grunt.registerTask("hint", ["jshint"]);
    grunt.registerTask("default", ["jshint", "open"]);
}