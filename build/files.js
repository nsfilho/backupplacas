"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var OUTPUT_DIR = './out';
exports.mkOutDir = function () {
    if (!fs_1.existsSync(OUTPUT_DIR))
        fs_1.mkdirSync(OUTPUT_DIR);
};
exports.saveFile = function (board) {
    var pathFile = path_1.join(OUTPUT_DIR, board.ip.replace('.', '_') + ".txt");
    console.log("Saving " + board.ip + " to file: " + pathFile);
    fs_1.writeFileSync(pathFile, JSON.stringify(board.config, null, 4));
};
//# sourceMappingURL=files.js.map