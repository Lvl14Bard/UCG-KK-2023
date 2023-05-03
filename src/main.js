let config = {
    type: Phaser.CANVAS,
    width: 600,
    height: 800,
    scene: [ Menu, Play ],
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            gravity: {
                y: 5
            },
            debug: {
                showBody: true,
                showStaticBody: true,
            }
        }
    }
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
//let keyF, keyR, keyLEFT, keyRIGHT;
