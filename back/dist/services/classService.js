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
exports.deactivateClassService = exports.updateClassService = exports.getAllClassesService = exports.getClassByIdService = exports.createClassService = void 0;
const data_source_1 = require("../config/data-source");
const data_source_2 = require("../config/data-source");
const createClassService = (classData) => __awaiter(void 0, void 0, void 0, function* () {
    const { day, startTime, endTime, price, styleId } = classData;
    console.log(classData);
    // Obtener el repositorio de la clase y el estilo
    const classRepository = data_source_1.ClassModel;
    const styleRepository = data_source_2.StyleModel;
    // Buscar el estilo por su ID en la base de datos
    const style = yield styleRepository.findOne({ where: { id: styleId } });
    if (!style) {
        throw new Error('Style not found');
    }
    // Crear una nueva instancia de la clase con el estilo asociado
    const newClass = classRepository.create({
        day,
        startTime,
        endTime,
        price,
        style, // Asignar el estilo obtenido de la base de datos
    });
    // Guardar la nueva instancia de la clase en la base de datos
    yield classRepository.save(newClass);
    // Devolver la nueva instancia de la clase creada
    return newClass;
});
exports.createClassService = createClassService;
const getClassByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const classInfo = yield data_source_1.ClassModel.findOneBy({ id });
    return classInfo;
});
exports.getClassByIdService = getClassByIdService;
const getAllClassesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const classes = yield data_source_1.ClassModel.find();
    return classes;
});
exports.getAllClassesService = getAllClassesService;
const updateClassService = (id, classData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingClass = yield data_source_1.ClassModel.findOne({ where: { id } });
    if (!existingClass) {
        throw new Error('Class not found');
    }
    data_source_1.ClassModel.merge(existingClass, classData);
    const updatedClass = yield data_source_1.ClassModel.save(existingClass);
    return updatedClass;
});
exports.updateClassService = updateClassService;
const deactivateClassService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingClass = yield data_source_1.ClassModel.findOne({ where: { id } });
    if (!existingClass) {
        throw new Error('Class not found');
    }
    existingClass.active = false;
    const updatedClass = yield data_source_1.ClassModel.save(existingClass);
    return updatedClass;
});
exports.deactivateClassService = deactivateClassService;
