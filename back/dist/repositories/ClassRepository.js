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
const data_source_1 = require("../config/data-source");
const Class_1 = require("../entities/Class");
const ClassRepository = data_source_1.AppDataSource.getRepository(Class_1.Class).extend({
    findActiveClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({ where: { active: true }, relations: ['style'] });
        });
    },
    findClassesByStyleId(styleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({ where: { style: { id: styleId } }, relations: ['style'] });
        });
    },
    deactivateClassById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const classEntity = yield this.findOne({ where: { id } });
            if (!classEntity) {
                throw new Error('Class not found');
            }
            classEntity.active = false;
            return this.save(classEntity);
        });
    }
});
exports.default = ClassRepository;
