import { Style } from '../entities/Style';
import { StyleModel } from '../config/data-source';
import { StyleDTO } from '../dto/Style';

export const createStyleService = async (styleData: StyleDTO) => {
   
    styleData.active = true;
    const newStyle = await StyleModel.save(styleData);
    return newStyle; 
}
export const getStylesService = async () => {
    const styles = await StyleModel.find();
    return styles;
};

export const getStyleByIdService = async (id: number) => {
    const style = await StyleModel.findOneBy({ id });
    return style;
};

export const updateStyleService = async (id: number, styleData: StyleDTO) => {
    await StyleModel.update(id, styleData);
    const updatedStyle = await StyleModel.findOneBy({ id });
    return updatedStyle;
};

export const deleteStyleService = async (id: number) => {
    await StyleModel.delete(id);
};

export const deactivateStyleService = async (id: number) => {
    const style = await StyleModel.findOneBy({ id });
    if (style) {
        style.active = false;
        const updatedStyle = await StyleModel.save(style);
        return updatedStyle;
    } else {
        throw new Error('Style not found');
    }
};
