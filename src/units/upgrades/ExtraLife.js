import PowerUp from './PowerUp.js';

export default class ExtraLife extends PowerUp {

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
         * Number of extra lives to award user
         * @type {Number}
         */
        this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 1;

        /**
         * Object's image
         * @type Image object
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = "images/extra-life.png";

        /**
         * Size multiplier
         * @type {number}
         */
        this.scale = options.upgradeValue !== undefined ? options.upgradeValue : 0.666666;
    }

    /**
     * Provide the power-up
     * @return this
     */
    onCollect() {
        if(!this.GAME.isMuted) {
            this.collectAudio.play();
        }
        this.GAME.lives += this.upgradeValue;
        return this;
    }
}
