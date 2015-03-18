/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bossscoreboard.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/superbullet.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletcollision.ts" />
/// <reference path="../managers/bosscollision.ts" />
var states;
(function (states) {
    function playState() {
        //bullet.update();
        ocean.update();
        island.update();
        plane.update();
        for (var count = constants.CLOUD_NUM; count >= 0; count--) {
            clouds[count].update();
        }
        collision.update();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            constants.CURRENT_SCORE = scoreboard.score;
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        if (scoreboard.score > 300) {
            stage.removeChild(game);
            for (var count = constants.CLOUD_NUM; count >= 0; count--) {
                clouds[count].destroy();
            }
            constants.CURRENT_SCORE = scoreboard.score;
            constants.PLANE_LIVES = scoreboard.lives;
            currentState = constants.BOSS_STATE;
            changeState(currentState);
        }
        if (constants.IS_BULLET) {
            bullet.update();
            bulletCollision.update();
        }
    }
    states.playState = playState;
    function shoot() {
        if (!constants.IS_BULLET) {
            constants.IS_BULLET = true;
            // Create multiple bullets
            bullet = new objects.Bullet(stage, game);
            // Instantiate Collision Manager
            bulletCollision = new managers.bulletCollision(clouds, scoreboard, bullet);
        }
    }
    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);
        plane.image.addEventListener("click", shoot);
        // Show Cursor
        stage.cursor = "default";
        for (var count = constants.CLOUD_NUM; count >= 0; count--) {
            clouds[count] = new objects.Cloud(stage, game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(plane, island, clouds, scoreboard);
        //game.addEventListener("click", shoot);
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map