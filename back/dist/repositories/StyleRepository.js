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
const Style_1 = require("../entities/Style");
const StyleRepository = data_source_1.AppDataSource.getRepository(Style_1.Style).extend({
    findActiveStyles() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({ where: { active: true } });
        });
    },
    deactivateStyleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const style = yield this.findOne({ where: { id } });
            if (!style) {
                throw new Error('Style not found');
            }
            style.active = false;
            return this.save(style);
        });
    }
});
exports.default = StyleRepository;
