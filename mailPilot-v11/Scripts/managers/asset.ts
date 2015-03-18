module managers {
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
        "images": [""],
        "frames": [
            [5, 3, 193, 402], //plane
            [212, 6, 410,90], //instructionsButton
            [226, 102, 348, 90], //playButton
            [267, 200, 332, 90], //tryAgainButton
            [226, 294, 348, 90], //backButton
            [5, 409, 103, 62], //cloud
            [123, 409, 103, 62], //cloud2
            [507, 409, 103, 62], //helpPlane
            [238, 411, 74, 62], //island
            [320, 411, 74, 62], //island2
            [406, 436, 21, 26], //heart
            [439, 407, 61, 58], //poo
            [626, 16, 160, 64], //1shot
            [626, 92, 180, 123], //3shot
            [626, 226, 258, 242] //boss
        ],
        "animations": {
            "actor": [0],
            "instructionsButton": [1],
            "playButton": [2],
            "tryAgainButton": [3],
            "backButton": [4],
            "attackBird1": [5],
            "attackBird2": [6],
            "helpBird": [7],
            "bonus1": [8],
            "bonus2": [9],
            "heart": [10],
            "poo": [11],
            "1shot": [12],
            "3shot": [13],
            "boss":[14]
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