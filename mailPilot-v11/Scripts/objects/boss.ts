/// <reference path="../managers/asset.ts" />
module objects {
    // Cloud class
    export class Boss {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        dy: number;
        dx: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "boss");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);

            this.engineSound = createjs.Sound.play('bossBGM', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }

        update() {

            this.image.y -= this.dy;
            this.image.x -= this.dx;

            if (this.image.x <= 0) {
                this.setPoint();
                this.dx = this.dx * -1;

                if (this.image.y >= this.stage.canvas.height) {
                    console.log("out of canvas bottom");
                    this.reset();
                }
                else {
                    this.dy = this.dy * -1;
                }
            }
            else if (this.image.x >= this.stage.canvas.width) {
                this.setPoint();
                this.dx = this.dx * 1;

                if (this.image.y <= 0) {
                    console.log("out of canvas top");
                    this.reset();
                }
                else {
                    this.dy = this.dy * 1;
                }
                
            }
            else if (this.image.y <= 0) {
                this.setPoint();
                this.dy = this.dy * -1;
                this.dx = this.dx * -1;
            }
            else if (this.image.y >= this.stage.canvas.height) {
                this.setPoint();
                this.dy = this.dy * 1;
                this.dx = this.dx * 1;
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -10) + Math.floor(Math.random() * 10);
            //this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 10 + 10);
            this.image.x = this.stage.canvas.width;
        }

        setPoint() {
            this.dy = Math.floor(Math.random() * -10) + Math.floor(Math.random() * 10);
            //this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.dx = Math.floor(Math.random() * 10 + 10);
        }


        destroy() {
            game.removeChild(this.image);
            this.engineSound.stop();
        }
    }

}