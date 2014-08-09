(function main() {

    "use strict";
    console.log("main ...");

    var container = document.getElementById("container"),
        buttons = document.getElementById("buttons"),
        view = new View(container, buttons),
        field = new Field(),
        controller = new GameOfLife(field, view),
        animationFrame = window.requestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame;

    window.requestAnimationFrame = animationFrame;

    controller.initGame();
})();