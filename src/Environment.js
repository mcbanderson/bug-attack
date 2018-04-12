export default class Environment {
    constructor(options = {}) {

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
    }
}
