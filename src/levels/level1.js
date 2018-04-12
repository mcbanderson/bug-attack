import Person from "../units/Person.js";

/**
 * Level 1
 * @return null
 */
export default function level1(GAME, user, menu) {

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
    GAME.user = GAME.user || new Person(GAME, GAME.canvas.width / 2, GAME.canvas.height - 100);
    GAME.user.resetPosition();

    /**
     * Start game
     */
    GAME.main();
}
