class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        //this.load.audio('sfx_select', './assets/blip_select12.wav');
        //this.load.audio('sfx_explosion', './assets/explosion38.wav');
        //this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Franklin Gothic Medium',
            fontSize: '28px',
            backgroundColor: '#000000',
            color: '#facade',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }


        
        //disable right click menu
        this.input.mouse.disableContextMenu();

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'UNTITLED CAT GAME', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'KITTEN KAOS', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#000';
        menuConfig.color = '#decafe';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'CLICK TO START', menuConfig).setOrigin(0.5);

        // define keys
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        /*
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        */
        //make pointer
        const pointer = this.input.activePointer;

        //get click
        if(pointer.isDown){
          this.scene.start("playScene");
        };
        
      }
}