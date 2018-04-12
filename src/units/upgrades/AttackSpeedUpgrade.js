import PowerUp from './PowerUp.js';

export default class AttackSpeedUpgrade extends PowerUp {

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
         * Object's image
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = "images/purple.png";

        /**
         * Weapon upgrade value
         * @type {Number}
         */
        this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 0.25;
    }

    /**
     * Provide the power-up
     * @return this
     */
    onCollect() {
        if(!this.GAME.isMuted) {
            this.collectAudio.play();
        }
        if (this.GAME.user.attackSpeed < 3) {
            this.GAME.user.attackSpeed += this.upgradeValue;
        }
        return this;
    }

    /**
     * Return drop rate
     * @return number
     */
    static dropRate() {
        return 0.01;
    }
}
