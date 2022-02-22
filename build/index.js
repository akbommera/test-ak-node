"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const path_1 = require("path");
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;
const autoRoutes = require('express-auto-routes')(app);
autoRoutes((0, path_1.join)(__dirname, './controllers'));
app.get('/ping', (req, res) => {
    res.send('pong');
});
var server = app.listen(PORT, () => {
    console.log(`Node Server litening on http://localhost:${PORT}`);
});
app.use(express_1.default.static('coverage'));
module.exports = { app: app, server };
//# sourceMappingURL=index.js.map