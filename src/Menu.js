import Environment from './Environment.js';
import Bee from './units/enemies/Bee.js';

export default class Menu extends Environment {
    constructor(GAME, options = {}) {
        super();

        this.controlsKeydown = this.controlsKeydownStart;
        this.currentScreen = this.drawStartScreen;
        this.GAME = GAME;
    }

    /**
     * Initialize the game
     * @return null
     */
    init() {
        this.GAME.initCanvas();
        this.GAME.keydownListener = this.controlsKeydownStart.bind(this);
        window.addEventListener("keydown", this.GAME.keydownListener);
        window.addEventListener("keydown", function(event){
            if(event.keyCode === 32) {
                event.preventDefault();
            }
        });
        this.GAME.drawBackground();
        this.units.push(new Bee(this.GAME, canvas.width / 2, canvas.height / 2, {attackRate: 0, ySpeed: 1}).randomizeMovement());
        this.main();
        this.audio.loop = true;
        this.audio.play();
    }

    controlsKeydownStart(event) {
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
            if(this.GAME.isMuted) {
                this.audio.muted = false;
            }
            else {
                this.audio.muted = true;
            }
            this.GAME.isMuted = !this.GAME.isMuted;
        }
        if (event.keyCode === 85) {
            this.currentScreen = this.drawUpgradeScreen;
            this.changeKeydownListener(this.controlsKeydownUpgrades.bind(this));
        }
    }

    controlsKeydownUpgrades(event) {
        if (event.keyCode === 27 || event.keyCode === 66 || event.keyCode === 85 || event.keyCode === 13 || event.keyCode === 32) {
            this.currentScreen = this.drawStartScreen;
            this.changeKeydownListener(this.controlsKeydownStart.bind(this));
        }
        if (event.keyCode === 77) {
            if(this.GAME.isMuted) {
                this.audio.muted = false;
            }
            else {
                this.audio.muted = true;
            }
            this.GAME.isMuted = !this.GAME.isMuted;
        }
    }

    controlsKeydownControls(event) {
        if (event.keyCode === 27 || event.keyCode === 66 || event.keyCode === 67 || event.keyCode === 13 || event.keyCode === 32) {
            this.currentScreen = this.drawStartScreen;
            this.changeKeydownListener(this.controlsKeydownStart.bind(this));
        }
        if (event.keyCode === 77) {
            if(this.GAME.isMuted) {
                this.audio.muted = false;
            }
            else {
                this.audio.muted = true;
            }
            this.GAME.isMuted = !this.GAME.isMuted;
        }
    }

    main() {
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
    drawStartScreen() {
        this.GAME.context.font = "100px 'Creepster', cursive";
        this.GAME.context.textAlign = "center";
        this.GAME.context.fillText("Bug Attack!", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2);
        this.GAME.context.font = "20px 'Press Start 2P'";
        this.GAME.context.fillText("Press Enter to Start", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2 + 35);
        this.GAME.context.fillText("U - Upgrades", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2 + 95);
        this.GAME.context.fillText("C - Controls", this.GAME.canvas.width / 2, this.GAME.canvas.height / 2 + 130);
    }

    changeKeydownListener(listener) {
        window.removeEventListener("keydown", this.GAME.keydownListener);
        window.addEventListener("keydown", listener);
        this.GAME.keydownListener = listener;
    }

    /**
     * Draw the start screen
     * @return null
     */
    drawControlsScreen() {
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
    drawUpgradeScreen() {
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

    drawUnits() {
        for (let i = 0; i < this.units.length; i++) {
            this.units[i].setMovement(this.GAME).move().updateFrame().draw(this.GAME);
        }
    }
}
