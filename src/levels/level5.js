import Person from '../units/Person.js';
import Bee from '../units/enemies/Bee.js';
import Spider from '../units/enemies/Spider.js';

/**
 * Level 5
 * @return null
 */
export default function level5(GAME) {

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
        GAME.enemies.push(new Bee(GAME, (i * 100) + 25, 60).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
    }
    for(let i = 0; i < 10; i++) {
        GAME.enemies.push(new Bee(GAME, (i * 100) + 25, 150).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
    }
    for(let i = 0; i < 10; i++) {
        GAME.enemies.push(new Spider(GAME, (i * 100) + 25, 250));
    }
    for(let i = 0; i < 10; i++) {
        GAME.enemies.push(new Spider(GAME, (i * 100) + 25, 350));
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
