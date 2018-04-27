import Environment from './Environment.js';
import Menu from './Menu.js';

import Person from './units/Person.js';
import Projectile from './units/Projectile.js';

import Bee from './units/enemies/Bee.js';

import level1 from './levels/level1.js';
import level2 from './levels/level2.js';
import level3 from './levels/level3.js';
import level4 from './levels/level4.js';
import level5 from './levels/level5.js';
import level6 from './levels/level6.js';
import level7 from './levels/level7.js';
import level8 from './levels/level8.js';
import level9 from './levels/level9.js';
import level10 from './levels/level10.js';
import level11 from './levels/level11.js';

var WebFont = require('webfontloader');

export default class Game extends Environment {
    constructor(canvasID, options = {}) {
        super();

        /**
         * Active enemies
         * @type {Array}
         */
        this.enemies = options.enemies !== undefined ? options.enemies : [];

        /**
         * Active enemy attacs
         * @type {Array}
         */
        this.enemyAttacks = options.enemyAttacks !== undefined ? options.enemyAttacks : [];

        /**
         * Active power-up objects
         * @type {Array}
         */
        this.powerUps = options.powerUps !== undefined ? options.powerUps : [];

        /**
         * Current level background
         * @type {String}
         */
        this.background = options.background !== undefined ? options.background : "background.png";

        /**
         * Current game status
         * @type {Boolean}
         */
        this.isActive = options.isActive !== undefined ? options.isActive : true;

        /**
         * Current game status
         * @type {Boolean}
         */
        this.isBoss = options.isBoss !== undefined ? options.isBoss : false;

        /**
         * Current user score
         * @type {Number}
         */
        this.score = options.score !== undefined ? options.score : 0;

        /**
         * Game speed
         * @type {Number}
         */
        this.speed = options.speed !== undefined ? options.speed : 20;

        /**
         * Current game level
         * @type {Number}
         */
        this.level = options.level !== undefined ? options.level : 1;

        /**
         * Current user lives
         * @type {Number}
         */
        this.startingLives = options.startingLives !== undefined ? options.startingLives : 10;

        /**
         * Current user lives
         * @type {Number}
         */
        this.lives = 10;

        /**
         * Current keydown listener
         * @type {}
         */
        this.keydownListener = null;

        /**
         * Current keyup listener
         * @type {}
         */
        this.keyupListener = null;

        /**
         * The player object
         * @type {Person}
         */
        this.user = null;

        /**
         * Set the canvas
         * @type {[type]}
         */
        this.canvas = document.getElementById(canvasID);

        this.menu = new Menu(this);

        window.addEventListener("load", this.loadAssets.bind(this));
    }

    loadAssets() {
        WebFont.load({
            google: {
                families: ['Creepster', 'Press Start 2P']
            },
            active: this.menu.init.bind(this.menu)
        });
    }

    /**
     * Increment the score
     * @param  {integer} points Points to increment
     * @return null
     */
    incrementScore(points) {
        this.score += points;
    }

    /**
     * Draw the background
     * @return null
     */
    drawBackground() {
        var background = new Image();
        background.src = "images/" + this.background;
        this.canvas.style.backgroundSize = "cover";
        this.canvas.style.backgroundImage = "url(images/" + this.background + ")";
    }

    /**
     * Initialize the canvas
     * @return null
     */
    initCanvas() {
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 900;
        this.canvas.height = 600;
    }

    /**
     * Clear the canvas
     * @return null
     */
    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Initialize current level
     * @param  {integer} number [The current level number]
     * @return null
     */
    initLevel(menu = null) {
        switch (this.level) {
            case 1:
                level1(this, this.user, menu);
                break;
            case 2:
                level2(this);
                break;
            case 3:
                level3(this);
                break;
            case 4:
                level4(this);
                break;
            case 5:
                level5(this);
                break;
            case 6:
                level6(this);
                break;
            case 7:
                level7(this);
                break;
            case 8:
                level8(this);
                break;
            case 9:
                level9(this);
                break;
            case 10:
                level10(this);
                break;
            default:
                level11(this);
        }
    }

    /**
     * The main function is the central controller for the
     * game. This determines what actions are carried out
     * in each frame/cycle of the game.
     * @return null
     */
    main() {
        if(this.isActive) {
            this.setEnemyMovement();
            this.moveEnemies();
            this.moveUser();
            this.moveAttacks();
            this.moveEnemyAttacks();
            this.movePowerUps();
            this.createEnemyAttacks();
            this.createUserAttacks();
            this.checkHit();
            this.checkDamage();
            this.checkPowerUps();
            this.animateEnemies();
        }
        this.clearCanvas();
        if(this.isBoss) {
            if (this.enemies.length) {
                this.enemies[0].drawHealthContainer();
                this.enemies[0].drawHealth();
            }
        }
        this.drawEnemies();
        this.user.draw(this);
        this.drawPowerUps();
        this.drawAttacks();
        this.drawEnemyAttacks();
        this.drawScore();
        this.drawLevel();
        this.drawLives();
        this.drawClears();
        this.drawBombs();
        this.drawAudio();
        if(!this.isActive) {
            this.drawPaused();
        }
        this.checkWin();
        this.checkLoss();
        if(this.isActive) {
            setTimeout(this.main.bind(this), this.speed);
        }
    }

    /**
     * Draw all user attacks onto the canvas
     * @return null
     */
    drawAttacks() {
        for(let i = 0; i < this.user.attacks.length; i++) {
            this.user.attacks[i].draw(this);
        }
    }

    /**
     * Move all user attacks
     * @return null
     */
    moveAttacks() {
        for(let i = 0; i < this.user.attacks.length; i++) {
            this.user.attacks[i].move();
        }
    }

    /**
     * Generate enemy attacks
     * @return null
     */
    createEnemyAttacks() {
        for(let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].attack();
        }
    }

    /**
     * Create user attacks
     * @return null
     */
    createUserAttacks() {
        if(this.user.isAttacking) {
            this.user.attack();
        }
    }

    /**
     * Draw enemy attacks to the canvas
     * @return null
     */
    drawEnemyAttacks() {
        for(let i = 0; i < this.enemyAttacks.length; i++) {
            this.enemyAttacks[i].draw(this);
        }
    }

    /**
     * Move enemy attacks
     * @return null
     */
    moveEnemyAttacks() {
        for(let i = 0; i < this.enemyAttacks.length; i++) {
            this.enemyAttacks[i].moveDown();
        }
    }

    /**
     * Draw the paused screen
     * @return null
     */
    drawPaused() {
        this.context.textAlign = "center";
        this.context.fillStyle = "black";
        this.context.fillText("Paused", this.canvas.width/2, this.canvas.height/2);
    }

    /**
     * Check if any enemies have been hit by user attacks
     * @return null
     */
    checkHit() {
        for(let i = 0; i < this.user.attacks.length; i++) {
            for(let j = 0; j < this.enemies.length; j++) {
                if(this.hitChecker(this.user.attacks[i], this.enemies[j])) {
                    this.resolveHit(this.enemies[j], this.user.attacks[i], i, j);
                    break;
                }
                else {
                    if (this.user.attacks[i].checkInBounds(this)) {
                        this.user.attacks.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }

    /**
     * Handle enemy being hit
     * @param  {object} enemy  The enemy object that was hit
     * @param  {object} attack The projectile object that hit the enemy
     * @param  {integer} i     The attack's position in the attacks array
     * @param  {integer} j     The enemy's position in the enemies array
     * @return null
     */
    resolveHit(enemy, attack, i, j) {
        enemy.health -= attack.damage;
        if (enemy.health <= 0) {
            enemy.onDeath();
            this.enemies.splice(j, 1);
        }
        this.user.attacks.splice(i, 1);
    }

    /**
     * Check if the objects have collided
     * @param  {object} object1 The first object being tested
     * @param  {object} object2 The second object being tested
     * @return {boolean}
     */
    hitChecker(object1, object2) {
        if (object1.xPosition + object1.width * object1.scale >= object2.xPosition &&
            object1.xPosition <= object2.xPosition + object2.width * object2.scale &&
            object1.yPosition + object1.height * object1.scale >= object2.yPosition &&
            object1.yPosition <= object2.yPosition + object2.height * object2.scale)
        {
            return true;
        }
        return false;
    }

    /**
     * Check if user has been hit by any enemy attacks
     * @return null
     */
    checkDamage() {
        for(let i = 0; i < this.enemyAttacks.length; i++) {
            if(this.hitChecker(this.enemyAttacks[i], this.user)) {
                this.enemyAttacks.splice(i, 1);
                this.lives--;
                if(!this.isMuted) {
                    this.user.damageAudio.play();
                }
            }
            else {
                if (this.enemyAttacks[i].checkInBounds(this)) {
                    this.enemyAttacks.splice(i, 1);
                }
            }
        }
    }

    /**
     * Check if user has collected any power-ups
     * @return null
     */
    checkPowerUps() {
        for(let i = 0; i < this.powerUps.length; i++) {
            if(this.hitChecker(this.powerUps[i], this.user)) {
                this.powerUps[i].onCollect();
                this.powerUps.splice(i, 1);
            }
            else {
                if (this.powerUps[i].checkInBounds(this)) {
                    this.powerUps.splice(i, 1);
                }
            }
        }
    }

    /**
     * Check if all enemies have been destroyed
     * @return null
     */
    checkWin() {
        if(!this.enemies.length) {
            this.resolveWin();
        }
    }

    /**
     * Prepare for next level
     * @return null
     */
    resolveWin() {
        this.clearCanvas();
        this.isActive = false;
        this.isBoss = false;
        this.user.isAttacking = false;
        this.user.attacks = [];
        this.enemyAttacks = [];
        this.powerUps = [];
        this.drawWin();
        this.level++;
        window.removeEventListener("keydown", this.keydownListener);
        window.removeEventListener("keyup", this.keyupListener);
        var menu = new Menu(this);
        this.keydownListener = menu.controlsKeydownStart.bind(menu);
        window.addEventListener("keydown", this.keydownListener);
    }

    /**
     * Check if user has lost
     * @return null
     */
    checkLoss() {
        if(this.lives <= 0) {
            this.resolveLoss();
        }
    }

    /**
     * User has lost, so reset the game
     * @return null
     */
    resolveLoss() {
        this.clearCanvas();
        this.drawLoss();
        this.resetGame();
        window.removeEventListener("keydown", this.keydownListener);
        window.removeEventListener("keyup", this.keyupListener);
        var menu = new Menu(this);
        menu.units.push(new Bee(this, this.canvas.width / 2, this.canvas.height / 2, {attackRate: 0, ySpeed: 1}).randomizeMovement());
        this.keydownListener = menu.controlsKeydownStart.bind(menu);
        window.addEventListener("keydown", this.keydownListener);
    }

    /**
     * Reset the game
     * @return null
     */
    resetGame() {
        this.user = new Person(this, this.canvas.width / 2, this.canvas.height - 100);
        this.isActive = false;
        this.isBoss = false;
        this.level = 1;
        this.lives = this.startingLives;
        this.score = 0;
        this.enemies = [];
        this.enemyAttacks = [];
        this.powerUps = [];
        this.user.attacks = [];
    }

    /**
     * Controls for keydown events
     * @param  {event} event The event
     * @return null
     */
    controlsKeydownLevel(event) {
        if (event.keyCode === 13) {
            if (this.isActive) {
                this.isActive = false;
            }
            else {
                this.isActive = true;
                this.main();
            }
        }
        else if (event.keyCode === 32) {
            this.user.isAttacking = true;
        }
        else if (event.keyCode === 37) {
            this.user.isMoving = true;
            this.user.movingRight = false;
            this.keyCode = event.keyCode;
        }
        else if (event.keyCode === 39) {
            this.user.isMoving = true;
            this.user.movingRight = true;
            this.keyCode = event.keyCode;
        }
        else if (event.keyCode === 65) {
            if (this.user.clears >= 1) {
                this.user.clears--;
                this.enemyAttacks = [];
            }
        }
        else if (event.keyCode === 68) {
            if (this.user.bombs >= 1) {
                this.user.bombs--;
                this.createBomb();
            }
        }
        else if (event.keyCode === 77) {
            if(this.isMuted) {
                this.audio.muted = false;
            }
            else {
                this.audio.muted = true;
            }
            this.isMuted = !this.isMuted;
            if(!this.isActive) {
                this.main();
            }
        }
    }

    /**
     * Controls for keyup events
     * @param  {event} event The event
     * @return null
     */
    controlsKeyupLevel(event) {
        if(this.isActive) {
            if (event.keyCode === 32) {
                this.user.isAttacking = false;
            }
            else if (event.keyCode === 37 && this.keyCode == event.keyCode) {
                this.user.isMoving = false;
            }
            else if (event.keyCode === 39 && this.keyCode == event.keyCode) {
                this.user.isMoving = false;
            }
        }
    }

    /**
     * Move the user
     * @return null
     */
    moveUser() {
        if(this.user.isMoving) {
            if(this.user.movingRight) {
                this.user.moveRight();
            }
            else {
                this.user.moveLeft();
            }
        }
    }

    /**
     * Draw all enemies
     * @return null
     */
    drawEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw(this);
        }
    }

    /**
     * Update current animation frame for all enemies
     * @return null
     */
    animateEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].updateFrame();
        }
    }

    /**
     * Draw all power-ups
     * @return {[type]} [description]
     */
    drawPowerUps() {
        for (let i = 0; i < this.powerUps.length; i++) {
            this.powerUps[i].draw(this);
        }
    }

    /**
     * Move all power-ups
     * @return null
     */
    movePowerUps() {
        for (let i = 0; i < this.powerUps.length; i++) {
            this.powerUps[i].moveDown();
        }
    }

    /**
     * Move all enemies
     * @return {[type]} [description]
     */
    moveEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].move();
        }
    }

    /**
     * Draw the audio icon
     * @return null
     */
    drawAudio() {
        var icon = new Image();
        if(this.isMuted) {
            icon.src = "images/volume-off.png";
        }
        else {
            icon.src = "images/volume-on.png";
        }
        this.context.drawImage(icon, 10, this.canvas.height - 50);
    }

    /**
     * Draw the current score
     * @return null
     */
    drawScore() {
        this.context.textAlign = "left";
        this.context.fillStyle = "black";
        this.context.font = "20px 'Press Start 2P', cursive";
        this.context.fillText("Score: " + this.score, 10, 35);
    }

    /**
     * Draw the current level counter
     * @return null
     */
    drawLevel() {
        this.context.textAlign = "center";
        this.context.fillStyle = "black";
        this.context.fillText("Level: " + this.level, this.canvas.width / 2, 35);
    }

    /**
     * Draw the current lives counter
     * @return null
     */
    drawLives() {
        var image = new Image();
        image.src = "images/extra-life.png";

        if (this.lives <= 5) {
            for(let i = 0; i < this.lives; i++) {
                this.context.drawImage(image, (this.canvas.width - 10) - (35 * (i + 1)), 10, 25, 25);
            }
        }
        else {
            this.context.drawImage(image, this.canvas.width - 125, 10, 25, 25);
            this.context.textAlign = "left";
            this.context.fillStyle = "black";
            this.context.fillText("x" + this.lives, this.canvas.width - 90, 35);
        }
    }

    /**
     * Draw the current lives counter
     * @return null
     */
    drawClears() {
        var image = new Image();
        image.src = "images/blue.png";

        if (this.user.clears <= 4) {
            for(let i = 0; i < this.user.clears; i++) {
                this.context.drawImage(image, (this.canvas.width - 10) - (35 * (i + 1)), 45, 25, 25);
            }
        }
        else {
            this.context.drawImage(image, this.canvas.width - 125, 45, 25, 25);
            this.context.textAlign = "left";
            this.context.fillStyle = "black";
            this.context.fillText("x" + this.user.clears, this.canvas.width - 90, 70);
        }
    }

    /**
     * Draw the current lives counter
     * @return null
     */
    drawBombs() {
        var image = new Image();
        image.src = "images/white.png";

        if (this.user.bombs <= 4) {
            for(let i = 0; i < this.user.bombs; i++) {
                this.context.drawImage(image, (this.canvas.width - 10) - (35 * (i + 1)), 80, 25, 25);
            }
        }
        else {
            this.context.drawImage(image, this.canvas.width - 125, 80, 25, 25);
            this.context.textAlign = "left";
            this.context.fillStyle = "black";
            this.context.fillText("x" + this.user.bombs, this.canvas.width - 90, 105);
        }
    }

    /**
     * Draw level complete screen
     * @return null
     */
    drawWin() {
        this.context.textAlign = "center";
        this.context.fillText("Level " + this.level + " complete!", this.canvas.width/2, this.canvas.height/2);
        this.context.fillText("Press Enter to Start Next Level", this.canvas.width/2, this.canvas.height/2 + 35);
        this.context.fillText("Score: " + this.score, this.canvas.width/2, this.canvas.height/2 + 65);
    }

    /**
     * Draw game over screen
     * @return null
     */
    drawLoss() {
        this.context.textAlign = "center";
        this.context.fillText("Game Over", this.canvas.width/2, this.canvas.height/2);
        this.context.fillText("Press Enter to Restart", this.canvas.width/2, this.canvas.height/2 + 35);
        this.context.fillText("Final Score: " + this.score, this.canvas.width/2, this.canvas.height/2 + 65);
    }

    /**
     * Set movement direction for all enemies
     * @return null
     */
    setEnemyMovement() {
        for (let i = 0; i < this.enemies.length; i++) {
            for (let j = 0; j < this.enemies.length; j++) {
                if(i != j) {
                    this.checkCollision(this.enemies[i], this.enemies[j]);
                }
            }
            this.enemies[i].setMovement(this);
        }
    }

    /**
     * Check if the enemies are colliding, and change movement directions if so
     * @param  {object} unit1 First unit
     * @param  {object} unit2 Second unit
     * @return null
     */
    checkCollision(unit1, unit2) {
        var dx = (unit1.xPosition + unit1.width * unit1.scale / 2) - (unit2.xPosition + unit2.width * unit2.scale / 2);
        var dy = (unit1.yPosition + unit1.height * unit1.scale / 2) - (unit2.yPosition + unit2.height * unit2.scale / 2);
        var width = (unit1.width * unit1.scale + unit2.width * unit2.scale) / 2;
        var height = (unit1.height * unit1.scale + unit2.height * unit2.scale ) / 2;
        var crossWidth = width * dy;
        var crossHeight = height * dx;

        if(Math.abs(dx) <= width && Math.abs(dy) <= height){
            if(crossWidth > crossHeight){
                if (crossWidth > -crossHeight) {
                    // unit1 top collision
                    // unit2 bottom collision
                    unit1.movingUp = false;
                    unit2.movingUp = true;
                }
                else {
                    // unit1 right collision
                    // unit2 left collision
                    unit1.movingRight = false;
                    unit2.movingRight = true;
                }
            }
            else {
                if (crossWidth > -crossHeight) {
                    // unit1 left collision
                    // unit2 right collision
                    unit1.movingRight = true;
                    unit2.movingRight = false;
                }
                else {
                    // unit1 bottom collision
                    // unit2 top collision
                    unit1.movingUp = true;
                    unit2.MovingUp = false;
                }
            }
        }
    }

    /**
     * Create a new bomb (specifically new projectiles)
     * @return null
     */
    createBomb() {
        var x = Math.floor(this.canvas.width/10 + Math.random() * this.canvas.width * 0.8);
        var y = Math.floor(this.canvas.height/10 + Math.random() * this.canvas.height * 0.8);
        for (let i = 0; i < 25; i++) {
            this.user.attacks.push(new Projectile(this, x, y, {damage: this.user.attackDamage}).randomizeMovement().randomizeSpeed());
        }
        if(!this.isMuted) {
            this.audio5.play();
        }
    }
}
