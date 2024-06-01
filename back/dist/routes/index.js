"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/index.ts
const express_1 = require("express");
const usersRouter_1 = __importDefault(require("./usersRouter"));
const appointmentsrouter_1 = __importDefault(require("./appointmentsrouter"));
const router = (0, express_1.Router)();
router.use('/users', usersRouter_1.default);
router.use('/appointments', appointmentsrouter_1.default);
exports.default = router;
