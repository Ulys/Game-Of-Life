
(function main() {
	console.log("main ...");
	var container = document.getElementById("container");
	var view = new ViewModule(container);
	var field = new FieldModule()
	var controller = new GameOfLifeModule(field, view);
	controller.initGame();
})();