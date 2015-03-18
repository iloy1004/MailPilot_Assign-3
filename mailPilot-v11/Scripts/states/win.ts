﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bossscoreboard.ts" />

module states {
    export function winState() {
        ocean.update();
    }


    // Game Over Scene
    export function win() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "WIN!!");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, bossScore.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 280, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        // Display Try Again Button
        backButton = new objects.Button(stage.canvas.width / 2, 360, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", backClicked);

        // Display Play Again Button
        msgButton = new objects.Button(stage.canvas.width / 2, 430, "instructionsButton");
        game.addChild(msgButton);
        msgButton.addEventListener("click", msgButtonClicked);

        stage.addChild(game);

    }
}