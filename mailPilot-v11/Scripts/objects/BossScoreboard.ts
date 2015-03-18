module objects {
    // Scoreboard Class
    export class BossScoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        plane_hp: number;
        score: number;
        boss_hp: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.plane_hp = constants.PLANE_HP;
            this.boss_hp = constants.BOSS_HP;
            this.score = constants.CURRENT_SCORE;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }

        update() {
            this.labelText = "Lives: " + this.plane_hp.toString() + " Score: " + this.score.toString() + " Boss's HP: " + this.boss_hp.toString();
            this.label.text = this.labelText;
        }

        destroy() {
            game.removeChild(this.label);
        }
    }
} 