var managers;
(function (managers) {
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
            [5, 3, 193, 402],
            [212, 6, 410, 90],
            [226, 102, 348, 90],
            [267, 200, 332, 90],
            [226, 294, 348, 90],
            [5, 409, 103, 62],
            [123, 409, 103, 62],
            [507, 409, 103, 62],
            [238, 411, 74, 62],
            [320, 411, 74, 62],
            [406, 436, 21, 26],
            [439, 407, 61, 58],
            [626, 16, 160, 64],
            [626, 92, 180, 123],
            [626, 226, 258, 242]
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
            "boss": [14]
        }
    };
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
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map