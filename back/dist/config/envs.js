"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PASSWORD = exports.DB_NAME = exports.DB_USERNAME = exports.DB_PORT = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.DB_PORT = process.env.DB_PORT;
exports.DB_USERNAME = process.env.DB_USERNAME;
exports.DB_NAME = process.env.DB_NAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
