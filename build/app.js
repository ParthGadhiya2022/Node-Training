"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
server.listen(PORT || 8080);
