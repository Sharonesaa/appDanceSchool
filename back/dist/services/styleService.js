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
exports.deactivateStyleService = exports.deleteStyleService = exports.updateStyleService = exports.getStyleByIdService = exports.getStylesService = exports.createStyleService = void 0;
const data_source_1 = require("../config/data-source");
const StyleRepository_1 = __importDefault(require("../repositories/StyleRepository"));
const styleRepository = data_source_1.AppDataSource.getCustomRepository(StyleRepository_1.default);
const createStyleService = (styleData) => __awaiter(void 0, void 0, void 0, function* () {
    styleData.active = true;
    const newStyle = yield styleRepository.save(styleData);
    return newStyle;
});
exports.createStyleService = createStyleService;
const getStylesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const styles = yield styleRepository.findActiveStyles();
    return styles;
});
exports.getStylesService = getStylesService;
const getStyleByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const style = yield styleRepository.findOne({ where: { id } });
    return style;
});
exports.getStyleByIdService = getStyleByIdService;
const updateStyleService = (id, styleData) => __awaiter(void 0, void 0, void 0, function* () {
    yield styleRepository.update(id, styleData);
    const updatedStyle = yield styleRepository.findOne({ where: { id } });
    return updatedStyle;
});
exports.updateStyleService = updateStyleService;
const deleteStyleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield styleRepository.delete(id);
});
exports.deleteStyleService = deleteStyleService;
const deactivateStyleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedStyle = yield styleRepository.deactivateStyleById(id);
    return updatedStyle;
});
exports.deactivateStyleService = deactivateStyleService;
