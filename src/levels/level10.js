import Person from '../units/Person.js';
import Boss from '../units/enemies/Boss.js';

/**
 * Level 10
 * @return null
 */
export default function level10(GAME) {

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
    GAME.enemies.push(new Boss(GAME, GAME.canvas.width / 4, 10, {attackRate: 0.05, xSpeed: 1, ySpeed: 1, scale: 3, health: 100, points: 10000}).randomizeMovement());

    /**
     * Initialize user
     */
    GAME.user = GAME.user || new Person(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
    GAME.user.resetPosition();

    /**
     * Start game
     */
    GAME.main();
}
