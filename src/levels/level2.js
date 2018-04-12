import Person from "../units/Person.js";
import Bee from '../units/enemies/Bee.js';

/**
 * Level 2
 * @return null
 */
export default function level2(GAME) {

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
    for(let i = 0; i < 5; i++) {
        GAME.enemies.push(new Bee(GAME, (i * 100) + 25, 60).randomizeYSpeed(2, 4).randomizeXSpeed(2, 4).randomizeMovement());
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
