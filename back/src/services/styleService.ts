import { Style } from '../entities/Style';
import { AppDataSource } from '../config/data-source';
import { StyleDTO } from '../dto/Style';
import StyleRepository from '../repositories/StyleRepository';

export const createStyleService = async (styleData: StyleDTO) => {
  styleData.active = true;
  const newStyle = await StyleRepository.save(styleData);
  return newStyle;
};

export const getStylesService = async () => {
  const styles = await StyleRepository.findActiveStyles();
  return styles;
};

export const getStyleByIdService = async (id: number) => {
  const style = await StyleRepository.findOne({ where: { id } });
  return style;
};

export const updateStyleService = async (id: number, styleData: StyleDTO) => {
  await StyleRepository.update(id, styleData);
  const updatedStyle = await StyleRepository.findOne({ where: { id } });
  return updatedStyle;
};

export const deleteStyleService = async (id: number) => {
  await StyleRepository.delete(id);
};

export const deactivateStyleService = async (id: number) => {
  const updatedStyle = await StyleRepository.deactivateStyleById(id);
  return updatedStyle;
};
