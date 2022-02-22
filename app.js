"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rollupProject_1 = require("@build/rollupProject");
exports.default = (0, rollupProject_1.default)({
    main: {
        name: 'LichessRacer',
        input: 'src/main.ts',
        output: 'racer',
    },
});
