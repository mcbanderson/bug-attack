import Person from '../units/Person.js';
import Bee from '../units/enemies/Bee.js';
import Spider from '../units/enemies/Spider.js';
import Beetle from '../units/enemies/Beetle.js';
import FlyingBeetle from '../units/enemies/FlyingBeetle.js';
import StickBug from '../units/enemies/StickBug.js';

/**
 * Level 11
 * @return null
 */
export default function level11(GAME) {

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
    for(let i = 0; i < 10; i++) {
        GAME.enemies.push(new Beetle(GAME, (i * 100) + 25, 60, {scale: 0.5, health: 5}));
    }
    for(let i = 0; i < 6; i++) {
        GAME.enemies.push(new FlyingBeetle(GAME, (i * 100) + 25, 100, {scale: 0.5, health: 5}));
    }
    for(let i = 0; i < 10; i++) {
        GAME.enemies.push(new StickBug(GAME, (i * 100) + 25, 150, {scale: 0.5, health: 5}));
    }
    for(let i = 0; i < 10; i++) {
        GAME.enemies.push(new Bee(GAME, (i * 100) + 25, 250, {scale: 0.5, health: 5}));
    }
    for(let i = 0; i < 10; i++) {
        GAME.enemies.push(new Spider(GAME, (i * 100) + 25, 350, {scale: 0.5, health: 5}));
    }
    for(let enemy of GAME.enemies) {
        enemy.randomizeYSpeed();
        enemy.randomizeXSpeed();
    }

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
