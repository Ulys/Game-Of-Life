/**
 * @fileoverview Field class
 * @author anton_razumovskyi@epam.com
 */

/**
 *@module Field
 */

var FieldModule = (function () {

	/**
	 * @constructor Field class
	 */
	function Field() {
		console.log("Field ...");

		this.cells = null;
	}
	/**
	 * @function create field with cells
	 * @param {HTMLElment} container
	 */
	Field.prototype.createField = function (container) {
		console.log("Field create field ...");

		var i, j, row, rowNum, colNum, cell,
			allRows = container.children,
			cellsArray = [];

		for (i = 0, rowNum = allRows.length; i < rowNum; i++) {

			cellsArray[i] = [];
			row = allRows[i].children;

			for (j = 0, colNum = row.length ; j < colNum; j++) {
				cell = row[j];
				cellsArray[i].push(cell);

			}

		}

		this.cells = cellsArray;
	}
	/**
	 * @function run one life cicle 
	 */
	Field.prototype.runGeneration = function() {

	}
	return Field;
})();