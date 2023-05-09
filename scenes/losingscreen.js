class LosingScreen extends Phaser.Scene {
    constructor() {
        super('losingscreen');
    }

   

    preload() {
        this.load.image('background', './assets/bg.jpeg');        
    }

    create() {
        // background and player sprites
        this.background =this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2,'background').setScale(4);

        this.add.text(this.sys.game.config.width/2, this.sys.game.config.height/2, "Lost Game")
            .setFontSize(40);
         

    }

    update() {    

    }
}