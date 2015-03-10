/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/asset.ts" />
var states;
(function (states) {
    function playState() {
        ocean.update();
        island.update();
        plane.update();
        bullet.update();
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
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        island = new objects.Island(stage, game);
        plane = new objects.Plane(stage, game);
        bullet = new objects.Bullet(stage, game);
        // Show Cursor
        stage.cursor = "hand";
        for (var count = constants.CLOUD_NUM; count >= 0; count--) {
            clouds[count] = new objects.Cloud(stage, game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(plane, island, clouds, scoreboard, bullet);
        stage.addChild(game);
        plane.image.addEventListener("click", shoot);
    }
    states.play = play;
    function shoot() {
        bullet.update();
    }
})(states || (states = {}));
//# sourceMappingURL=play.js.map