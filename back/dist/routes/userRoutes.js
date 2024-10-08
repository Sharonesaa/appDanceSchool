"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post('/register', userController_1.createUser);
// router.get('/users', userController.getUsers);
// router.delete('/users/:id', userController.deleteUser);
// router.put('/users/:id', userController.updateUser);
// router.put('/users/:id', upload.single('profilePicture'), userController.updateUser);
exports.default = router;
