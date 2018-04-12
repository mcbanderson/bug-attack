import Unit from '../Unit.js';
import Projectile from '../Projectile.js';

import AttackDamageUpgrade from '../upgrades/AttackDamageUpgrade.js';
import AttackRateUpgrade from '../upgrades/AttackRateUpgrade.js';
import AttackSpeedUpgrade from '../upgrades/AttackSpeedUpgrade.js';
import ExtraBoardClear from '../upgrades/ExtraBoardClear.js';
import ExtraBomb from '../upgrades/ExtraBomb.js';
import ExtraLife from '../upgrades/ExtraLife.js';
import SizeUpgrade from '../upgrades/SizeUpgrade.js';
import SpeedUpgrade from '../upgrades/SpeedUpgrade.js';
import WeaponUpgrade from '../upgrades/WeaponUpgrade.js';

export default class Enemy extends Unit {

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
        this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 1;

        /**
         * Vertical speed
         * @type {Number}
         */
        this.ySpeed = options.ySpeed !== undefined ? options.ySpeed : 0;

        /**
         * Point value
         * @type {Number}
         */
        this.points = options.points !== undefined ? options.points : 10;

        /**
         * Size multiplier
         * @type {Number}
         */
        this.scale = options.scale !== undefined ? options.scale : 1;

        /**
         * Object width
         * @type {Number}
         */
        this.width = options.width !== undefined ? options.width : 50;

        /**
         * Object height
         * @type {Number}
         */
        this.height = options.height !== undefined ? options.height : 50;

        /**
         * Enemy attack rate, between 0 and 1 where 1 is fastest
         * @type {number}
         */
        this.attackRate = options.attackRate !== undefined ? options.attackRate : 0.0025;

        /**
         * Percentage chance to drop power-ups
         * @type {Number}
         */
        this.dropMultiplier = options.dropMultiplier !== undefined ? options.dropMultiplier : 1;

        /**
         * Health total
         * @type {Number}
         */
        this.startingHealth = options.startingHealth !== undefined ? options.startingHealth : 2;

        /**
         * Health total
         * @type {Number}
         */
        this.health = options.health !== undefined ? options.health : 2;
    }

    /**
     * Create a new attack
     * @return this
     */
    attack() {
        if(Math.random() >= 1 - this.attackRate) {
            this.GAME.enemyAttacks.push(new Projectile(this.GAME, this.xPosition + this.getWidth() / 2, this.yPosition + this.getHeight(), {ySpeed: 3, src: "images/projectile2.png"}));
        }
        return this;
    }

    /**
     * Randomize unit attack rate
     * @param  {number} min  Minimum attack rate
     * @param  {number} max  Maximum attack rate
     * @return this
     */
    randomizeAttackRate(min = 0, max = 1) {
        this.attackRate = Math.floor(min + Math.random() * (max - min + 1));
        return this;
    }

    /**
     * Randomize horizontal speed
     * @param  {number} min  Minimum speed
     * @param  {number} max  Maximum speed
     * @return this
     */
    randomizeXSpeed(min = 1, max = 10) {
        this.xSpeed = Math.floor(min + Math.random() * (max - min + 1));
        return this;
    }

    /**
     * Randomize vertical speed
     * @param  {number} min  Minimum speed
     * @param  {number} max  Maximum speed
     * @return this
     */
    randomizeYSpeed(min = 1, max = 10) {
        this.ySpeed = Math.floor(min + Math.random() * (max - min + 1));
        return this;
    }

    randomizeSpeed(min = 1, max = 10) {
        this.randomizeXSpeed(min, max);
        this.randomizeYSpeed(min, max);
        return this;
    }

    /**
     * Randomize horizontal movement direction
     * @return this
     */
    randomizeXMovement() {
        this.movingRight = Math.floor(Math.random() * 2) ? true : false;
        return this;
    }

    /**
     * Randomize vertical movement direction
     * @return this
     */
    randomizeYMovement() {
        this.movingUp = Math.floor(Math.random() * 2) ? true : false;
        return this;
    }

    /**
     * Randomize vertical and horizontal movement directions
     * @return this
     */
    randomizeMovement() {
        this.randomizeXMovement();
        this.randomizeYMovement();
        return this;
    }

    /**
     * Drop a power-up
     * @return this
     */
    dropPowerUps() {
        if(Math.random() >= 1 - ExtraLife.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new ExtraLife(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - WeaponUpgrade.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new WeaponUpgrade(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - SpeedUpgrade.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new SpeedUpgrade(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - SizeUpgrade.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new SizeUpgrade(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - AttackRateUpgrade.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new AttackRateUpgrade(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - AttackDamageUpgrade.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new AttackDamageUpgrade(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - AttackSpeedUpgrade.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new AttackSpeedUpgrade(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - ExtraBoardClear.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new ExtraBoardClear(this.GAME, this.xPosition, this.yPosition));
        }
        if(Math.random() >= 1 - ExtraBomb.dropRate() * this.dropMultiplier) {
            this.GAME.powerUps.push(new ExtraBomb(this.GAME, this.xPosition, this.yPosition));
        }
        return this;
    }

    /**
     * Trigger death events
     * @return this
     */
    onDeath() {
        this.GAME.incrementScore(this.points);
        if(!this.GAME.isMuted) {
            this.deathAudio.play();
        }
        this.dropPowerUps();
        return this;
    }
}
