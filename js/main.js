(function main() {
    console.log("main ...");
    var container = document.getElementById("container");
    var buttons = document.getElementById("buttons");
    var view = new ViewModule(container, buttons);
    var field = new FieldModule();
    var controller = new GameOfLifeModule(field, view);
    controller.initGame();
})();