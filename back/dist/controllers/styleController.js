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
exports.deactivateStyle = exports.updateStyle = exports.getStyles = exports.createStyle = void 0;
const styleService_1 = require("../services/styleService");
const createStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const styleData = req.body;
        const newStyle = yield (0, styleService_1.createStyleService)(styleData);
        res.status(201).json(newStyle);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating style', error });
    }
});
exports.createStyle = createStyle;
const getStyles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const styles = yield (0, styleService_1.getStylesService)();
        res.status(200).json(styles);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching styles', error });
    }
});
exports.getStyles = getStyles;
const updateStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const styleId = parseInt(req.params.id, 10);
        const styleData = req.body;
        const updatedStyle = yield (0, styleService_1.updateStyleService)(styleId, styleData);
        res.status(200).json(updatedStyle);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating style', error });
    }
});
exports.updateStyle = updateStyle;
const deactivateStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const styleId = parseInt(req.params.id, 10);
        const deactivatedStyle = yield (0, styleService_1.deactivateStyleService)(styleId);
        res.status(200).json(deactivatedStyle);
    }
    catch (error) {
        res.status(500).json({ message: 'Error deactivating style', error });
    }
});
exports.deactivateStyle = deactivateStyle;
