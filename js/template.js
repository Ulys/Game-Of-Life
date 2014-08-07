/**
 * @fileoverview File holds templates for game of life
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module
 * @typedef {
 *		universe: {Array},

 *	}
 */

 var Templates = (function () {

 	var universe = [ [ 1, 1, 0, 1, 1, 1, 1, 1, 1],
 					 [ 1, 1, 0, 1, 1, 1, 1, 1, 1],
 					 [ 1, 1, 0, 0, 0, 0, 0, 0, 0],
 					 [ 1, 1, 0, 0, 0, 0, 0, 1, 1],
 					 [ 1, 1, 0, 0, 0, 0, 0, 1, 1],
 					 [ 1, 1, 0, 0, 0, 0, 0, 1, 1],
 					 [ 0, 0, 0, 0, 0, 0, 0, 1, 1],
 					 [ 1, 1, 1, 1, 1, 1, 0, 1, 1],
 					 [ 1, 1, 1, 1, 1, 1, 0, 1, 1] ],
 		glider = [ [ 1, 0, 0],
 				   [ 0, 1, 1],
 				   [ 1, 1, 0] ],
 		cross = [ [0, 0, 1, 1, 1, 1, 0, 0],
 				  [0, 0, 1, 0, 0, 1, 0, 0],
 				  [1, 1, 1, 0, 0, 1, 1, 1],
 				  [1, 0, 0, 0, 0, 0, 0, 1],
 				  [1, 0, 0, 0, 0, 0, 0, 1],
 				  [1, 1, 1, 0, 0, 1, 1, 1],
 				  [0, 0, 1, 0, 0, 1, 0, 0],
 				  [0, 0, 1, 1, 1, 1, 0, 0] ];
 	return {
 		"universe": universe,
 		"glider": glider,
 		"cross": cross
 	};
 })()