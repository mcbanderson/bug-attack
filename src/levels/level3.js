import Person from "../units/Person.js";
import Bee from '../units/enemies/Bee.js';

/**
 * Level 3
 * @return null
 */
export default function level3(GAME) {

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
        GAME.enemies.push(new Bee(GAME, (i * 100) + 25, 60).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
    }
    for(let i = 0; i < 5; i++) {
        GAME.enemies.push(new Bee(GAME, (i * 100) + 25, 150).randomizeYSpeed(3, 5).randomizeXSpeed(3, 5).randomizeMovement());
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
