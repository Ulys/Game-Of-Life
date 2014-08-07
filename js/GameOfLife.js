/**
 * @fileoverview GameLogicModule (controller)
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module GameOfLifeModule
 */
var GameOfLifeModule = (function() {

    /**
     * @const frequency of field refresh while game is run
     */
    var GAME_SPEED = 250;

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
        this.gameRun = false;
    }

    /**
     * Create game
     * @function
     */
    GameOfLife.prototype.initGame = function() {
        console.log("Game Of Life init game ...");

        this.view.drawField();
        this.model.setCells(this.view.cells);
        this.bindEvents();
    }

    /**
     * Add event listeners to cells and buttons
     * @function
     */
    GameOfLife.prototype.bindEvents = function() {

        var that = this;
        this.view.container.addEventListener("click", onFieldClickHandler);
        this.view.buttons.addEventListener("click", onButtonClickHandler);
        /**
         * Handle click event
         * @function
         */
        function onFieldClickHandler(ev) {
            console.log("on click handler");

            var source = ev.srcElement;
            if (source.parentNode.className === "row") {
                gameCellClick(source);
            }

            /**
             * Invoke when game field cell click
             * @function
             * @param source source of click
             */
            function gameCellClick(source) {

                if (ViewModule.aliveCell === source.className) {
                    source.className = ViewModule.deadCell;
                } else {
                    source.className = ViewModule.aliveCell;
                }
            }
        }

        /**
         * Inovke when button clicked
         * @function
         * @param source of click
         */
        function onButtonClickHandler(ev) {

            var source = ev.srcElement;

            if (source.id === "startButton") {
                startButtonClick();
            }

            /**
             * Invoke when start button click
             * @function
             * @param source source of click
             */
            function startButtonClick() {
                var newGeneration = that.model.runGeneration();
                that.view.updateField(newGeneration);
            }
        }

    }

    return GameOfLife;
})();