/**
 * Basic unit object
 */
export default class Unit {
    /**
     * Instantiate the new object
     * @param  {integer} xPos The horizontal position of the object
     * @param  {integer} yPos The vertical position of the object
     */
    constructor(GAME, xPos = 0, yPos = 0, options = {}) {

        /**
         * Set horizontal position
         * @type {integer}
         */
        this.xPosition = xPos;

        /**
         * Set vertical position
         * @type {integer}
         */
        this.yPosition = yPos;

        /**
         * Vertical movement direction
         * @type {Boolean}
         */
        this.movingUp = options.movingUp !== undefined ? options.movingUp : true;

        /**
         * Horizontal movement direction
         * @type {Boolean}
         */
        this.movingRight = options.movingRight !== undefined ? options.movingRight : true;

        /**
         * Vertical speed
         * @type {Number}
         */
        this.ySpeed = options.ySpeed !== undefined ? options.ySpeed : 5;

        /**
         * Horizontal speed
         * @type {Number}
         */
        this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 0;

        /**
         * Object width
         * @type {Number}
         */
        this.width = options.width !== undefined ? options.width : 10;

        /**
         * Object height
         * @type {Number}
         */
        this.height = options.height !== undefined ? options.height : 10;

        /**
         * Size multiplier
         * @type {Number}
         */
        this.scale = options.scale !== undefined ? options.scale : 1;

        /**
         * Current animation frame
         * @type {integer}
         */
        this.currentFrame = options.currentFrame !== undefined ? options.currentFrame : 0;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        this.frameDelay = options.frameDelay !== undefined ? options.frameDelay : 20;

        /**
         * Animation speed (number of cycles before changing frames)
         * @type {integer}
         */
        this.delayCount = options.delayCount !== undefined ? options.delayCount : 0;

        /**
         * Number of animation frames
         * @type {Number}
         */
        this.numberOfFrames = 1;

        /**
         * Death audio object
         * @param {object}
         */
        this.deathAudio = new Audio("audio/sfx_exp_short_hard3.wav");

        this.GAME = GAME;
    }

    /**
     * Draw the unit
     * @return this
     */
    draw(GAME) {
        GAME.context.drawImage(this.image, this.currentFrame * this.width, 0, this.width, this.height, this.xPosition, this.yPosition, this.getWidth(), this.getHeight());
        return this;
    }

    /**
     * [updateFrameCount description]
     * @return {[type]} [description]
     */
    updateFrame() {
        this.delayCount++;
        if (this.delayCount > this.frameDelay) {
        	this.delayCount = 0;
            if (this.currentFrame < this.numberOfFrames - 1) {
                this.currentFrame++;
            }
            else {
                this.currentFrame = 0;
            }
        }
        return this;
    }

    /**
     * Move the projectile right
     * @return this
     */
    moveRight() {
        this.xPosition += this.xSpeed;
        return this;
    }

    /**
     * Move the projectile left
     * @return this
     */
    moveLeft() {
        this.xPosition -= this.xSpeed;
        return this;
    }

    /**
     * Move the projectile up
     * @return this
     */
    moveUp() {
        this.yPosition -= this.ySpeed;
        return this;
    }

    /**
     * Move the projectile down
     * @return this
     */
    moveDown() {
        this.yPosition += this.ySpeed;
        return this;
    }

    /**
     *
     */
    move() {
        if (this.movingRight) {
            this.moveRight();
        }
        else {
            this.moveLeft();
        }
        if (this.movingUp) {
            this.moveUp();
        }
        else {
            this.moveDown();
        }
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
     *
     */
    setMovement(GAME) {
        if (this.xPosition >= GAME.canvas.width - this.width * this.scale) {
            this.movingRight = false;
        }
        else if (this.xPosition <= 0) {
            this.movingRight = true;
        }
        if (this.yPosition + this.height * this.scale >= GAME.canvas.height - 150) {
            this.movingUp = true;
        }
        else if (this.yPosition <= 0) {
            this.movingUp = false;
        }
        return this;
    }

    /**
     * Adjust speed by given multiplier
     * @param {number} number  The desired speed multiplier
     */
    adjustSpeed(number) {
        this.xSpeed = this.xSpeed * number;
        this.ySpeed = this.ySpeed * number;
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
     * Return scaled width
     * @return {number}
     */
    getWidth() {
        return this.width * this.scale;
    }

    /**
     * Return scaled height
     * @return {number}
     */
    getHeight() {
        return this.height * this.scale;
    }

    /**
     * Check if unit is out of bounds
     * @param  {object} unit The unit to check
     * @return {boolean}
     */
    checkInBounds(GAME) {
        if (this.xPosition + this.width <= 0 ||
            this.xPosition >= GAME.canvas.width ||
            this.yPosition + this.height <= 0 ||
            this.yPosition >= GAME.canvas.height)
        {
            return true;
        }
        return false;
    }
}
