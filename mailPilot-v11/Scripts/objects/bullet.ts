/// <reference path="../managers/asset.ts" />
module objects {
    // Island Class
    export class Bullet {
        image: createjs.Sprite;
        image2: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "1shot");
            this.image2 = new createjs.Sprite(managers.Assets.atlas, "3shot");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;

            this.dy = 5;

            game.addChild(this.image);

            createjs.Sound.play("shot");
        }

        update() {

            this.image.x += this.dy;
            if (this.image.x > this.stage.canvas.width) {
                this.reset();
            }
        }

        reset() {
            //this.image.x = this.stage.canvas.width;
            //this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            game.removeChild(this.image);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}