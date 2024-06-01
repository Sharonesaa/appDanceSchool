"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredential = exports.createCredential = void 0;
const credentialService_1 = require("../services/credentialService");
const createCredential = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const credentialId = yield (0, credentialService_1.createCredentialService)(username, password);
        res.status(201).json({ credentialId });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating credential', error });
    }
});
exports.createCredential = createCredential;
const validateCredential = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const credentialId = yield (0, credentialService_1.validateCredentialService)(username, password);
        if (credentialId !== null) {
            res.status(200).json({ credentialId });
        }
        else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error validating credential', error });
    }
});
exports.validateCredential = validateCredential;
