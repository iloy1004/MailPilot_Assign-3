﻿module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.gif" },
        { id: "sky", src: "assets/images/sky1.png" },
        { id: "engine", src: "assets/sounds/backsound.mp3" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" },
        { id: "shot", src: "assets/sounds/shot2.wav" }
    ];


    var spriteSheetData = {
        "images": ["assets/images/atlas1.png"],
        "frames": [
            [5, 3, 193, 470], //plane
            [212, 3, 410,90], //instructionsButton
            [226, 99, 348, 90], //playButton
            [267, 192, 332, 90], //tryAgainButton
            [238, 306, 103, 62], //cloud
            [348, 306, 103, 62], //cloud2
            [492, 306, 103, 62], //helpPlane
            [238, 411, 74, 62], //island
            [348, 411, 74, 62], //island2
            [458, 423, 21, 26], //heart
            [492, 416, 53, 53], //pooh
            [626, 16, 160, 64], //1shot
            [626, 92, 180, 123], //3shot
            [626, 226, 258, 242] //boss
        ],
        "animations": {
            "actor": [0],
            "instructionsButton": [1],
            "playButton": [2],
            "tryAgainButton": [3],
            "attackBird1": [4],
            "attackBird2": [5],
            "helpBird": [6],
            "bonus1": [7],
            "bonus2": [8],
            "heart": [9],
            "pooh": [10],
            "1shot": [11],
            "3shot": [12],
            "boss":[13]
        }
    }


    // SpriteSheet Data Object
    /*var spriteSheetData = {
        "images": ["assets/images/atlas1.png"],
        "frames": [
            [2, 2, 226, 178],
            [230, 2, 211, 69],
            [443, 69, 62, 63],
            [443, 2, 65, 65],
            [230, 73, 211, 69],
            [230, 144, 211, 69]
        ],
        "animations": {
            "cloud": [0],
            "instructionsButton": [1],
            "island": [2],
            "plane": [3],
            "playButton": [4],
            "tryAgainButton": [5]
        }
    }*/

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 