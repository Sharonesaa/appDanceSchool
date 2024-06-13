"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = require("../controllers/roleController");
const roleRouter = (0, express_1.Router)();
// Rutas para roles
roleRouter.get('/', roleController_1.getRoles);
exports.default = roleRouter;
