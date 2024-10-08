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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateClassService = exports.updateClassService = exports.getAllClassesService = exports.getClassByIdService = exports.createClassService = void 0;
const ClassRepository_1 = __importDefault(require("../repositories/ClassRepository"));
const StyleRepository_1 = __importDefault(require("../repositories/StyleRepository"));
const createClassService = (classData) => __awaiter(void 0, void 0, void 0, function* () {
    const { day, startTime, endTime, price, styleId } = classData;
    console.log(classData);
    const style = yield StyleRepository_1.default.findOne({ where: { id: styleId } });
    if (!style) {
        throw new Error('Style not found');
    }
    const newClass = ClassRepository_1.default.create({
        day,
        startTime,
        endTime,
        price,
        style, // Asignar el estilo obtenido de la base de datos
    });
    yield ClassRepository_1.default.save(newClass);
    return newClass;
});
exports.createClassService = createClassService;
const getClassByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const classInfo = yield ClassRepository_1.default.findOne({ where: { id }, relations: ['style'] });
    return classInfo;
});
exports.getClassByIdService = getClassByIdService;
const getAllClassesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const classes = yield ClassRepository_1.default.findActiveClasses();
    return classes;
});
exports.getAllClassesService = getAllClassesService;
const updateClassService = (id, classData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingClass = yield ClassRepository_1.default.findOne({ where: { id } });
    if (!existingClass) {
        throw new Error('Class not found');
    }
    ClassRepository_1.default.merge(existingClass, classData);
    const updatedClass = yield ClassRepository_1.default.save(existingClass);
    return updatedClass;
});
exports.updateClassService = updateClassService;
const deactivateClassService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedClass = yield ClassRepository_1.default.deactivateClassById(id);
    return updatedClass;
});
exports.deactivateClassService = deactivateClassService;
