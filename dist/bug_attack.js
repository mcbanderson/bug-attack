(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = function Environment() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Environment);

  /**
   * Active enemies
   * @type {Array}
   */
  this.units = options.units !== undefined ? options.units : [];

  /**
   * Current level background
   * @type {String}
   */
  this.background = options.background !== undefined ? options.background : "background.png";

  /**
   * Game speed
   * @type {Number}
   */
  this.speed = options.speed !== undefined ? options.speed : 20;

  /**
   * Is game active
   * @type {object}
   */
  this.isActive = options.isActive !== undefined ? options.isActive : true;

  /**
   * Death audio object
   * @param {object}
   */
  this.audio = new Audio("audio/axelf.mp3");

  /**
   * Is game muted
   * @type {Boolean}
   */
  this.isMuted = false;

  /**
   * Audio object 1
   * @param {object}
   */
  this.audio1 = new Audio("audio/sfx_exp_short_hard3.wav");

  /**
   * Attack audio object
   * @param {object}
   */
  this.audio2 = new Audio("audio/sfx_weapon_singleshot7.wav");

  /**
   * Damage audio object
   * @param {object}
   */
  this.audio3 = new Audio("audio/sfx_sounds_damage3.wav");

  /**
   * Collection audio object
   * @param {object}
   */
  this.audio4 = new Audio("audio/sfx_sounds_powerup2.wav");

  /**
   * Collection audio object
   * @param {object}
   */
  this.audio5 = new Audio("audio/sfx_exp_medium7.wav");

  /**
   * Death audio object
   * @param {object}
   */
  this.audio6 = new Audio("audio/sfx_exp_short_hard3.wav");
};

exports.default = Environment;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Environment2 = require('./Environment.js');

var _Environment3 = _interopRequireDefault(_Environment2);

var _Menu = require('./Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

var _Person = require('./units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Projectile = require('./units/Projectile.js');

var _Projectile2 = _interopRequireDefault(_Projectile);

var _Bee = require('./units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _level = require('./levels/level1.js');

var _level2 = _interopRequireDefault(_level);

var _level3 = require('./levels/level2.js');

var _level4 = _interopRequireDefault(_level3);

var _level5 = require('./levels/level3.js');

var _level6 = _interopRequireDefault(_level5);

var _level7 = require('./levels/level4.js');

var _level8 = _interopRequireDefault(_level7);

var _level9 = require('./levels/level5.js');

var _level10 = _interopRequireDefault(_level9);

var _level11 = require('./levels/level6.js');

var _level12 = _interopRequireDefault(_level11);

var _level13 = require('./levels/level7.js');

var _level14 = _interopRequireDefault(_level13);

var _level15 = require('./levels/level8.js');

var _level16 = _interopRequireDefault(_level15);

var _level17 = require('./levels/level9.js');

var _level18 = _interopRequireDefault(_level17);

var _level19 = require('./levels/level10.js');

var _level20 = _interopRequireDefault(_level19);

var _level21 = require('./levels/level11.js');

var _level22 = _interopRequireDefault(_level21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Environment) {
    _inherits(Game, _Environment);

    function Game() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Game);

        /**
         * Active enemies
         * @type {Array}
         */
        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

        _this.enemies = options.enemies !== undefined ? options.enemies : [];

        /**
         * Active enemy attacs
         * @type {Array}
         */
        _this.enemyAttacks = options.enemyAttacks !== undefined ? options.enemyAttacks : [];

        /**
         * Active power-up objects
         * @type {Array}
         */
        _this.powerUps = options.powerUps !== undefined ? options.powerUps : [];

        /**
         * Current level background
         * @type {String}
         */
        _this.background = options.background !== undefined ? options.background : "background.png";

        /**
         * Current game status
         * @type {Boolean}
         */
        _this.isActive = options.isActive !== undefined ? options.isActive : true;

        /**
         * Current game status
         * @type {Boolean}
         */
        _this.isBoss = options.isBoss !== undefined ? options.isBoss : false;

        /**
         * Current user score
         * @type {Number}
         */
        _this.score = options.score !== undefined ? options.score : 0;

        /**
         * Game speed
         * @type {Number}
         */
        _this.speed = options.speed !== undefined ? options.speed : 20;

        /**
         * Current game level
         * @type {Number}
         */
        _this.level = options.level !== undefined ? options.level : 1;

        /**
         * Current user lives
         * @type {Number}
         */
        _this.startingLives = options.startingLives !== undefined ? options.startingLives : 10;

        /**
         * Current user lives
         * @type {Number}
         */
        _this.lives = 10;

        /**
         * Current keydown listener
         * @type {}
         */
        _this.keydownListener = null;

        /**
         * Current keyup listener
         * @type {}
         */
        _this.keyupListener = null;

        /**
         * The player object
         * @type {Person}
         */
        _this.user = null;
        return _this;
    }

    /**
     * Increment the score
     * @param  {integer} points Points to increment
     * @return null
     */


    _createClass(Game, [{
        key: 'incrementScore',
        value: function incrementScore(points) {
            this.score += points;
        }

        /**
         * Draw the background
         * @return null
         */

    }, {
        key: 'drawBackground',
        value: function drawBackground() {
            var background = new Image();
            background.src = "images/" + this.background;
            this.canvas.style.backgroundSize = "cover";
            this.canvas.style.backgroundImage = "url(images/" + this.background + ")";
        }

        /**
         * Initialize the canvas
         * @return null
         */

    }, {
        key: 'initCanvas',
        value: function initCanvas() {
            this.canvas = document.getElementById("canvas");
            this.context = this.canvas.getContext("2d");
            this.canvas.width = 900;
            this.canvas.height = 600;
        }

        /**
         * Clear the canvas
         * @return null
         */

    }, {
        key: 'clearCanvas',
        value: function clearCanvas() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        /**
         * Initialize current level
         * @param  {integer} number [The current level number]
         * @return null
         */

    }, {
        key: 'initLevel',
        value: function initLevel() {
            var menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            switch (this.level) {
                case 1:
                    (0, _level2.default)(this, this.user, menu);
                    break;
                case 2:
                    (0, _level4.default)(this);
                    break;
                case 3:
                    (0, _level6.default)(this);
                    break;
                case 4:
                    (0, _level8.default)(this);
                    break;
                case 5:
                    (0, _level10.default)(this);
                    break;
                case 6:
                    (0, _level12.default)(this);
                    break;
                case 7:
                    (0, _level14.default)(this);
                    break;
                case 8:
                    (0, _level16.default)(this);
                    break;
                case 9:
                    (0, _level18.default)(this);
                    break;
                case 10:
                    (0, _level20.default)(this);
                    break;
                default:
                    (0, _level22.default)(this);
            }
        }

        /**
         * The main function is the central controller for the
         * game. This determines what actions are carried out
         * in each frame/cycle of the game.
         * @return null
         */

    }, {
        key: 'main',
        value: function main() {
            if (this.isActive) {
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
            if (this.isBoss) {
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
            if (!this.isActive) {
                this.drawPaused();
            }
            this.checkWin();
            this.checkLoss();
            if (this.isActive) {
                setTimeout(this.main.bind(this), this.speed);
            }
        }

        /**
         * Draw all user attacks onto the canvas
         * @return null
         */

    }, {
        key: 'drawAttacks',
        value: function drawAttacks() {
            for (var i = 0; i < this.user.attacks.length; i++) {
                this.user.attacks[i].draw(this);
            }
        }

        /**
         * Move all user attacks
         * @return null
         */

    }, {
        key: 'moveAttacks',
        value: function moveAttacks() {
            for (var i = 0; i < this.user.attacks.length; i++) {
                this.user.attacks[i].move();
            }
        }

        /**
         * Generate enemy attacks
         * @return null
         */

    }, {
        key: 'createEnemyAttacks',
        value: function createEnemyAttacks() {
            for (var i = 0; i < this.enemies.length; i++) {
                this.enemies[i].attack();
            }
        }

        /**
         * Create user attacks
         * @return null
         */

    }, {
        key: 'createUserAttacks',
        value: function createUserAttacks() {
            if (this.user.isAttacking) {
                this.user.attack();
            }
        }

        /**
         * Draw enemy attacks to the canvas
         * @return null
         */

    }, {
        key: 'drawEnemyAttacks',
        value: function drawEnemyAttacks() {
            for (var i = 0; i < this.enemyAttacks.length; i++) {
                this.enemyAttacks[i].draw(this);
            }
        }

        /**
         * Move enemy attacks
         * @return null
         */

    }, {
        key: 'moveEnemyAttacks',
        value: function moveEnemyAttacks() {
            for (var i = 0; i < this.enemyAttacks.length; i++) {
                this.enemyAttacks[i].moveDown();
            }
        }

        /**
         * Draw the paused screen
         * @return null
         */

    }, {
        key: 'drawPaused',
        value: function drawPaused() {
            this.context.textAlign = "center";
            this.context.fillStyle = "black";
            this.context.fillText("Paused", this.canvas.width / 2, this.canvas.height / 2);
        }

        /**
         * Check if any enemies have been hit by user attacks
         * @return null
         */

    }, {
        key: 'checkHit',
        value: function checkHit() {
            for (var i = 0; i < this.user.attacks.length; i++) {
                for (var j = 0; j < this.enemies.length; j++) {
                    if (this.hitChecker(this.user.attacks[i], this.enemies[j])) {
                        this.resolveHit(this.enemies[j], this.user.attacks[i], i, j);
                        break;
                    } else {
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

    }, {
        key: 'resolveHit',
        value: function resolveHit(enemy, attack, i, j) {
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

    }, {
        key: 'hitChecker',
        value: function hitChecker(object1, object2) {
            if (object1.xPosition + object1.width * object1.scale >= object2.xPosition && object1.xPosition <= object2.xPosition + object2.width * object2.scale && object1.yPosition + object1.height * object1.scale >= object2.yPosition && object1.yPosition <= object2.yPosition + object2.height * object2.scale) {
                return true;
            }
            return false;
        }

        /**
         * Check if user has been hit by any enemy attacks
         * @return null
         */

    }, {
        key: 'checkDamage',
        value: function checkDamage() {
            for (var i = 0; i < this.enemyAttacks.length; i++) {
                if (this.hitChecker(this.enemyAttacks[i], this.user)) {
                    this.enemyAttacks.splice(i, 1);
                    this.lives--;
                    if (!this.isMuted) {
                        this.user.damageAudio.play();
                    }
                } else {
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

    }, {
        key: 'checkPowerUps',
        value: function checkPowerUps() {
            for (var i = 0; i < this.powerUps.length; i++) {
                if (this.hitChecker(this.powerUps[i], this.user)) {
                    this.powerUps[i].onCollect();
                    this.powerUps.splice(i, 1);
                } else {
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

    }, {
        key: 'checkWin',
        value: function checkWin() {
            if (!this.enemies.length) {
                this.resolveWin();
            }
        }

        /**
         * Prepare for next level
         * @return null
         */

    }, {
        key: 'resolveWin',
        value: function resolveWin() {
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
            var menu = new _Menu2.default(this);
            this.keydownListener = menu.controlsKeydownStart.bind(menu);
            window.addEventListener("keydown", this.keydownListener);
        }

        /**
         * Check if user has lost
         * @return null
         */

    }, {
        key: 'checkLoss',
        value: function checkLoss() {
            if (this.lives <= 0) {
                this.resolveLoss();
            }
        }

        /**
         * User has lost, so reset the game
         * @return null
         */

    }, {
        key: 'resolveLoss',
        value: function resolveLoss() {
            this.clearCanvas();
            this.drawLoss();
            this.resetGame();
            window.removeEventListener("keydown", this.keydownListener);
            window.removeEventListener("keyup", this.keyupListener);
            var menu = new _Menu2.default(this);
            menu.units.push(new _Bee2.default(this, this.canvas.width / 2, this.canvas.height / 2, { attackRate: 0, ySpeed: 1 }).randomizeMovement());
            this.keydownListener = menu.controlsKeydownStart.bind(menu);
            window.addEventListener("keydown", this.keydownListener);
        }

        /**
         * Reset the game
         * @return null
         */

    }, {
        key: 'resetGame',
        value: function resetGame() {
            this.user = new _Person2.default(this, this.canvas.width / 2, this.canvas.height - 100);
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

    }, {
        key: 'controlsKeydownLevel',
        value: function controlsKeydownLevel(event) {
            if (event.keyCode === 13) {
                if (this.isActive) {
                    this.isActive = false;
                } else {
                    this.isActive = true;
                    this.main();
                }
            } else if (event.keyCode === 32) {
                this.user.isAttacking = true;
            } else if (event.keyCode === 37) {
                this.user.isMoving = true;
                this.user.movingRight = false;
                this.keyCode = event.keyCode;
            } else if (event.keyCode === 39) {
                this.user.isMoving = true;
                this.user.movingRight = true;
                this.keyCode = event.keyCode;
            } else if (event.keyCode === 65) {
                if (this.user.clears >= 1) {
                    this.user.clears--;
                    this.enemyAttacks = [];
                }
            } else if (event.keyCode === 68) {
                if (this.user.bombs >= 1) {
                    this.user.bombs--;
                    this.createBomb();
                }
            } else if (event.keyCode === 77) {
                if (this.isMuted) {
                    this.audio.muted = false;
                } else {
                    this.audio.muted = true;
                }
                this.isMuted = !this.isMuted;
                if (!this.isActive) {
                    this.main();
                }
            }
        }

        /**
         * Controls for keyup events
         * @param  {event} event The event
         * @return null
         */

    }, {
        key: 'controlsKeyupLevel',
        value: function controlsKeyupLevel(event) {
            if (this.isActive) {
                if (event.keyCode === 32) {
                    this.user.isAttacking = false;
                } else if (event.keyCode === 37 && this.keyCode == event.keyCode) {
                    this.user.isMoving = false;
                } else if (event.keyCode === 39 && this.keyCode == event.keyCode) {
                    this.user.isMoving = false;
                }
            }
        }

        /**
         * Move the user
         * @return null
         */

    }, {
        key: 'moveUser',
        value: function moveUser() {
            if (this.user.isMoving) {
                if (this.user.movingRight) {
                    this.user.moveRight();
                } else {
                    this.user.moveLeft();
                }
            }
        }

        /**
         * Draw all enemies
         * @return null
         */

    }, {
        key: 'drawEnemies',
        value: function drawEnemies() {
            for (var i = 0; i < this.enemies.length; i++) {
                this.enemies[i].draw(this);
            }
        }

        /**
         * Update current animation frame for all enemies
         * @return null
         */

    }, {
        key: 'animateEnemies',
        value: function animateEnemies() {
            for (var i = 0; i < this.enemies.length; i++) {
                this.enemies[i].updateFrame();
            }
        }

        /**
         * Draw all power-ups
         * @return {[type]} [description]
         */

    }, {
        key: 'drawPowerUps',
        value: function drawPowerUps() {
            for (var i = 0; i < this.powerUps.length; i++) {
                this.powerUps[i].draw(this);
            }
        }

        /**
         * Move all power-ups
         * @return null
         */

    }, {
        key: 'movePowerUps',
        value: function movePowerUps() {
            for (var i = 0; i < this.powerUps.length; i++) {
                this.powerUps[i].moveDown();
            }
        }

        /**
         * Move all enemies
         * @return {[type]} [description]
         */

    }, {
        key: 'moveEnemies',
        value: function moveEnemies() {
            for (var i = 0; i < this.enemies.length; i++) {
                this.enemies[i].move();
            }
        }

        /**
         * Draw the audio icon
         * @return null
         */

    }, {
        key: 'drawAudio',
        value: function drawAudio() {
            var icon = new Image();
            if (this.isMuted) {
                icon.src = "images/volume-off.png";
            } else {
                icon.src = "images/volume-on.png";
            }
            this.context.drawImage(icon, 10, this.canvas.height - 50);
        }

        /**
         * Draw the current score
         * @return null
         */

    }, {
        key: 'drawScore',
        value: function drawScore() {
            this.context.textAlign = "left";
            this.context.fillStyle = "black";
            this.context.font = "20px 'Press Start 2P', cursive";
            this.context.fillText("Score: " + this.score, 10, 35);
        }

        /**
         * Draw the current level counter
         * @return null
         */

    }, {
        key: 'drawLevel',
        value: function drawLevel() {
            this.context.textAlign = "center";
            this.context.fillStyle = "black";
            this.context.fillText("Level: " + this.level, this.canvas.width / 2, 35);
        }

        /**
         * Draw the current lives counter
         * @return null
         */

    }, {
        key: 'drawLives',
        value: function drawLives() {
            var image = new Image();
            image.src = "images/extra-life.png";

            if (this.lives <= 5) {
                for (var i = 0; i < this.lives; i++) {
                    this.context.drawImage(image, this.canvas.width - 10 - 35 * (i + 1), 10, 25, 25);
                }
            } else {
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

    }, {
        key: 'drawClears',
        value: function drawClears() {
            var image = new Image();
            image.src = "images/blue.png";

            if (this.user.clears <= 4) {
                for (var i = 0; i < this.user.clears; i++) {
                    this.context.drawImage(image, this.canvas.width - 10 - 35 * (i + 1), 45, 25, 25);
                }
            } else {
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

    }, {
        key: 'drawBombs',
        value: function drawBombs() {
            var image = new Image();
            image.src = "images/white.png";

            if (this.user.bombs <= 4) {
                for (var i = 0; i < this.user.bombs; i++) {
                    this.context.drawImage(image, this.canvas.width - 10 - 35 * (i + 1), 80, 25, 25);
                }
            } else {
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

    }, {
        key: 'drawWin',
        value: function drawWin() {
            this.context.textAlign = "center";
            this.context.fillText("Level " + this.level + " complete!", this.canvas.width / 2, this.canvas.height / 2);
            this.context.fillText("Press Enter to Start Next Level", this.canvas.width / 2, this.canvas.height / 2 + 35);
            this.context.fillText("Score: " + this.score, this.canvas.width / 2, this.canvas.height / 2 + 65);
        }

        /**
         * Draw game over screen
         * @return null
         */

    }, {
        key: 'drawLoss',
        value: function drawLoss() {
            this.context.textAlign = "center";
            this.context.fillText("Game Over", this.canvas.width / 2, this.canvas.height / 2);
            this.context.fillText("Press Enter to Restart", this.canvas.width / 2, this.canvas.height / 2 + 35);
            this.context.fillText("Final Score: " + this.score, this.canvas.width / 2, this.canvas.height / 2 + 65);
        }

        /**
         * Set movement direction for all enemies
         * @return null
         */

    }, {
        key: 'setEnemyMovement',
        value: function setEnemyMovement() {
            for (var i = 0; i < this.enemies.length; i++) {
                for (var j = 0; j < this.enemies.length; j++) {
                    if (i != j) {
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

    }, {
        key: 'checkCollision',
        value: function checkCollision(unit1, unit2) {
            var dx = unit1.xPosition + unit1.width * unit1.scale / 2 - (unit2.xPosition + unit2.width * unit2.scale / 2);
            var dy = unit1.yPosition + unit1.height * unit1.scale / 2 - (unit2.yPosition + unit2.height * unit2.scale / 2);
            var width = (unit1.width * unit1.scale + unit2.width * unit2.scale) / 2;
            var height = (unit1.height * unit1.scale + unit2.height * unit2.scale) / 2;
            var crossWidth = width * dy;
            var crossHeight = height * dx;

            if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
                if (crossWidth > crossHeight) {
                    if (crossWidth > -crossHeight) {
                        // unit1 top collision
                        // unit2 bottom collision
                        unit1.movingUp = false;
                        unit2.movingUp = true;
                    } else {
                        // unit1 right collision
                        // unit2 left collision
                        unit1.movingRight = false;
                        unit2.movingRight = true;
                    }
                } else {
                    if (crossWidth > -crossHeight) {
                        // unit1 left collision
                        // unit2 right collision
                        unit1.movingRight = true;
                        unit2.movingRight = false;
                    } else {
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

    }, {
        key: 'createBomb',
        value: function createBomb() {
            var x = Math.floor(this.canvas.width / 10 + Math.random() * this.canvas.width * 0.8);
            var y = Math.floor(this.canvas.height / 10 + Math.random() * this.canvas.height * 0.8);
            for (var i = 0; i < 25; i++) {
                this.user.attacks.push(new _Projectile2.default(this, x, y, { damage: this.user.attackDamage }).randomizeMovement().randomizeSpeed());
            }
            if (!this.isMuted) {
                this.audio5.play();
            }
        }
    }]);

    return Game;
}(_Environment3.default);

exports.default = Game;

},{"./Environment.js":1,"./Menu.js":3,"./levels/level1.js":5,"./levels/level10.js":6,"./levels/level11.js":7,"./levels/level2.js":8,"./levels/level3.js":9,"./levels/level4.js":10,"./levels/level5.js":11,"./levels/level6.js":12,"./levels/level7.js":13,"./levels/level8.js":14,"./levels/level9.js":15,"./units/Person.js":16,"./units/Projectile.js":17,"./units/enemies/Bee.js":19}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Environment2 = require('./Environment.js');

var _Environment3 = _interopRequireDefault(_Environment2);

var _Bee = require('./units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Environment) {
    _inherits(Menu, _Environment);

    function Menu(GAME) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));

        _this.controlsKeydown = _this.controlsKeydownStart;
        _this.currentScreen = _this.drawStartScreen;
        _this.GAME = GAME;
        return _this;
    }

    /**
     * Initialize the game
     * @return null
     */


    _createClass(Menu, [{
        key: 'init',
        value: function init() {
            this.GAME.initCanvas();
            this.GAME.keydownListener = this.controlsKeydownStart.bind(this);
            window.addEventListener("keydown", this.GAME.keydownListener);
            window.addEventListener("keydown", function (event) {
                if (event.keyCode === 32) {
                    event.preventDefault();
                }
            });
            this.GAME.drawBackground();
            this.units.push(new _Bee2.default(this.GAME, canvas.width / 2, canvas.height / 2, { attackRate: 0, ySpeed: 1 }).randomizeMovement());
            this.main();
            this.audio.loop = true;
            this.audio.play();
        }
    }, {
        key: 'controlsKeydownStart',
        value: function controlsKeydownStart(event) {
            if (event.keyCode === 13) {
                this.GAME.clearCanvas();
                this.isActive = false;
                this.GAME.isActive = true;
                window.removeEventListener("keydown", this.GAME.keydownListener);
                window.removeEventListener("keyup", this.GAME.keyupListener);
                this.GAME.keydownListener = this.GAME.controlsKeydownLevel.bind(this.GAME);
                this.GAME.keyupListener = this.GAME.controlsKeyupLevel.bind(this.GAME);
                window.addEventListener("keydown", this.GAME.keydownListener);
                window.addEventListener("keyup", this.GAME.keyupListener);
                this.GAME.initLevel(this);
            }
            if (event.keyCode === 67) {
                this.currentScreen = this.drawControlsScreen;
                this.changeKeydownListener(this.controlsKeydownControls.bind(this));
            }
            if (event.keyCode === 77) {
                if (this.GAME.isMuted) {
                    this.audio.muted = false;
                } else {
                    this.audio.muted = true;
                }
                this.GAME.isMuted = !this.GAME.isMuted;
            }
            if (event.keyCode === 85) {
                this.currentScreen = this.drawUpgradeScreen;
                this.changeKeydownListener(this.controlsKeydownUpgrades.bind(this));
            }
        }
    }, {
        key: 'controlsKeydownUpgrades',
        value: function controlsKeydownUpgrades(event) {
            if (event.keyCode === 27 || event.keyCode === 66 || event.keyCode === 85 || event.keyCode === 13 || event.keyCode === 32) {
                this.currentScreen = this.drawStartScreen;
                this.changeKeydownListener(this.controlsKeydownStart.bind(this));
            }
            if (event.keyCode === 77) {
                if (this.GAME.isMuted) {
                    this.audio.muted = false;
                } else {
                    this.audio.muted = true;
                }
                this.GAME.isMuted = !this.GAME.isMuted;
            }
        }
    }, {
        key: 'controlsKeydownControls',
        value: function controlsKeydownControls(event) {
            if (event.keyCode === 27 || event.keyCode === 66 || event.keyCode === 67 || event.keyCode === 13 || event.keyCode === 32) {
                this.currentScreen = this.drawStartScreen;
                this.changeKeydownListener(this.controlsKeydownStart.bind(this));
            }
            if (event.keyCode === 77) {
                if (this.GAME.isMuted) {
                    this.audio.muted = false;
                } else {
                    this.audio.muted = true;
                }
                this.GAME.isMuted = !this.GAME.isMuted;
            }
        }
    }, {
        key: 'main',
        value: function main() {
            this.GAME.clearCanvas();
            this.drawUnits();
            this.currentScreen();
            this.GAME.drawAudio();
            if (this.isActive) {
                setTimeout(this.main.bind(this), this.GAME.speed);
            }
        }

        /**
         * Draw the start screen
         * @return null
         */

    }, {
        key: 'drawStartScreen',
        value: function drawStartScreen() {
            this.GAME.context.font = "100px 'Creepster', cursive";
            this.GAME.context.textAlign = "center";
            this.GAME.context.fillText("Bug Attack!", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2);
            this.GAME.context.font = "20px 'Press Start 2P'";
            this.GAME.context.fillText("Press Enter to Start", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2 + 35);
            this.GAME.context.fillText("U - Upgrades", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2 + 95);
            this.GAME.context.fillText("C - Controls", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2 + 130);
        }
    }, {
        key: 'changeKeydownListener',
        value: function changeKeydownListener(listener) {
            window.removeEventListener("keydown", this.GAME.keydownListener);
            window.addEventListener("keydown", listener);
            this.GAME.keydownListener = listener;
        }

        /**
         * Draw the start screen
         * @return null
         */

    }, {
        key: 'drawControlsScreen',
        value: function drawControlsScreen() {
            this.GAME.context.font = "20px 'Press Start 2P'";
            this.GAME.context.textAlign = "center";

            this.GAME.context.fillText("Left/Right Arrows - Move", this.GAME.canvas.width / 2, 55);
            this.GAME.context.fillText("Spacebar - Attack", this.GAME.canvas.width / 2, 90);
            this.GAME.context.fillText("A Key - Clear Board (of Enemy Attacks)", this.GAME.canvas.width / 2, 125);
            this.GAME.context.fillText("D Key - Bomb", this.GAME.canvas.width / 2, 160);
            this.GAME.context.fillText("Enter - Pause", this.GAME.canvas.width / 2, 195);
            this.GAME.context.fillText("M Key - Mute", this.GAME.canvas.width / 2, 230);
        }

        /**
         * Draw the start screen
         * @return null
         */

    }, {
        key: 'drawUpgradeScreen',
        value: function drawUpgradeScreen() {
            this.GAME.context.font = "20px 'Press Start 2P'";
            this.GAME.context.textAlign = "left";

            var green = new Image();
            green.src = "images/green.png";
            this.GAME.context.drawImage(green, 20, 20, 50, 50);
            this.GAME.context.fillText("Movement speed upgrade", 90, 55);

            var red = new Image();
            red.src = "images/red.png";
            this.GAME.context.drawImage(red, 20, 90, 50, 50);
            this.GAME.context.fillText("Weapon upgrade", 90, 125);

            var yellow = new Image();
            yellow.src = "images/yellow.png";
            this.GAME.context.drawImage(yellow, 20, 160, 50, 50);
            this.GAME.context.fillText("Decrease user size", 90, 195);

            var black = new Image();
            black.src = "images/black.png";
            this.GAME.context.drawImage(black, 20, 230, 50, 50);
            this.GAME.context.fillText("Attack damage upgrade", 90, 265);

            var orange = new Image();
            orange.src = "images/orange.png";
            this.GAME.context.drawImage(orange, 20, 300, 50, 50);
            this.GAME.context.fillText("Attack rate upgrade", 90, 335);

            var purple = new Image();
            purple.src = "images/purple.png";
            this.GAME.context.drawImage(purple, 20, 370, 50, 50);
            this.GAME.context.fillText("Attack velocity upgrade", 90, 405);

            var blue = new Image();
            blue.src = "images/blue.png";
            this.GAME.context.drawImage(blue, 20, 440, 50, 50);
            this.GAME.context.fillText("Extra Board Clear", 90, 475);

            var white = new Image();
            white.src = "images/white.png";
            this.GAME.context.drawImage(white, 20, 510, 50, 50);
            this.GAME.context.fillText("Extra Bomb", 90, 545);
        }
    }, {
        key: 'drawUnits',
        value: function drawUnits() {
            for (var i = 0; i < this.units.length; i++) {
                this.units[i].setMovement(this.GAME).move().updateFrame().draw(this.GAME);
            }
        }
    }]);

    return Menu;
}(_Environment3.default);

exports.default = Menu;

},{"./Environment.js":1,"./units/enemies/Bee.js":19}],4:[function(require,module,exports){
'use strict';

var _Environment = require('./Environment.js');

var _Environment2 = _interopRequireDefault(_Environment);

var _Menu = require('./Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

var _Game = require('./Game.js');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Event Listeners
 */
window.addEventListener("load", loadAssets);

/**
 * Preload fonts then init game
 * @return null
 */
/**
 * Bug Attack!
 * @author Max Anderson
 */

function loadAssets() {
  document.fonts.load("50px 'Creepster', cursive", "'Press Start 2P', cursive").then(menu.init.bind(menu));
}

/**
 * Global Objects
 */

/**
 * The user
 * @type {Person}
 */
var user;

var environment = new _Environment2.default();

/**
 * The main game object
 * @type {Object}
 */
var GAME = new _Game2.default(environment);

var menu = new _Menu2.default(GAME);

},{"./Environment.js":1,"./Game.js":2,"./Menu.js":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level1;

var _Person = require("../units/Person.js");

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 1
 * @return null
 */
function level1(GAME, user, menu) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  GAME.enemies.push(menu.units[0]);

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level10;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Boss = require('../units/enemies/Boss.js');

var _Boss2 = _interopRequireDefault(_Boss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 10
 * @return null
 */
function level10(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Set level type to boss
   * @type {boolean}
   */
  GAME.isBoss = true;

  /**
   * Create enemies
   */
  GAME.enemies.push(new _Boss2.default(GAME, GAME.canvas.width / 4, 10, { attackRate: 0.05, xSpeed: 1, ySpeed: 1, scale: 3, health: 100, points: 10000 }).randomizeMovement());

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Boss.js":21}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = level11;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require('../units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _Spider = require('../units/enemies/Spider.js');

var _Spider2 = _interopRequireDefault(_Spider);

var _Beetle = require('../units/enemies/Beetle.js');

var _Beetle2 = _interopRequireDefault(_Beetle);

var _FlyingBeetle = require('../units/enemies/FlyingBeetle.js');

var _FlyingBeetle2 = _interopRequireDefault(_FlyingBeetle);

var _StickBug = require('../units/enemies/StickBug.js');

var _StickBug2 = _interopRequireDefault(_StickBug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 11
 * @return null
 */
function level11(GAME) {

    /**
     * Set level background
     * @type {String}
     */
    GAME.background = "background.png";

    /**
     * Draw the new background
     * @return null
     */
    GAME.drawBackground();

    /**
     * Create enemies
     */
    for (var i = 0; i < 10; i++) {
        GAME.enemies.push(new _Beetle2.default(GAME, i * 100 + 25, 60, { scale: 0.5, health: 5 }));
    }
    for (var _i = 0; _i < 6; _i++) {
        GAME.enemies.push(new _FlyingBeetle2.default(GAME, _i * 100 + 25, 100, { scale: 0.5, health: 5 }));
    }
    for (var _i2 = 0; _i2 < 10; _i2++) {
        GAME.enemies.push(new _StickBug2.default(GAME, _i2 * 100 + 25, 150, { scale: 0.5, health: 5 }));
    }
    for (var _i3 = 0; _i3 < 10; _i3++) {
        GAME.enemies.push(new _Bee2.default(GAME, _i3 * 100 + 25, 250, { scale: 0.5, health: 5 }));
    }
    for (var _i4 = 0; _i4 < 10; _i4++) {
        GAME.enemies.push(new _Spider2.default(GAME, _i4 * 100 + 25, 350, { scale: 0.5, health: 5 }));
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = GAME.enemies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var enemy = _step.value;

            enemy.randomizeYSpeed();
            enemy.randomizeXSpeed();
        }

        /**
         * Initialize user
         */
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
    GAME.user.resetPosition();

    /**
     * Start game
     */
    GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19,"../units/enemies/Beetle.js":20,"../units/enemies/FlyingBeetle.js":23,"../units/enemies/Spider.js":24,"../units/enemies/StickBug.js":25}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level2;

var _Person = require("../units/Person.js");

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require("../units/enemies/Bee.js");

var _Bee2 = _interopRequireDefault(_Bee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 2
 * @return null
 */
function level2(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 5; i++) {
    GAME.enemies.push(new _Bee2.default(GAME, i * 100 + 25, 60).randomizeYSpeed(2, 4).randomizeXSpeed(2, 4).randomizeMovement());
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level3;

var _Person = require("../units/Person.js");

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require("../units/enemies/Bee.js");

var _Bee2 = _interopRequireDefault(_Bee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 3
 * @return null
 */
function level3(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 5; i++) {
    GAME.enemies.push(new _Bee2.default(GAME, i * 100 + 25, 60).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
  }
  for (var _i = 0; _i < 5; _i++) {
    GAME.enemies.push(new _Bee2.default(GAME, _i * 100 + 25, 150).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level4;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require('../units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _Spider = require('../units/enemies/Spider.js');

var _Spider2 = _interopRequireDefault(_Spider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 4
 * @return null
 */
function level4(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 5; i++) {
    GAME.enemies.push(new _Bee2.default(GAME, i * 100 + 25, 60).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
  }
  for (var _i = 0; _i < 5; _i++) {
    GAME.enemies.push(new _Bee2.default(GAME, _i * 100 + 25, 150).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
  }
  for (var _i2 = 0; _i2 < 10; _i2++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i2 * 100 + 25, 350));
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19,"../units/enemies/Spider.js":24}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level5;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require('../units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _Spider = require('../units/enemies/Spider.js');

var _Spider2 = _interopRequireDefault(_Spider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 5
 * @return null
 */
function level5(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 10; i++) {
    GAME.enemies.push(new _Bee2.default(GAME, i * 100 + 25, 60).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
  }
  for (var _i = 0; _i < 10; _i++) {
    GAME.enemies.push(new _Bee2.default(GAME, _i * 100 + 25, 150).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
  }
  for (var _i2 = 0; _i2 < 10; _i2++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i2 * 100 + 25, 250));
  }
  for (var _i3 = 0; _i3 < 10; _i3++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i3 * 100 + 25, 350));
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19,"../units/enemies/Spider.js":24}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level6;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require('../units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _Spider = require('../units/enemies/Spider.js');

var _Spider2 = _interopRequireDefault(_Spider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 6
 * @return null
 */
function level6(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 5; i++) {
    GAME.enemies.push(new _Bee2.default(GAME, i * 100 + 25, 60));
  }
  for (var _i = 0; _i < 5; _i++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i * 100 + 25, 150));
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19,"../units/enemies/Spider.js":24}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level7;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require('../units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _Spider = require('../units/enemies/Spider.js');

var _Spider2 = _interopRequireDefault(_Spider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 7
 * @return null
 */
function level7(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 5; i++) {
    GAME.enemies.push(new _Bee2.default(GAME, i * 100 + 25, 60));
  }
  for (var _i = 0; _i < 5; _i++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i * 100 + 25, 150));
  }
  for (var _i2 = 0; _i2 < 5; _i2++) {
    GAME.enemies.push(new _Bee2.default(GAME, _i2 * 100 + 25, 250));
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19,"../units/enemies/Spider.js":24}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level8;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require('../units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _Spider = require('../units/enemies/Spider.js');

var _Spider2 = _interopRequireDefault(_Spider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 8
 * @return null
 */
function level8(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 5; i++) {
    GAME.enemies.push(new _Bee2.default(GAME, i * 100 + 25, 60));
  }
  for (var _i = 0; _i < 5; _i++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i * 100 + 25, 150));
  }
  for (var _i2 = 0; _i2 < 5; _i2++) {
    GAME.enemies.push(new _Bee2.default(GAME, _i2 * 100 + 25, 250));
  }
  for (var _i3 = 0; _i3 < 5; _i3++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i3 * 100 + 25, 350));
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19,"../units/enemies/Spider.js":24}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = level9;

var _Person = require('../units/Person.js');

var _Person2 = _interopRequireDefault(_Person);

var _Bee = require('../units/enemies/Bee.js');

var _Bee2 = _interopRequireDefault(_Bee);

var _Spider = require('../units/enemies/Spider.js');

var _Spider2 = _interopRequireDefault(_Spider);

var _Beetle = require('../units/enemies/Beetle.js');

var _Beetle2 = _interopRequireDefault(_Beetle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Level 9
 * @return null
 */
function level9(GAME) {

  /**
   * Set level background
   * @type {String}
   */
  GAME.background = "background.png";

  /**
   * Draw the new background
   * @return null
   */
  GAME.drawBackground();

  /**
   * Create enemies
   */
  for (var i = 0; i < 5; i++) {
    GAME.enemies.push(new _Beetle2.default(GAME, i * 100 + 25, 60));
  }
  for (var _i = 0; _i < 5; _i++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i * 100 + 25, 150));
  }
  for (var _i2 = 0; _i2 < 5; _i2++) {
    GAME.enemies.push(new _Bee2.default(GAME, _i2 * 100 + 25, 250));
  }
  for (var _i3 = 0; _i3 < 5; _i3++) {
    GAME.enemies.push(new _Spider2.default(GAME, _i3 * 100 + 25, 350));
  }

  /**
   * Initialize user
   */
  GAME.user = GAME.user || new _Person2.default(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
  GAME.user.resetPosition();

  /**
   * Start game
   */
  GAME.main();
}

},{"../units/Person.js":16,"../units/enemies/Bee.js":19,"../units/enemies/Beetle.js":20,"../units/enemies/Spider.js":24}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Unit2 = require('./Unit.js');

var _Unit3 = _interopRequireDefault(_Unit2);

var _Projectile = require('./Projectile.js');

var _Projectile2 = _interopRequireDefault(_Projectile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Basic user object
 */
var Person = function (_Unit) {
  _inherits(Person, _Unit);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function Person(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Person);

    /**
     * Horizontal speed
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 6;

    /**
     * Vertical speed
     * @type {Number}
     */
    _this.ySpeed = options.ySpeed !== undefined ? options.ySpeed : 0;

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 75;

    /**
     * Height width
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 75;

    /**
     * Attack level
     * @type {Number}
     */
    _this.attackLevel = options.attackLevel !== undefined ? options.attackLevel : 1;

    /**
     * Attack damage
     * @type {number}
     */
    _this.attackDamage = options.attackDamage !== undefined ? options.attackDamage : 1;

    /**
     * Attack rate, in milliseconds between shots
     * @type {Number}
     */
    _this.attackRate = options.attackRate !== undefined ? options.attackRate : 250;

    /**
     * Attack speed multiplier
     * @type {Number}
     */
    _this.attackSpeed = options.attackSpeed !== undefined ? options.attackSpeed : 1;

    /**
     * Number of enemy attack clears
     * @type {integer}
     */
    _this.clears = options.clears !== undefined ? options.clears : 5;

    /**
     * Number of enemy attack clears
     * @type {integer}
     */
    _this.bombs = options.bombs !== undefined ? options.bombs : 5;

    /**
     * Is able to shoot
     * @type {boolean}
     */
    _this.canAttack = options.canAttack !== undefined ? options.canAttack : true;

    /**
     * Unit image
     * @type Image object
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/carl.png";

    /**
     * Attack audio object
     * @param {object}
     */
    _this.attackAudio = new Audio("audio/sfx_weapon_singleshot7.wav");

    /**
     * Attack audio object
     * @param {object}
     */
    _this.damageAudio = new Audio("audio/sfx_sounds_damage3.wav");

    /**
     * User is moving
     * @type {Boolean}
     */
    _this.isMoving = options.isMoving !== undefined ? options.isMoving : false;

    /**
     * Active user attacks
     * @type {Array}
     */
    _this.attacks = [];
    return _this;
  }

  /**
   * Move the user left
   * @return this
   */


  _createClass(Person, [{
    key: 'moveLeft',
    value: function moveLeft() {
      if (this.xPosition >= 0) {
        this.xPosition -= this.xSpeed;
      }
      return this;
    }

    /**
     * Move the user right
     * @return this
     */

  }, {
    key: 'moveRight',
    value: function moveRight() {
      if (this.xPosition + this.getWidth() <= this.GAME.canvas.width) {
        this.xPosition += this.xSpeed;
      }
      return this;
    }

    /**
     * Reset the user's position and movement state
     */

  }, {
    key: 'resetPosition',
    value: function resetPosition() {
      this.xPosition = this.GAME.canvas.width / 2;
      this.isMoving = false;
      return this;
    }

    /**
     * Create a new attack
     * @return null
     */

  }, {
    key: 'attack',
    value: function attack() {
      if (this.canAttack) {
        if (!this.GAME.isMuted) {
          this.attackAudio.play();
        }
        this.canAttack = false;
        switch (this.attackLevel) {
          case 1:
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.GAME.score -= _Projectile2.default.cost();
            break;
          case 2:
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: true, xSpeed: 1, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: false, xSpeed: 1, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.GAME.score -= _Projectile2.default.cost();
            break;
          case 3:
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: true, xSpeed: 1, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: false, xSpeed: 1, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.GAME.score -= _Projectile2.default.cost();
            break;
          default:
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: true, xSpeed: 1, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: false, xSpeed: 1, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: true, xSpeed: 2, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.attacks.push(new _Projectile2.default(this.GAME, this.xPosition + 59 * this.scale, this.yPosition, { movingRight: false, xSpeed: 2, damage: this.attackDamage }).adjustSpeed(this.attackSpeed));
            this.GAME.score -= _Projectile2.default.cost();
        }
        setTimeout(this.resetAttack.bind(this), this.attackRate);
      }
    }
  }, {
    key: 'resetAttack',
    value: function resetAttack() {
      this.canAttack = true;
    }
  }]);

  return Person;
}(_Unit3.default);

exports.default = Person;

},{"./Projectile.js":17,"./Unit.js":18}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Unit2 = require("./Unit.js");

var _Unit3 = _interopRequireDefault(_Unit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Basic attack object, either enemy or user
 */
var Projectile = function (_Unit) {
  _inherits(Projectile, _Unit);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function Projectile(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Projectile);

    /**
     * Damage amount
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (Projectile.__proto__ || Object.getPrototypeOf(Projectile)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.damage = options.damage !== undefined ? options.damage : 1;

    /**
     * Unit image
     * @type Image object
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = options.src !== undefined ? options.src : "images/projectile1.png";

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 12;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 12;
    return _this;
  }

  /**
   * The point cost per attack
   * @return {number} Cost per attack (in points)
   */


  _createClass(Projectile, null, [{
    key: "cost",
    value: function cost() {
      return 5;
    }
  }]);

  return Projectile;
}(_Unit3.default);

exports.default = Projectile;

},{"./Unit.js":18}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Basic unit object
 */
var Unit = function () {
  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function Unit(GAME) {
    var xPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var yPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Unit);

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


  _createClass(Unit, [{
    key: "draw",
    value: function draw(GAME) {
      GAME.context.drawImage(this.image, this.currentFrame * this.width, 0, this.width, this.height, this.xPosition, this.yPosition, this.getWidth(), this.getHeight());
      return this;
    }

    /**
     * [updateFrameCount description]
     * @return {[type]} [description]
     */

  }, {
    key: "updateFrame",
    value: function updateFrame() {
      this.delayCount++;
      if (this.delayCount > this.frameDelay) {
        this.delayCount = 0;
        if (this.currentFrame < this.numberOfFrames - 1) {
          this.currentFrame++;
        } else {
          this.currentFrame = 0;
        }
      }
      return this;
    }

    /**
     * Move the projectile right
     * @return this
     */

  }, {
    key: "moveRight",
    value: function moveRight() {
      this.xPosition += this.xSpeed;
      return this;
    }

    /**
     * Move the projectile left
     * @return this
     */

  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.xPosition -= this.xSpeed;
      return this;
    }

    /**
     * Move the projectile up
     * @return this
     */

  }, {
    key: "moveUp",
    value: function moveUp() {
      this.yPosition -= this.ySpeed;
      return this;
    }

    /**
     * Move the projectile down
     * @return this
     */

  }, {
    key: "moveDown",
    value: function moveDown() {
      this.yPosition += this.ySpeed;
      return this;
    }

    /**
     *
     */

  }, {
    key: "move",
    value: function move() {
      if (this.movingRight) {
        this.moveRight();
      } else {
        this.moveLeft();
      }
      if (this.movingUp) {
        this.moveUp();
      } else {
        this.moveDown();
      }
      return this;
    }

    /**
     * Randomize horizontal movement direction
     * @return this
     */

  }, {
    key: "randomizeXMovement",
    value: function randomizeXMovement() {
      this.movingRight = Math.floor(Math.random() * 2) ? true : false;
      return this;
    }

    /**
     * Randomize vertical movement direction
     * @return this
     */

  }, {
    key: "randomizeYMovement",
    value: function randomizeYMovement() {
      this.movingUp = Math.floor(Math.random() * 2) ? true : false;
      return this;
    }

    /**
     * Randomize vertical and horizontal movement directions
     * @return this
     */

  }, {
    key: "randomizeMovement",
    value: function randomizeMovement() {
      this.randomizeXMovement();
      this.randomizeYMovement();
      return this;
    }

    /**
     *
     */

  }, {
    key: "setMovement",
    value: function setMovement(GAME) {
      if (this.xPosition >= GAME.canvas.width - this.width * this.scale) {
        this.movingRight = false;
      } else if (this.xPosition <= 0) {
        this.movingRight = true;
      }
      if (this.yPosition + this.height * this.scale >= GAME.canvas.height - 150) {
        this.movingUp = true;
      } else if (this.yPosition <= 0) {
        this.movingUp = false;
      }
      return this;
    }

    /**
     * Adjust speed by given multiplier
     * @param {number} number  The desired speed multiplier
     */

  }, {
    key: "adjustSpeed",
    value: function adjustSpeed(number) {
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

  }, {
    key: "randomizeXSpeed",
    value: function randomizeXSpeed() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      this.xSpeed = Math.floor(min + Math.random() * (max - min + 1));
      return this;
    }

    /**
     * Randomize vertical speed
     * @param  {number} min  Minimum speed
     * @param  {number} max  Maximum speed
     * @return this
     */

  }, {
    key: "randomizeYSpeed",
    value: function randomizeYSpeed() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      this.ySpeed = Math.floor(min + Math.random() * (max - min + 1));
      return this;
    }
  }, {
    key: "randomizeSpeed",
    value: function randomizeSpeed() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      this.randomizeXSpeed(min, max);
      this.randomizeYSpeed(min, max);
      return this;
    }

    /**
     * Return scaled width
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width * this.scale;
    }

    /**
     * Return scaled height
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height * this.scale;
    }

    /**
     * Check if unit is out of bounds
     * @param  {object} unit The unit to check
     * @return {boolean}
     */

  }, {
    key: "checkInBounds",
    value: function checkInBounds(GAME) {
      if (this.xPosition + this.width <= 0 || this.xPosition >= GAME.canvas.width || this.yPosition + this.height <= 0 || this.yPosition >= GAME.canvas.height) {
        return true;
      }
      return false;
    }
  }]);

  return Unit;
}();

exports.default = Unit;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enemy2 = require("./Enemy.js");

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bee = function (_Enemy) {
  _inherits(Bee, _Enemy);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function Bee(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Bee);

    /**
     * Enemy point value
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (Bee.__proto__ || Object.getPrototypeOf(Bee)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.points = options.points !== undefined ? options.points : 35;

    /**
     * Horizontal speed
     * @type {Number}
     */
    _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 3;

    /**
     * Object's image
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/bee-sprite.png";

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 100;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 63;

    /**
     * Animation speed (number of cycles before changing frames)
     * @type {integer}
     */
    _this.frameDelay = options.frameDelay !== undefined ? options.frameDelay : 1;

    /**
     * Animation speed (number of cycles before changing frames)
     * @type {integer}
     */
    _this.delayCount = options.delayCount !== undefined ? options.delayCount : 0;

    /**
     * Number of animation frames
     * @type {Number}
     */
    _this.numberOfFrames = 4;
    return _this;
  }

  return Bee;
}(_Enemy3.default);

exports.default = Bee;

},{"./Enemy.js":22}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enemy2 = require("./Enemy.js");

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Beetle = function (_Enemy) {
  _inherits(Beetle, _Enemy);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function Beetle(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Beetle);

    /**
     * Enemy point value
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (Beetle.__proto__ || Object.getPrototypeOf(Beetle)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.points = options.points !== undefined ? options.points : 50;

    /**
     * Horizontal speed
     * @type {Number}
     */
    _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 6;

    /**
     * Object's image
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/beetle.png";

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 75;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 75;

    /**
     * Attack rate
     * @type {Number}
     */
    _this.attackRate = options.attackRate !== undefined ? options.attackRate : 0.01;
    return _this;
  }

  return Beetle;
}(_Enemy3.default);

exports.default = Beetle;

},{"./Enemy.js":22}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Enemy2 = require("./Enemy.js");

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boss = function (_Enemy) {
  _inherits(Boss, _Enemy);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function Boss(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Boss);

    /**
     * Enemy point value
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (Boss.__proto__ || Object.getPrototypeOf(Boss)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.points = options.points !== undefined ? options.points : 1000;

    /**
     * Object's image
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/flying-beetle.png";

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 141;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 96;

    /**
     * Starting health
     * @type {integer}
     */
    _this.startingHealth = options.health !== undefined ? options.health : 1000;

    /**
     * Current health
     * @type {integer}
     */
    _this.health = options.health !== undefined ? options.health : 1000;

    /**
     * Death audio object
     * @param {object}
     */
    _this.deathAudio = GAME.audio6;
    return _this;
  }

  /**
   * Draw current health
   * @return null
   */


  _createClass(Boss, [{
    key: "drawHealth",
    value: function drawHealth() {
      this.GAME.context.fillStyle = "red";
      this.GAME.context.fillRect(13, this.GAME.canvas.height / 10 + (this.startingHealth - this.health) * (this.GAME.canvas.height * 0.6 - 6) / this.startingHealth + 3, 44, this.health * (this.GAME.canvas.height * 0.6 - 6) / this.startingHealth);
    }

    /**
     * Draw health container
     * @return null
     */

  }, {
    key: "drawHealthContainer",
    value: function drawHealthContainer() {
      this.GAME.context.lineWidth = 6;
      this.GAME.context.strokeStyle = "black";
      this.GAME.context.strokeRect(10, this.GAME.canvas.height / 10, 50, this.GAME.canvas.height * 0.6);
    }
  }]);

  return Boss;
}(_Enemy3.default);

exports.default = Boss;

},{"./Enemy.js":22}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Unit2 = require('../Unit.js');

var _Unit3 = _interopRequireDefault(_Unit2);

var _Projectile = require('../Projectile.js');

var _Projectile2 = _interopRequireDefault(_Projectile);

var _AttackDamageUpgrade = require('../upgrades/AttackDamageUpgrade.js');

var _AttackDamageUpgrade2 = _interopRequireDefault(_AttackDamageUpgrade);

var _AttackRateUpgrade = require('../upgrades/AttackRateUpgrade.js');

var _AttackRateUpgrade2 = _interopRequireDefault(_AttackRateUpgrade);

var _AttackSpeedUpgrade = require('../upgrades/AttackSpeedUpgrade.js');

var _AttackSpeedUpgrade2 = _interopRequireDefault(_AttackSpeedUpgrade);

var _ExtraBoardClear = require('../upgrades/ExtraBoardClear.js');

var _ExtraBoardClear2 = _interopRequireDefault(_ExtraBoardClear);

var _ExtraBomb = require('../upgrades/ExtraBomb.js');

var _ExtraBomb2 = _interopRequireDefault(_ExtraBomb);

var _ExtraLife = require('../upgrades/ExtraLife.js');

var _ExtraLife2 = _interopRequireDefault(_ExtraLife);

var _SizeUpgrade = require('../upgrades/SizeUpgrade.js');

var _SizeUpgrade2 = _interopRequireDefault(_SizeUpgrade);

var _SpeedUpgrade = require('../upgrades/SpeedUpgrade.js');

var _SpeedUpgrade2 = _interopRequireDefault(_SpeedUpgrade);

var _WeaponUpgrade = require('../upgrades/WeaponUpgrade.js');

var _WeaponUpgrade2 = _interopRequireDefault(_WeaponUpgrade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_Unit) {
    _inherits(Enemy, _Unit);

    /**
     * Instantiate the new object
     * @param  {integer} xPos The horizontal position of the object
     * @param  {integer} yPos The vertical position of the object
     */
    function Enemy(GAME, xPos, yPos) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, Enemy);

        /**
         * Horizontal speed
         * @type {Number}
         */
        var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, GAME, xPos, yPos, options));

        /**
         * Call the parent class' constructor
         */


        _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 1;

        /**
         * Vertical speed
         * @type {Number}
         */
        _this.ySpeed = options.ySpeed !== undefined ? options.ySpeed : 0;

        /**
         * Point value
         * @type {Number}
         */
        _this.points = options.points !== undefined ? options.points : 10;

        /**
         * Size multiplier
         * @type {Number}
         */
        _this.scale = options.scale !== undefined ? options.scale : 1;

        /**
         * Object width
         * @type {Number}
         */
        _this.width = options.width !== undefined ? options.width : 50;

        /**
         * Object height
         * @type {Number}
         */
        _this.height = options.height !== undefined ? options.height : 50;

        /**
         * Enemy attack rate, between 0 and 1 where 1 is fastest
         * @type {number}
         */
        _this.attackRate = options.attackRate !== undefined ? options.attackRate : 0.0025;

        /**
         * Percentage chance to drop power-ups
         * @type {Number}
         */
        _this.dropMultiplier = options.dropMultiplier !== undefined ? options.dropMultiplier : 1;

        /**
         * Health total
         * @type {Number}
         */
        _this.startingHealth = options.startingHealth !== undefined ? options.startingHealth : 2;

        /**
         * Health total
         * @type {Number}
         */
        _this.health = options.health !== undefined ? options.health : 2;
        return _this;
    }

    /**
     * Create a new attack
     * @return this
     */


    _createClass(Enemy, [{
        key: 'attack',
        value: function attack() {
            if (Math.random() >= 1 - this.attackRate) {
                this.GAME.enemyAttacks.push(new _Projectile2.default(this.GAME, this.xPosition + this.getWidth() / 2, this.yPosition + this.getHeight(), { ySpeed: 3, src: "images/projectile2.png" }));
            }
            return this;
        }

        /**
         * Randomize unit attack rate
         * @param  {number} min  Minimum attack rate
         * @param  {number} max  Maximum attack rate
         * @return this
         */

    }, {
        key: 'randomizeAttackRate',
        value: function randomizeAttackRate() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            this.attackRate = Math.floor(min + Math.random() * (max - min + 1));
            return this;
        }

        /**
         * Randomize horizontal speed
         * @param  {number} min  Minimum speed
         * @param  {number} max  Maximum speed
         * @return this
         */

    }, {
        key: 'randomizeXSpeed',
        value: function randomizeXSpeed() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

            this.xSpeed = Math.floor(min + Math.random() * (max - min + 1));
            return this;
        }

        /**
         * Randomize vertical speed
         * @param  {number} min  Minimum speed
         * @param  {number} max  Maximum speed
         * @return this
         */

    }, {
        key: 'randomizeYSpeed',
        value: function randomizeYSpeed() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

            this.ySpeed = Math.floor(min + Math.random() * (max - min + 1));
            return this;
        }
    }, {
        key: 'randomizeSpeed',
        value: function randomizeSpeed() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

            this.randomizeXSpeed(min, max);
            this.randomizeYSpeed(min, max);
            return this;
        }

        /**
         * Randomize horizontal movement direction
         * @return this
         */

    }, {
        key: 'randomizeXMovement',
        value: function randomizeXMovement() {
            this.movingRight = Math.floor(Math.random() * 2) ? true : false;
            return this;
        }

        /**
         * Randomize vertical movement direction
         * @return this
         */

    }, {
        key: 'randomizeYMovement',
        value: function randomizeYMovement() {
            this.movingUp = Math.floor(Math.random() * 2) ? true : false;
            return this;
        }

        /**
         * Randomize vertical and horizontal movement directions
         * @return this
         */

    }, {
        key: 'randomizeMovement',
        value: function randomizeMovement() {
            this.randomizeXMovement();
            this.randomizeYMovement();
            return this;
        }

        /**
         * Drop a power-up
         * @return this
         */

    }, {
        key: 'dropPowerUps',
        value: function dropPowerUps() {
            if (Math.random() >= 1 - _ExtraLife2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _ExtraLife2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _WeaponUpgrade2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _WeaponUpgrade2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _SpeedUpgrade2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _SpeedUpgrade2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _SizeUpgrade2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _SizeUpgrade2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _AttackRateUpgrade2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _AttackRateUpgrade2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _AttackDamageUpgrade2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _AttackDamageUpgrade2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _AttackSpeedUpgrade2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _AttackSpeedUpgrade2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _ExtraBoardClear2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _ExtraBoardClear2.default(this.GAME, this.xPosition, this.yPosition));
            }
            if (Math.random() >= 1 - _ExtraBomb2.default.dropRate() * this.dropMultiplier) {
                this.GAME.powerUps.push(new _ExtraBomb2.default(this.GAME, this.xPosition, this.yPosition));
            }
            return this;
        }

        /**
         * Trigger death events
         * @return this
         */

    }, {
        key: 'onDeath',
        value: function onDeath() {
            this.GAME.incrementScore(this.points);
            if (!this.GAME.isMuted) {
                this.deathAudio.play();
            }
            this.dropPowerUps();
            return this;
        }
    }]);

    return Enemy;
}(_Unit3.default);

exports.default = Enemy;

},{"../Projectile.js":17,"../Unit.js":18,"../upgrades/AttackDamageUpgrade.js":26,"../upgrades/AttackRateUpgrade.js":27,"../upgrades/AttackSpeedUpgrade.js":28,"../upgrades/ExtraBoardClear.js":29,"../upgrades/ExtraBomb.js":30,"../upgrades/ExtraLife.js":31,"../upgrades/SizeUpgrade.js":33,"../upgrades/SpeedUpgrade.js":34,"../upgrades/WeaponUpgrade.js":35}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enemy2 = require("./Enemy.js");

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlyingBeetle = function (_Enemy) {
  _inherits(FlyingBeetle, _Enemy);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function FlyingBeetle(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, FlyingBeetle);

    /**
     * Enemy point value
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (FlyingBeetle.__proto__ || Object.getPrototypeOf(FlyingBeetle)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.points = options.points !== undefined ? options.points : 125;

    /**
     * Horizontal speed
     * @type {Number}
     */
    _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 7;

    /**
     * Object's image
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/flying-beetle.png";

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 141;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 96;

    /**
     * Enemy attack rate
     * @type {Number}
     */
    _this.attackRate = options.attackRate !== undefined ? options.attackRate : 0.02;
    return _this;
  }

  return FlyingBeetle;
}(_Enemy3.default);

exports.default = FlyingBeetle;

},{"./Enemy.js":22}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enemy2 = require("./Enemy.js");

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spider = function (_Enemy) {
  _inherits(Spider, _Enemy);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function Spider(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Spider);

    /**
     * Enemy point value
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (Spider.__proto__ || Object.getPrototypeOf(Spider)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.points = options.points !== undefined ? options.points : 25;

    /**
     * Horizontal speed
     * @type {Number}
     */
    _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 2;

    /**
     * Object's image
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/spider-sprite.png";

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 75;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 75;

    /**
     * Animation speed (number of cycles before changing frames)
     * @type {integer}
     */
    _this.frameDelay = options.frameDelay !== undefined ? options.frameDelay : 3;

    /**
     * Current number of delayed frames
     * @type {integer}
     */
    _this.delayCount = options.delayCount !== undefined ? options.delayCount : 0;

    /**
     * Number of animation frames
     * @type {Number}
     */
    _this.numberOfFrames = 10;
    return _this;
  }

  return Spider;
}(_Enemy3.default);

exports.default = Spider;

},{"./Enemy.js":22}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enemy2 = require("./Enemy.js");

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickBug = function (_Enemy) {
  _inherits(StickBug, _Enemy);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function StickBug(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, StickBug);

    /**
     * Enemy point value
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (StickBug.__proto__ || Object.getPrototypeOf(StickBug)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.points = options.points !== undefined ? options.points : 75;

    /**
     * Horizontal speed
     * @type {Number}
     */
    _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 8;

    /**
     * Object's image
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/beetle2.png";

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 81;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 100;

    /**
     * Enemy attack rate
     * @type {Number}
     */
    _this.attackRate = options.attackRate !== undefined ? options.attackRate : 0.015;
    return _this;
  }

  return StickBug;
}(_Enemy3.default);

exports.default = StickBug;

},{"./Enemy.js":22}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttackDamageUpgrade = function (_PowerUp) {
  _inherits(AttackDamageUpgrade, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function AttackDamageUpgrade(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AttackDamageUpgrade);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (AttackDamageUpgrade.__proto__ || Object.getPrototypeOf(AttackDamageUpgrade)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/black.png";

    /**
     * Weapon upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 1;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(AttackDamageUpgrade, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      if (this.GAME.user.attackDamage < 10) {
        this.GAME.user.attackDamage += this.upgradeValue;
      }
      return this;
    }

    /**
     * Return drop rate
     * @return number
     */

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return AttackDamageUpgrade;
}(_PowerUp3.default);

exports.default = AttackDamageUpgrade;

},{"./PowerUp.js":32}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttackRateUpgrade = function (_PowerUp) {
  _inherits(AttackRateUpgrade, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function AttackRateUpgrade(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AttackRateUpgrade);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (AttackRateUpgrade.__proto__ || Object.getPrototypeOf(AttackRateUpgrade)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/orange.png";

    /**
     * Weapon upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 50;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(AttackRateUpgrade, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      if (this.GAME.user.attackRate >= 100) {
        this.GAME.user.attackRate -= this.upgradeValue;
      }
      return this;
    }

    /**
     * Return drop rate
     * @return number
     */

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return AttackRateUpgrade;
}(_PowerUp3.default);

exports.default = AttackRateUpgrade;

},{"./PowerUp.js":32}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttackSpeedUpgrade = function (_PowerUp) {
  _inherits(AttackSpeedUpgrade, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function AttackSpeedUpgrade(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AttackSpeedUpgrade);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (AttackSpeedUpgrade.__proto__ || Object.getPrototypeOf(AttackSpeedUpgrade)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/purple.png";

    /**
     * Weapon upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 0.25;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(AttackSpeedUpgrade, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
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

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return AttackSpeedUpgrade;
}(_PowerUp3.default);

exports.default = AttackSpeedUpgrade;

},{"./PowerUp.js":32}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtraBoardClear = function (_PowerUp) {
  _inherits(ExtraBoardClear, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function ExtraBoardClear(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ExtraBoardClear);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (ExtraBoardClear.__proto__ || Object.getPrototypeOf(ExtraBoardClear)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/blue.png";

    /**
     * Weapon upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 1;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(ExtraBoardClear, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      this.GAME.user.clears += this.upgradeValue;
      return this;
    }

    /**
     * Return drop rate
     * @return number
     */

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return ExtraBoardClear;
}(_PowerUp3.default);

exports.default = ExtraBoardClear;

},{"./PowerUp.js":32}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtraBomb = function (_PowerUp) {
  _inherits(ExtraBomb, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function ExtraBomb(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ExtraBomb);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (ExtraBomb.__proto__ || Object.getPrototypeOf(ExtraBomb)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/white.png";

    /**
     * Weapon upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 1;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(ExtraBomb, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      this.GAME.user.bombs += this.upgradeValue;
      return this;
    }

    /**
     * Return drop rate
     * @return number
     */

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return ExtraBomb;
}(_PowerUp3.default);

exports.default = ExtraBomb;

},{"./PowerUp.js":32}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtraLife = function (_PowerUp) {
  _inherits(ExtraLife, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function ExtraLife(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ExtraLife);

    /**
     * Number of extra lives to award user
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (ExtraLife.__proto__ || Object.getPrototypeOf(ExtraLife)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 1;

    /**
     * Object's image
     * @type Image object
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/extra-life.png";

    /**
     * Size multiplier
     * @type {number}
     */
    _this.scale = options.upgradeValue !== undefined ? options.upgradeValue : 0.666666;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(ExtraLife, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      this.GAME.lives += this.upgradeValue;
      return this;
    }
  }]);

  return ExtraLife;
}(_PowerUp3.default);

exports.default = ExtraLife;

},{"./PowerUp.js":32}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Unit2 = require("../Unit.js");

var _Unit3 = _interopRequireDefault(_Unit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PowerUp = function (_Unit) {
  _inherits(PowerUp, _Unit);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function PowerUp(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, PowerUp);

    /**
     * Horizontal movement speed
     * @type {Number}
     */
    var _this = _possibleConstructorReturn(this, (PowerUp.__proto__ || Object.getPrototypeOf(PowerUp)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.xSpeed = options.xSpeed !== undefined ? options.xSpeed : 0;

    /**
     * Vertical movement speed
     * @type {Number}
     */
    _this.ySpeed = options.ySpeed !== undefined ? options.ySpeed : 2;

    /**
     * Object width
     * @type {Number}
     */
    _this.width = options.width !== undefined ? options.width : 75;

    /**
     * Object height
     * @type {Number}
     */
    _this.height = options.height !== undefined ? options.height : 75;

    /**
     * Object's image
     * @type Image object
     */
    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/black.png";

    /**
     * Collection audio object
     * @param {object}
     */
    _this.collectAudio = new Audio("audio/sfx_sounds_powerup2.wav");

    /**
     * Image size multiplier
     * @type {number}
     */
    _this.scale = options.upgradeValue !== undefined ? options.upgradeValue : 0.666666;
    return _this;
  }

  /**
   * Return drop rate
   * @return number
   */


  _createClass(PowerUp, null, [{
    key: "dropRate",
    value: function dropRate() {
      return 0.05;
    }
  }]);

  return PowerUp;
}(_Unit3.default);

exports.default = PowerUp;

},{"../Unit.js":18}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SizeUpgrade = function (_PowerUp) {
  _inherits(SizeUpgrade, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function SizeUpgrade(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, SizeUpgrade);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (SizeUpgrade.__proto__ || Object.getPrototypeOf(SizeUpgrade)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/yellow.png";

    /**
     * Weapon upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 0.1;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(SizeUpgrade, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      if (this.GAME.user.scale > 0.5) {
        this.GAME.user.scale -= this.upgradeValue;
      }
      return this;
    }

    /**
     * Return drop rate
     * @return number
     */

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return SizeUpgrade;
}(_PowerUp3.default);

exports.default = SizeUpgrade;

},{"./PowerUp.js":32}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpeedUpgrade = function (_PowerUp) {
  _inherits(SpeedUpgrade, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function SpeedUpgrade(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, SpeedUpgrade);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (SpeedUpgrade.__proto__ || Object.getPrototypeOf(SpeedUpgrade)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/green.png";

    /**
     * Speed upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 1;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(SpeedUpgrade, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      if (this.GAME.user.xSpeed < 15) {
        this.GAME.user.xSpeed += this.upgradeValue;
      }
      return this;
    }

    /**
     * Return drop rate
     * @return number
     */

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return SpeedUpgrade;
}(_PowerUp3.default);

exports.default = SpeedUpgrade;

},{"./PowerUp.js":32}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PowerUp2 = require("./PowerUp.js");

var _PowerUp3 = _interopRequireDefault(_PowerUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeaponUpgrade = function (_PowerUp) {
  _inherits(WeaponUpgrade, _PowerUp);

  /**
   * Instantiate the new object
   * @param  {integer} xPos The horizontal position of the object
   * @param  {integer} yPos The vertical position of the object
   */
  function WeaponUpgrade(GAME, xPos, yPos) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, WeaponUpgrade);

    /**
     * Object's image
     */
    var _this = _possibleConstructorReturn(this, (WeaponUpgrade.__proto__ || Object.getPrototypeOf(WeaponUpgrade)).call(this, GAME, xPos, yPos, options));

    /**
     * Call the parent class' constructor
     */


    _this.image = new Image();

    /**
     * Image location
     * @type {String}
     */
    _this.image.src = "images/red.png";

    /**
     * Weapon upgrade value
     * @type {Number}
     */
    _this.upgradeValue = options.upgradeValue !== undefined ? options.upgradeValue : 1;
    return _this;
  }

  /**
   * Provide the power-up
   * @return this
   */


  _createClass(WeaponUpgrade, [{
    key: "onCollect",
    value: function onCollect() {
      if (!this.GAME.isMuted) {
        this.collectAudio.play();
      }
      this.GAME.user.attackLevel += this.upgradeValue;
      return this;
    }

    /**
     * Return drop rate
     * @return number
     */

  }], [{
    key: "dropRate",
    value: function dropRate() {
      return 0.01;
    }
  }]);

  return WeaponUpgrade;
}(_PowerUp3.default);

exports.default = WeaponUpgrade;

},{"./PowerUp.js":32}]},{},[4]);
