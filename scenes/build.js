class BuildScene extends Phaser.Scene {
    constructor() {
        super('buildscene');
        this.money = 1000;
        this.price = 0;
    }

    init() {
        this.w = this.sys.game.config.width;
        this.h = this.sys.game.config.height;
    }

    preload() {
        this.load.image('woodboat', '../assets/boat/woodboat.png');
        this.load.image('woodside', '../assets/boat/woodside.png');        
        this.load.image('plasticboat', '../assets/boat/woodboat.png');
        this.load.image('plasticside', '../assets/boat/woodside.png');        

    }

    create() {
        this.text = this.add.text(this.w*0.1, this.h*0.05, "Build a Boat!")
            .setFontSize(60);

        
        this.moneyTxt = this.add.text(this.w*0.6, this.h*0.05, "Money: " + this.money)
            .setFontSize(40);

        this.priceTxt = this.add.text(this.w*0.1, this.h*0.9, "")
            .setFontSize(40);
        this.abilityTxt = this.add.text(this.w*0.1, this.h*0.95, "")
            .setFontSize(40);
        
        this.woodBoatTxt = this.add.text(this.w*0.1, this.h*0.4, " ");
        this.woodBoatCount = 0;
        this.woodSideTxt = this.add.text(this.w*0.1, this.h*0.6, " ");
        this.woodSideCount = 0;
        this.plasticBoatTxt = this.add.text(this.w*0.3, this.h*0.4, " ");
        this.plasticBoatCount = 0;
        this.plasticSideTxt = this.add.text(this.w*0.3, this.h*0.6, " ");
        this.plasticSideCount = 0;

        this.line = this.add.rectangle(this.w/2, 0, this.w*0.02, this.h*2, 0xaabbcc);
        this.woodBoat2 = this.add.image(this.w*0.1, this.h*0.3, "woodboat").setScale(0.5);
        this.woodBoat = this.add.image(this.w*0.1, this.h*0.3, "woodboat")
            .setScale(0.5)
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => {
                this.price = 10;
                this.priceTxt.setText("Price: " + this.price);
                this.abilityTxt.setText("Basic wood");
            })
            .on('pointerdown', () => {
                if (this.price <= this.money && (this.woodBoatCount+this.plasticBoatCount) < 2) {
                    this.woodBoatCount += 1;
                    this.money -= this.price;
                    this.moneyTxt.setText("Money: " + this.money);
                    this.woodBoatTxt.setText("x" + this.woodBoatCount);
                }
            });
        
        this.woodSide2 = this.add.image(this.w*0.1, this.h*0.5, "woodside").setScale(0.6)
        this.woodSide = this.add.image(this.w*0.1, this.h*0.5, "woodside")
            .setScale(0.6)
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => {
                this.price = 15;
                this.priceTxt.setText("Price: " + this.price);
                this.abilityTxt.setText("Take less water damage");
            })
            .on('pointerdown', () => {
                console.log(this.woodSideCount+this.plasticSideCount);
                if (this.price <= this.money && (this.woodSideCount+this.plasticSideCount) < 2) {
                    this.woodSideCount += 1;
                    this.money -= this.price;
                    this.moneyTxt.setText("Money: " + this.money);
                    this.woodSideTxt.setText("x" + this.woodSideCount);
                }
            });

        this.plasticBoat2 = this.add.image(this.w*0.3, this.h*0.3, "plasticboat").setScale(0.5);
        this.plasticBoat = this.add.image(this.w*0.3, this.h*0.3, "plasticboat")
            .setScale(0.5)
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => {
                this.price = 50;
                this.priceTxt.setText("Price: " + this.price);
                this.abilityTxt.setText("More durable!");
            })
            .on('pointerdown', () => {
                if (this.price <= this.money && (this.woodBoatCount+this.plasticBoatCount) < 2) {
                    this.plasticBoatCount += 1;
                    this.money -= this.price;
                    this.moneyTxt.setText("Money: " + this.money);
                    this.plasticBoatTxt.setText("x" + this.plasticBoatCount);
                }
            });

        this.plasticSide2 = this.add.image(this.w*0.3, this.h*0.5, "plasticside").setScale(0.6);
        this.plasticSide = this.add.image(this.w*0.3, this.h*0.5, "plasticside")
            .setScale(0.6)
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => {
                this.price = 30;
                this.priceTxt.setText("Price: " + this.price);
                this.abilityTxt.setText("Take even less water damage!");
            })
            .on('pointerdown', () => {
                if (this.price <= this.money && (this.woodSideCount+this.plasticSideCount) < 2) {
                    this.plasticSideCount += 1;
                    this.money -= this.price;
                    this.moneyTxt.setText("Money: " + this.money);
                    this.plasticSideTxt.setText("x" + this.plasticSideCount);
                }
            });
        
        // var container = this.add.container(0, 0);
        this.startTxt = this.add.text(this.w*0.03, this.h*0.1, "Click here after chooosing the materials")
            .setFontSize(35)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                // Adds the floor
                if (this.woodBoatCount == 1 && this.plasticBoatCount == 1) {
                    this.woodBoat.x = this.w*0.7;
                    this.woodBoat.y = this.h*0.5;
                    this.plasticBoat.x = this.w*0.8;
                    this.plasticBoat.y = this.h*0.5;
                    waterRate -= 1.5;
                    haveWoodBoat = true;
                    havePlasticBoat = true;
                } else if (this.woodBoatCount == 2) {
                    this.woodBoat.x = this.w*0.7;
                    this.woodBoat.y = this.h*0.5;
                    this.woodBoat2.x = this.w*0.8;
                    this.woodBoat2.y = this.h*0.5;
                    waterRate -= 2;
                    haveWoodBoat = true;
                    haveWoodBoat2 = true;
                } else if (this.plasticBoatCount == 2) {
                    this.plasticBoat.x = this.w*0.7;
                    this.plasticBoat.y = this.h*0.5;
                    this.plasticBoat2.x = this.w*0.8;
                    this.plasticBoat2.y = this.h*0.5;
                    waterRate -= 2.5;
                    container.add(this.plasticBoat);
                    container.add(this.plasticBoat2);
                } else if (this.woodBoatCount == 1) {
                    this.woodBoat.x = this.w*0.75;
                    this.woodBoat.y = this.h*0.5;
                    waterRate -= 0.5;
                    haveWoodBoat = true;
                } else if (this.plasticBoatCount == 1) {
                    this.plasticBoat.x = this.w*0.75;
                    this.plasticBoat.y = this.h*0.5;
                    waterRate -= 1;
                    havePlasticBoat = true;
                }
                // Adds the sides
                if (this.woodSideCount == 1 && this.plasticSideCount == 1) {
                    this.woodSide.x = this.w*0.75;
                    this.woodSide.y = this.h*0.45;
                    this.plasticSide.x = this.w*0.75;
                    this.plasticSide.y = this.h*0.56;
                    waterRate -= 2;
                    haveWoodSide = true;
                    havePlasticSide = true;
                } else if (this.woodSideCount == 2) {
                    this.woodSide.x = this.w*0.75;
                    this.woodSide.y = this.h*0.44;
                    this.woodSide2.x = this.w*0.75;
                    this.woodSide2.y = this.h*0.56;
                    waterRate -= 1.5;
                    haveWoodSide = true;
                    haveWoodSide2 = true;
                } else if (this.plasticSideCount == 2) {
                    this.plasticSide.x = this.w*0.75;
                    this.plasticSide.y = this.h*0.44;
                    this.plasticSide2.x = this.w*0.75;
                    this.plasticSide2.y = this.h*0.56;
                    waterRate -= 2.5;
                    havePlasticSide = true;
                    havePlasticSide2 = true;
                } else if (this.woodSideCount == 1) {
                    this.woodSide.x = this.w*0.75;
                    this.woodSide.y = this.h*0.44;
                    waterRate -= 0.5;
                    haveWoodSide = true;
                } else if (this.plasticSideCount == 1) {
                    this.plasticSide.x = this.w*0.75;
                    this.plasticSide.y = this.h*0.44;
                    waterRate -= 1;
                    havePlasticSide = true;
                }
            });

            


            this.end = this.add.text(this.w*0.6, this.h*0.1, "Looks Good?")
                .setFontSize(35)
                .setInteractive({useHandCursor: true})
                .on('pointerdown', () => {
                    // Get the list of children
                    this.scene.start('first');
                });


    }

    update() {    
       
    }

}