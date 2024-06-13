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
exports.deactivateClassController = exports.updateClassController = exports.createClassController = exports.getAllClassesController = exports.getClassByIdController = void 0;
const classService_1 = require("../services/classService");
const getClassByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classId = parseInt(req.params.id, 10);
        const classInfo = yield (0, classService_1.getClassByIdService)(classId);
        res.status(200).json(classInfo);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching class', error });
    }
});
exports.getClassByIdController = getClassByIdController;
const getAllClassesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classes = yield (0, classService_1.getAllClassesService)();
        res.status(200).json(classes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching classes', error });
    }
});
exports.getAllClassesController = getAllClassesController;
const createClassController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { day, startTime, endTime, price, active, styleId } = req.body;
        // Llamar al servicio para crear la clase
        const newClass = yield (0, classService_1.createClassService)({ day, startTime, endTime, price, styleId });
        // Devolver la respuesta al cliente
        return res.status(201).json(newClass);
    }
    catch (error) {
        console.error('Error creating class:', error);
        return res.status(500).json({ message: 'Error creating class', error });
    }
});
exports.createClassController = createClassController;
const updateClassController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classId = parseInt(req.params.id, 10);
        const classData = req.body;
        const updatedClass = yield (0, classService_1.updateClassService)(classId, classData);
        res.status(200).json(updatedClass);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating class', error });
    }
});
exports.updateClassController = updateClassController;
const deactivateClassController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classId = parseInt(req.params.id, 10);
        if (isNaN(classId)) {
            return res.status(400).json({ message: 'Invalid class ID' });
        }
        const updatedClass = yield (0, classService_1.deactivateClassService)(classId);
        res.status(200).json(updatedClass);
    }
    catch (error) {
        res.status(500).json({ message: 'Error deactivating class', error });
    }
});
exports.deactivateClassController = deactivateClassController;
