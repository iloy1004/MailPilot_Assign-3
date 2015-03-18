var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.MSG_STATE = 3;
    constants.BOSS_STATE = 4;
    constants.WIN_STATE = 5;
    // Game Constants
    constants.IS_BULLET = false;
    constants.CLOUD_NUM = 3;
    constants.POO_NUM = 3;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    // Current Game values
    constants.PLANE_LIVES = 5;
    constants.CURRENT_SCORE = 0;
    constants.BOSS_HP = 1000;
    constants.PLANE_HP = 1000;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map