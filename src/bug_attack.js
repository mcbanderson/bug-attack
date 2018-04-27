/**
 * Bug Attack!
 * @author Max Anderson
 */

import Environment from './Environment.js';
import Menu from './Menu.js';
import Game from './Game.js';
var WebFont = require('webfontloader');

/**
 * Event Listeners
 */
window.addEventListener("load", loadAssets);

/**
 * Preload fonts then init game
 * @return null
 */
function loadAssets() {
    WebFont.load({
        google: {
            families: ['Creepster', 'Press Start 2P']
        },
        active: menu.init.bind(menu)
    });
}

/**
 * Global Objects
 */

/**
 * The main game object
 * @type {Object}
 */
var GAME = new Game();

var menu = new Menu(GAME);
