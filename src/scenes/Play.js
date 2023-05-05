class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('cat_paw', './assets/cat_paw.png');
        this.load.image('cat_photo', './assets/cat_photo.png');
        this.load.image('glass_ball', './assets/glass_ball.png');
        this.load.image('knob', './assets/knob.png');
        this.load.image('medal', './assets/medal.png');
        this.load.image('pill_bottle', './assets/pill_bottle.png');
        this.load.image('red_ball', './assets/red_ball.png');
        this.load.image('shelf_1', './assets/shelf_1.png');
        this.load.image('wine_bottle', './assets/wine_bottle.png');
        this.load.image('untitled', './assets/untitled.png');
        // load spritesheet
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
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
        /*
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        // add Rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);

        // add Spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { 
                start: 0, 
                end: 9, 
                first: 0
            }),
            frameRate: 30
        });

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← to Menu', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
        */
        this.matter.world.setBounds(0, 0, 600, 800, 32, true, true, false, true);
        //this.background = this.matter.add.image(-100, -100, 'untitled').setSensor(true).setStatic(true);
        this.cat_paw = this.matter.add.image(300, 0, 'cat_paw').setMass(50).setFriction(1).setBounce(1);
        this.cat_paw.scaleX = 0.5;
        this.cat_paw.scaleY = 0.5;
        this.matter.add.pointerConstraint();
        this.wine = this.matter.add.image(10, 0, 'wine_bottle').setMass(50).setFriction(1).setBounce(1);
        this.red = this.matter.add.image(5, 0, 'red_ball').setMass(50).setFriction(1).setBounce(1);
        this.med = this.matter.add.image(15, 0, 'medal').setMass(50).setFriction(1).setBounce(1);
        this.knob = this.matter.add.image(25, 0, 'knob').setMass(50).setFriction(1).setBounce(1);
        this.pill = this.matter.add.image(35, 0, 'pill_bottle').setMass(50).setFriction(1).setBounce(1);
        this.glass = this.matter.add.image(300, 0, 'glass_ball').setMass(50).setFriction(1).setBounce(1);
        this.photo = this.matter.add.image(300, 0, 'cat_photo').setMass(50).setFriction(1).setBounce(1);

        this.shelf_1 = this.matter.add.image(300, 150, 'shelf_1').setMass(100).setFriction(1);
        this.shelf_2 = this.matter.add.image(350, 300, 'shelf_1').setMass(100).setFriction(1);

        this.add.text(game.config.width/2, borderUISize - borderPadding, '^ THE UPWARD ABYSS ^', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, borderUISize - borderPadding + 60, 'IF A BURDEN RETURNS, \n SIMPLY CAST IT OUT AGAIN', menuConfig).setOrigin(0.5);
        menuConfig.color = '#decafe';
    }

    update() {
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
        //If no physics on screen, destroy
        if(!(this.cameras.main.worldView.contains(this.cat_paw.x, this.cat_paw.y)||this.cameras.main.worldView.contains(this.wine.x, this.wine.y)
                || this.cameras.main.worldView.contains(this.red.x, this.red.y) || this.cameras.main.worldView.contains(this.med.x, this.med.y) ||
                this.cameras.main.worldView.contains(this.knob.x, this.knob.y) || this.cameras.main.worldView.contains(this.pill.x, this.pill.y) ||
                this.cameras.main.worldView.contains(this.pill.x, this.pill.y) || this.cameras.main.worldView.contains(this.glass.x, this.glass.y) ||
                this.cameras.main.worldView.contains(this.photo.x, this.photo.y))){
                    this.add.text(game.config.width/2, game.config.height/2, 'YOU ARE FREE', menuConfig).setOrigin(0.5);
        }
        const pointer = this.input.activePointer;
      }
      
}