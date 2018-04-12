import Unit from './Unit.js';
import Projectile from './Projectile.js';

/**
 * Basic user object
 */
export default class Person extends Unit {
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
         * Horizontal speed
         * @type {Number}
         */
        this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 6;

        /**
         * Vertical speed
         * @type {Number}
         */
        this.ySpeed = options.ySpeed !== undefined ? options.ySpeed : 0;

        /**
         * Object width
         * @type {Number}
         */
        this.width = options.width !== undefined ? options.width : 75;

        /**
         * Height width
         * @type {Number}
         */
        this.height = options.height !== undefined ? options.height : 75;

        /**
         * Attack level
         * @type {Number}
         */
        this.attackLevel = options.attackLevel !== undefined ? options.attackLevel : 1;

        /**
         * Attack damage
         * @type {number}
         */
        this.attackDamage = options.attackDamage !== undefined ? options.attackDamage : 1;

        /**
         * Attack rate, in milliseconds between shots
         * @type {Number}
         */
        this.attackRate = options.attackRate !== undefined ? options.attackRate : 250;

        /**
         * Attack speed multiplier
         * @type {Number}
         */
        this.attackSpeed = options.attackSpeed !== undefined ? options.attackSpeed : 1;

        /**
         * Number of enemy attack clears
         * @type {integer}
         */
        this.clears = options.clears !== undefined ? options.clears : 5;

        /**
         * Number of enemy attack clears
         * @type {integer}
         */
        this.bombs = options.bombs !== undefined ? options.bombs : 5;

        /**
         * Is able to shoot
         * @type {boolean}
         */
        this.canAttack = options.canAttack !== undefined ? options.canAttack : true;

        /**
         * Unit image
         * @type Image object
         */
        this.image = new Image();

        /**
         * Image location
         * @type {String}
         */
        this.image.src = "images/carl.png";

        /**
         * Attack audio object
         * @param {object}
         */
        this.attackAudio = new Audio("audio/sfx_weapon_singleshot7.wav");

        /**
         * Attack audio object
         * @param {object}
         */
        this.damageAudio = new Audio("audio/sfx_sounds_damage3.wav");

        /**
         * User is moving
         * @type {Boolean}
         */
        this.isMoving = options.isMoving !== undefined ? options.isMoving : false;

        /**
         * Active user attacks
         * @type {Array}
         */
        this.attacks = [];
    }

    /**
     * Move the user left
     * @return this
     */
    moveLeft() {
        if(this.xPosition >= 0) {
            this.xPosition -= this.xSpeed;
        }
        return this;
    }

    /**
     * Move the user right
     * @return this
     */
    moveRight() {
        if(this.xPosition + this.getWidth() <= this.GAME.canvas.width) {
            this.xPosition += this.xSpeed;
        }
        return this;
    }

    /**
     * Reset the user's position and movement state
     */
    resetPosition() {
        this.xPosition = this.GAME.canvas.width / 2;
        this.isMoving = false;
        return this;
    }

    /**
     * Create a new attack
     * @return null
     */
    attack() {
        if(this.canAttack) {
            if(!this.GAME.isMuted) {
                this.attackAudio.play();
            }
            this.canAttack = false;
            switch(this.attackLevel) {
                case 1:
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.GAME.score -= Projectile.cost();
                    break;
                case 2:
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: true, xSpeed: 1, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: false, xSpeed: 1, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.GAME.score -= Projectile.cost();
                    break;
                case 3:
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: true, xSpeed: 1, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: false, xSpeed: 1, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.GAME.score -= Projectile.cost();
                    break;
                default:
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: true, xSpeed: 1, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: false, xSpeed: 1, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: true, xSpeed: 2, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.attacks.push(new Projectile(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, {movingRight: false, xSpeed: 2, damage: this.attackDamage}).adjustSpeed(this.attackSpeed));
                    this.GAME.score -= Projectile.cost();
            }
            setTimeout(this.resetAttack.bind(this), this.attackRate);
        }
    }

    resetAttack() {
        this.canAttack = true;
    }
}
