/**
 * @fileoverview View module
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module View module
 */
var ViewModule = (function () {

	/**
	 * @constructor
	 * @param {HTMLElement} container
	 */
	function View(container) {
		this.container = container;
		this.colNumber = countNumberOfColumns(container);
		this.rowNumber = countNumberOfRows();
	}

	/**
	 * @function create field
	 */
	View.prototype.drawField = function () {
		console.log("view draw field ...");

		var i, j, cell, row, rowNum, colNum,
			field = document.createDocumentFragment();

		for (i = 0, rowNum = this.rowNumber; i < rowNum; i++) {

			row = document.createElement("div");
			row.className = "row";

			for (j = 0, colNum = this.colNumber; j < colNum; j++) {

				cell = document.createElement("div");
				cell.className = "dead";
				row.appendChild(cell);

			}

		field.appendChild(row);

		}

		this.container.appendChild(field);
	}


	/**
	 * @function count number of cell in row respectively to the screen size
	 * @return {Number} number of cells in a row
	 */
	function countNumberOfColumns(container) {
		var	CELL_WIDTH = 20,							//px standart cell width
			HORIZONTAL_MARGINS = 100,					//px horizontal margins
			contWidth = container.clientWidth;

		return Math.floor((contWidth - HORIZONTAL_MARGINS) / CELL_WIDTH);
	}

	/**
	 * @function count number of cell in column respectively to the screen size
	 * @return {Number} number of cells in a row
	 */
	function countNumberOfRows() {
		var	CELL_WIDTH = 20,							//px standart cell width
			HEADER_HEIGHT = 100,						//px header height
			VERTICAL_MARGINS = 100,						//px vertical margins
			winHeight = window.innerHeight;

			console.log(winHeight);
		return Math.floor((winHeight - HEADER_HEIGHT - VERTICAL_MARGINS) / CELL_WIDTH);
	}

	return View;
})();
