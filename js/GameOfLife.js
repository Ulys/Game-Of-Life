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
	/**
	 * Create game
	 * @function
	 */
	GameOfLife.prototype.initGame = function() {
		console.log("Game Of Life init game ...");

		this.view.drawField();
		this.model.createField(this.view.container);

	}
	/**
	 * Add event listeners to cells and buttons
	 * @function
	 */
	GameOfLife.prototype.bindEvents = function() {

	}

	return GameOfLife;
})();