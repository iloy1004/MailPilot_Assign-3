/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />

/// <reference path="../managers/asset.ts" />

module states {
    

    // Restart Game when Try Again Button is clicked
    export function backClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instructionState() {
        ocean.update();
    }

    // Game Over Scene
    export function instruction() {
        var msgBird: objects.Label;
        var msgBonus: objects.Label;
        var msgShot: objects.Label;
        var msgBoss: objects.Label;

        var attackBird1: createjs.Sprite;
        var attackBird2: createjs.Sprite;
        var bonus1: createjs.Sprite;
        var bonus2: createjs.Sprite;
        var shot1: createjs.Sprite;
        var shot3: createjs.Sprite;
        var boss: createjs.Sprite;

        attackBird1 = new createjs.Sprite(managers.Assets.atlas, "attackBird1");
        attackBird2 = new createjs.Sprite(managers.Assets.atlas, "attackBird2");
        bonus1 = new createjs.Sprite(managers.Assets.atlas, "bonus1");
        bonus2 = new createjs.Sprite(managers.Assets.atlas, "bonus2");
        shot1 = new createjs.Sprite(managers.Assets.atlas, "1shot");
        shot3 = new createjs.Sprite(managers.Assets.atlas, "3shot");
        boss = new createjs.Sprite(managers.Assets.atlas, "boss");

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display game images and details
        attackBird1.x = (stage.canvas.width / 2) - 100;
        attackBird1.y = 100;
        game.addChild(attackBird1);

        attackBird2.x = (stage.canvas.width / 2);
        attackBird2.y = 100;
        game.addChild(attackBird2);

        msgBird = new objects.Label((stage.canvas.width / 2)+100, 100, "Your enemy. You'll lose your life when hit them. Just avoid or shoot them");
        game.addChild(msgBird);

        // Display Try Again Button
        backButton = new objects.Button(stage.canvas.width / 2, 300, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", backClicked);

        stage.addChild(game);

    }
}