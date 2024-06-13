"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/index.ts
const express_1 = require("express");
const usersRouter_1 = __importDefault(require("./usersRouter"));
const credentialRouter_1 = __importDefault(require("./credentialRouter"));
const roleRoutes_1 = __importDefault(require("./roleRoutes"));
const appointmentsrouter_1 = __importDefault(require("./appointmentsrouter"));
const classRouter_1 = __importDefault(require("./classRouter"));
const styleRouter_1 = __importDefault(require("./styleRouter"));
const router = (0, express_1.Router)();
router.use('/user', usersRouter_1.default);
router.use('/users', credentialRouter_1.default);
router.use('/turns', appointmentsrouter_1.default);
router.use('/roles', roleRoutes_1.default);
router.use('/classes', classRouter_1.default);
router.use('/styles', styleRouter_1.default);
exports.default = router;
