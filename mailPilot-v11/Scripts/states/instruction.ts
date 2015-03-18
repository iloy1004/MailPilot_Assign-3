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
        // About enermy
        attackBird1.x = (stage.canvas.width / 6) - 100;
        attackBird1.y = 50;
        game.addChild(attackBird1);

        attackBird2.x = (stage.canvas.width / 6);
        attackBird2.y = 50;
        game.addChild(attackBird2);

        msgBird = new createjs.Text("Your enemy. You'll lose your life when hit them.\nJust avoid or shoot them", "30px Arial", "#000000");
        msgBird.x = (stage.canvas.width / 6) + 180;
        msgBird.y = 50;
        game.addChild(msgBird);

        // About bonus
        bonus1.x = (stage.canvas.width / 6) - 100;
        bonus1.y = 150;
        game.addChild(bonus1);

        msgBonus = new createjs.Text("Your bonus. You'll get the score when hit them.\nTry hit them as much as you can!", "30px Arial", "#000000");
        msgBonus.x = (stage.canvas.width / 6) + 180;
        msgBonus.y = 150;
        game.addChild(msgBonus);


        // About bullet
        shot1.x = (stage.canvas.width / 6) - 100;
        shot1.y = 250;
        game.addChild(shot1);

        msgShot = new createjs.Text("Your bullet. You can kill the birds when click your balloon.\nShoot! and go go!", "30px Arial", "#000000");
        msgShot.x = (stage.canvas.width / 6) + 180;
        msgShot.y = 250;
        game.addChild(msgShot);

        // About boss
        boss.x = (stage.canvas.width / 6) - 100;
        boss.y = 350;
        game.addChild(boss);

        msgBoss = new createjs.Text("The boss bird. You need some special bullet!.\nShoot! and go go!", "30px Arial", "#000000");
        msgBoss.x = (stage.canvas.width / 6) + 180;
        msgBoss.y = 350;
        game.addChild(msgBoss);


        // Display Try Again Button
        backButton = new objects.Button(stage.canvas.width / 2, 600, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", backClicked);

        stage.addChild(game);

    }
}