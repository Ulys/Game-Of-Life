/**
 * @fileoverview GameLogicModule (controller)
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module GameOfLifeModule
 */
var GameOfLifeModule = (function () {

	/**
	 * GameOfLife constructor
	 * @constructor
	 * @param {Field} model
	 * @param {View} view
	 */
	function GameOfLife(model, view) {
		console.log("Game Of Life constructor ...");
		this.model = model;
		this.view = view;
	}

	GameOfLife.prototype.initGame = function() {
		console.log("Game Of Life init game ...");

		this.view.drawField();
		this.model.createField(this.view.container);
		// console.dir(this.model.cells);

	}

	return GameOfLife;
})();