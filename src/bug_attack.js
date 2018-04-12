/**
 * Bug Attack!
 * @author Max Anderson
 */

import Environment from './Environment.js';
import Menu from './Menu.js';
import Game from './Game.js';

/**
 * Event Listeners
 */
window.addEventListener("load", loadAssets);

/**
 * Preload fonts then init game
 * @return null
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

var environment = new Environment();

/**
 * The main game object
 * @type {Object}
 */
var GAME = new Game(environment);

var menu = new Menu(GAME);
