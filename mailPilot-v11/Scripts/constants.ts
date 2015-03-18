﻿module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var MSG_STATE: number = 3;
    export var BOSS_STATE: number = 4;
    export var WIN_STATE: number = 5;

    // Game Constants
    export var IS_BULLET: boolean = false;
    export var CLOUD_NUM: number = 3;
    export var POO_NUM: number = 3;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";

    // Current Game values
    export var PLANE_LIVES = 5;
    export var CURRENT_SCORE: number = 0;
    export var BOSS_HP: number = 1000;
    export var PLANE_HP: number = 1000;
}