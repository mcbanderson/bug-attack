import Enemy from './Enemy.js';

export default class RedBee extends Enemy {

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
        this.points = options.points !== undefined ? options.points : 35;

        /**
         * Horizontal speed
         * @type {Number}
         */
        this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 3;

        /**
         * Object's image
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = "images/bee-sprite-red.png";

        /**
         * Object width
         * @type {Number}
         */
        this.width = options.width !== undefined ? options.width : 100;

        /**
         * Object height
         * @type {Number}
         */
        this.height = options.height !== undefined ? options.height : 63;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        this.frameDelay = options.frameDelay !== undefined ? options.frameDelay : 1;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        this.delayCount = options.delayCount !== undefined ? options.delayCount : 0;

        /**
         * Number of animation frames
         * @type {Number}
         */
        this.numberOfFrames = 4;
    }
}
