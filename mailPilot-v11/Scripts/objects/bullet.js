/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Bullet = (function () {
        function Bullet(stage, game) {
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
        Bullet.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x > this.stage.canvas.width) {
                this.reset();
            }
        };
        Bullet.prototype.reset = function () {
            //this.image.x = this.stage.canvas.width;
            //this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            game.removeChild(this.image);
        };
        Bullet.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Bullet;
    })();
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map