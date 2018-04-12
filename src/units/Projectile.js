import Unit from './Unit.js';

/**
 * Basic attack object, either enemy or user
 */
export default class Projectile extends Unit {

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
         * Damage amount
         * @type {Number}
         */
        this.damage = options.damage !== undefined ? options.damage : 1;

        /**
         * Unit image
         * @type Image object
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = options.src !== undefined ? options.src : "images/projectile1.png";

        /**
         * Object width
         * @type {Number}
         */
        this.width = options.width !== undefined ? options.width : 12;

        /**
         * Object height
         * @type {Number}
         */
        this.height = options.height !== undefined ? options.height : 12;
    }

    /**
     * The point cost per attack
     * @return {number} Cost per attack (in points)
     */
    static cost() {
        return 5;
    }
}
