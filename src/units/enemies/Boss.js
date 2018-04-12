import Enemy from './Enemy.js';

export default class Boss extends Enemy {

    /**
     * Instantiate the new object
     * @param  {integer} xPos The horizontal position of the object
     * @param  {integer} yPos The vertical position of the object
     */
    constructor(GAME, xPos, yPos, options = {}) {

        /**
         * Call the parent class' constructor
         */
        super(GAME, xPos, yPos, options);

        /**
         * Enemy point value
         * @type {Number}
         */
        this.points = options.points !== undefined ? options.points : 1000;

        /**
         * Object's image
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = "images/flying-beetle.png";

        /**
         * Object width
         * @type {Number}
         */
        this.width = options.width !== undefined ? options.width : 141;

        /**
         * Object height
         * @type {Number}
         */
        this.height = options.height !== undefined ? options.height : 96;

        /**
         * Starting health
         * @type {integer}
         */
        this.startingHealth = options.health !== undefined ? options.health : 1000;

        /**
         * Current health
         * @type {integer}
         */
        this.health = options.health !== undefined ? options.health : 1000;

        /**
         * Death audio object
         * @param {object}
         */
        this.deathAudio = GAME.audio6;
    }

    /**
     * Draw current health
     * @return null
     */
    drawHealth() {
        this.GAME.context.fillStyle = "red";
        this.GAME.context.fillRect(13, (this.GAME.canvas.height / 10) + ((this.startingHealth - this.health) * (this.GAME.canvas.height * 0.6 - 6) / this.startingHealth) + 3, 44, this.health * (this.GAME.canvas.height * 0.6 - 6) / this.startingHealth);
    }

    /**
     * Draw health container
     * @return null
     */
    drawHealthContainer() {
        this.GAME.context.lineWidth = 6;
        this.GAME.context.strokeStyle = "black";
        this.GAME.context.strokeRect(10, this.GAME.canvas.height / 10, 50, this.GAME.canvas.height * 0.6);
    }
}
