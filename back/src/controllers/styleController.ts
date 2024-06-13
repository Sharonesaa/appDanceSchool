import { Request, Response } from 'express';
import { createStyleService, getStylesService, getStyleByIdService, updateStyleService, deleteStyleService, deactivateStyleService } from '../services/styleService';
import { StyleDTO } from '../dto/Style';

export const createStyle = async (req: Request, res: Response) => {
    try {
        const styleData: StyleDTO = req.body;
        const newStyle = await createStyleService(styleData);
        res.status(201).json(newStyle);
    } catch (error) {
        res.status(500).json({ message: 'Error creating style', error });
    }
};

export const getStyles = async (req: Request, res: Response) => {
    try {
        const styles = await getStylesService();
        res.status(200).json(styles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching styles', error });
    }
};

export const updateStyle = async (req: Request, res: Response) => {
    try {
        const styleId = parseInt(req.params.id, 10);
        const styleData: StyleDTO = req.body;
        const updatedStyle = await updateStyleService(styleId, styleData);
        res.status(200).json(updatedStyle);
    } catch (error) {
        res.status(500).json({ message: 'Error updating style', error });
    }
};

export const deactivateStyle = async (req: Request, res: Response) => {
    try {
        const styleId = parseInt(req.params.id, 10);
        const deactivatedStyle = await deactivateStyleService(styleId);
        res.status(200).json(deactivatedStyle);
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating style', error });
    }
};