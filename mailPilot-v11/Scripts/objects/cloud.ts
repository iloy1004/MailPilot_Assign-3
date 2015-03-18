﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Cloud class
    export class Cloud {
        image: createjs.Sprite;
        image2: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "attackBird1");
            this.image2 = new createjs.Sprite(managers.Assets.atlas, "attackBird2");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
            game.addChild(this.image2);
        }

        update() {
            this.image.y -= this.dy;
            this.image.x -= this.dx;

            this.image2.y -= this.dy;
            this.image2.x -= this.dx;

            if (this.image.x < 0) {
                this.reset();
            }

            if (this.image2.x < 0) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -5) + Math.floor(Math.random() * 5);
            this.dx = Math.floor(Math.random() * 7 + 7);
            this.image.x = this.stage.canvas.width;

            this.image2.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dy = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
            this.dx = Math.floor(Math.random() * 6 + 6);
            this.image2.x = this.stage.canvas.width;
        }

        destroy() {
            game.removeChild(this.image);
            game.removeChild(this.image2);
        }
    }

}