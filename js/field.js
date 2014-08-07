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
	 * @function run one life cicle (aka generation)
	 */
	Field.prototype.runGeneration = function() {
		var willAlive = [];					// Cells which will be alive in next generation

		this.cells.forEach(function(row, rowNum) {

			willAlive = willAlive.concat(row.filter(function() {


			})
		});
	}

	/**
	 * Checking neighborhood
	 * @function
	 * @param {Number} x Cell column number
	 * @param {NUmber} y Cell row number
	 * @param {Array[HTMLElement]}
	 * @return {Number} number of alive neighbors
	 */
	Field.checkNeighborhood = function(x, y, cells) {
		console.log("Field check neighbors ...");

		var i, j,
			curX = x - 1,					// curX, curY - coordiantes of left up
			curY = y - 1,					// neightboor, from it starts checking
			size = 3,						// size of neiborhood square
			aliveNeighbors = 0;

		for (i = 0; i < size; i++) {

			for (j = 0; j < size; j++) {

				if (cells[curY] && cells[curY][curX] &&
								curY !== y && curX !== x) {

					cells[cutY][curX].className === "alive" ?
									aliveNeighbors++ : continue;
				}
			}
		}
	}

	/**
	 * Number of cell neighbors to change state from dead to alive
	 * @const {Number}
	 */
	Field.bornNumber = 3;

	 /**
	 * Min number of neighbors of cell to still be alive
	 * @const {Number}
	 */
	Field.minNeighborsToLive = 2;

	/**
	 * Max number of neighbors of cell to still be alive
	 * @const {Number}
	 */
	Field.maxNeighborsToLive = 3;

	/**
	 * Check rules
	 * @function
	 * @param {Number} neighbors Number of alive neighbors
	 * @param {Boolean} curState Current state of cell
	 *					true - alive
	 *					false - dead
	 * @return {Boolean}
	 *				true - cell will be alive in next generation
	 *				false - cell will be dead in next generation
	 */
	Field.checkRules = function(neighbors, curState) {
		console.log("Field check rules ...");

		if (curState) {

			return Field.minNeighborsToLive <= neighbors &&
					neighbors <= Field.maxNeighborsToLive;
		}

		return neighbors === Field.bornNumber;
	}

	return Field;
})();