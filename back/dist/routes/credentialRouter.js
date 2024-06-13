"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const credentialRouter = (0, express_1.Router)();
credentialRouter.post('/login', userController_1.loginUser);
exports.default = credentialRouter;
