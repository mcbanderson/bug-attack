import Enemy from './Enemy.js';

export default class Beetle extends Enemy {

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
        this.points = options.points !== undefined ? options.points : 50;

        /**
         * Horizontal speed
         * @type {Number}
         */
        this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 6;

        /**
         * Object's image
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = "images/beetle.png";

        /**
         * Object width
         * @type {Number}
         */
        this.width = options.width !== undefined ? options.width : 75;

        /**
         * Object height
         * @type {Number}
         */
        this.height = options.height !== undefined ? options.height : 75;

        /**
         * Attack rate
         * @type {Number}
         */
        this.attackRate = options.attackRate !== undefined ? options.attackRate : 0.01;
    }
}
