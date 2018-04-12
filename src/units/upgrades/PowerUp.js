import Unit from '../Unit.js';

export default class PowerUp extends Unit {

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
         * Horizontal movement speed
         * @type {Number}
         */
        this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 0;

        /**
         * Vertical movement speed
         * @type {Number}
         */
        this.ySpeed = options.ySpeed !== undefined ? options.ySpeed : 2;

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
         * Object's image
         * @type Image object
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = "images/black.png";

        /**
         * Collection audio object
         * @param {object}
         */
        this.collectAudio = new Audio("audio/sfx_sounds_powerup2.wav");

        /**
         * Image size multiplier
         * @type {number}
         */
        this.scale = options.upgradeValue !== undefined ? options.upgradeValue : 0.666666;
    }

    /**
     * Return drop rate
     * @return number
     */
    static dropRate() {
        return 0.05;
    }
}
