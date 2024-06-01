"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/credential.ts
const express_1 = require("express");
const credentialController_1 = require("../controllers/credentialController");
const credentialRouter = (0, express_1.Router)();
credentialRouter.post('/', credentialController_1.createCredential);
credentialRouter.post('/validate', credentialController_1.validateCredential);
exports.default = credentialRouter;
