﻿/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />

/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class bulletCollision {

        // class variables
        private bullet: objects.Bullet;
        private clouds = [];
        private scoreboard: objects.Scoreboard;

        constructor(clouds, scoreboard: objects.Scoreboard, bullet:objects.Bullet) {
            this.clouds = clouds;
            this.scoreboard = scoreboard;
            this.bullet = bullet;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between bullet and cloud
        private bulletAndCloud(cloud: objects.Cloud, bullet: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = bullet.image.x;
            p1.y = bullet.image.y;

            p2.x = cloud.image.x;
            p2.y = cloud.image.y;

            if (this.distance(p1, p2) < ((bullet.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("shot");
                this.scoreboard.score += 50;
                //bullet.reset();
                game.removeChild(bullet.image);
                cloud.reset();
            }
        }


        // Utility Function to Check Collisions
        update() {

            for (var i = constants.CLOUD_NUM; i >= 0; i--) {
                this.bulletAndCloud(this.clouds[i], this.bullet);
            }
        }
    }
} 