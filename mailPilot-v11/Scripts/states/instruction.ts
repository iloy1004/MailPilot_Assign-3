﻿/// <reference path="../constants.ts" />
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
        var msgBird = new createjs.Text;
        var msgBonus = new createjs.Text;
        var msgShot = new createjs.Text;
        var msgShot3 = new createjs.Text;
        var msgBoss = new createjs.Text;
        var msgPoo = new createjs.Text;

        var attackBird1: createjs.Sprite;
        var attackBird2: createjs.Sprite;
        var bonus1: createjs.Sprite;
        var bonus2: createjs.Sprite;
        var shot1: createjs.Sprite;
        var shot3: createjs.Sprite;
        var boss: createjs.Sprite;
        var poo: createjs.Sprite;

        attackBird1 = new createjs.Sprite(managers.Assets.atlas, "attackBird1");
        attackBird2 = new createjs.Sprite(managers.Assets.atlas, "attackBird2");
        bonus1 = new createjs.Sprite(managers.Assets.atlas, "bonus1");
        bonus2 = new createjs.Sprite(managers.Assets.atlas, "bonus2");
        shot1 = new createjs.Sprite(managers.Assets.atlas, "1shot");
        shot3 = new createjs.Sprite(managers.Assets.atlas, "3shot");
        boss = new createjs.Sprite(managers.Assets.atlas, "boss");
        poo = new createjs.Sprite(managers.Assets.atlas, "poo");

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

        msgBird = new createjs.Text("Your enemy. You'll lose your life when hit them.\nJust avoid or shoot them", "20px Maven Pro", "#000000");
        msgBird.x = (stage.canvas.width / 6) + 180;
        msgBird.y = 50;
        game.addChild(msgBird);

        // About bonus
        bonus1.x = (stage.canvas.width / 6) - 100;
        bonus1.y = 150;
        game.addChild(bonus1);

        msgBonus = new createjs.Text("Your bonus. You'll get the score when hit them.\nTry hit them as much as you can!", "20px Maven Pro", "#000000");
        msgBonus.x = (stage.canvas.width / 6) + 180;
        msgBonus.y = 150;
        game.addChild(msgBonus);


        // About bullet
        shot1.x = (stage.canvas.width / 6) - 100;
        shot1.y = 220;
        game.addChild(shot1);

        msgShot = new createjs.Text("Your bullet. You can kill the birds when click your balloon.\nShoot! and go go!", "20px Maven Pro", "#000000");
        msgShot.x = (stage.canvas.width / 6) + 180;
        msgShot.y = 220;
        game.addChild(msgShot);

        // About bullet
        shot3.x = (stage.canvas.width / 6) - 100;
        shot3.y = 290;
        game.addChild(shot3);

        msgShot3 = new createjs.Text("Your special bullet. You can use this when you meet the boss bird\nShoot! and win!", "20px Maven Pro", "#000000");
        msgShot3.x = (stage.canvas.width / 6) + 180;
        msgShot3.y = 320;
        game.addChild(msgShot3);

        // About boss
        boss.x = (stage.canvas.width / 6) - 100;
        boss.y = 450;
        game.addChild(boss);

        msgBoss = new createjs.Text("The boss bird. You need some special bullet!.\nYou will lose your hp when touch the boss!", "20px Maven Pro", "#000000");
        msgBoss.x = (stage.canvas.width / 6) + 180;
        msgBoss.y = 450;
        game.addChild(msgBoss);

        // About poo
        poo.x = (stage.canvas.width / 6) - 100;
        poo.y = 550;
        game.addChild(poo);

        msgPoo = new createjs.Text("The poos. You can see those when you meet the boss.\nThey will fly to you! Shoot!", "20px Maven Pro", "#000000");
        msgPoo.x = (stage.canvas.width / 6) + 180;
        msgPoo.y = 550;
        game.addChild(msgPoo);

        // Display Try Again Button
        backButton = new objects.Button(stage.canvas.width / 2, 650, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", backClicked);

        stage.addChild(game);

    }
}