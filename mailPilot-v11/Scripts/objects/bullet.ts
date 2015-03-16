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

            this.dy = 25;

            game.addChild(this.image);

            createjs.Sound.play("shot");
        }

        update() {
            this.image.x += this.dy;
            
            if (this.image.x > this.stage.canvas.width + 160) {

                console.log("image.x: " + this.image.x);
                console.log("canvas.width: " + this.stage.canvas.width);

                this.reset();
            }
        }

        reset() {

            if (constants.BULLET_NUM > 0) {
                constants.BULLET_NUM = constants.BULLET_NUM - 1;
            }
            game.removeChild(this.image);
            
            console.log("reset bullet num: " + constants.BULLET_NUM);
        }

        destroy() {

            if (constants.BULLET_NUM > 0) {
                constants.BULLET_NUM -= 1;
            }

            game.removeChild(this.image);
            
            console.log("destroy bullet num: " + constants.BULLET_NUM);
        }
    }

}