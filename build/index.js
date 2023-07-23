"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// PORT
exports.PORT = process.env.PORT_KEY ? process.env.PORT_KEY : 3001;
// SERVER
try {
    app_1.default.listen(exports.PORT, () => {
        console.log(`Server Run on port ${exports.PORT}`);
    });
}
catch (err) {
    console.error(err);
}
