import { Style } from '../entities/Style';
import { AppDataSource } from '../config/data-source';
import { StyleDTO } from '../dto/Style';
import StyleRepository from '../repositories/StyleRepository';

const styleRepository = AppDataSource.getCustomRepository(StyleRepository);

export const createStyleService = async (styleData: StyleDTO) => {
  styleData.active = true;
  const newStyle = await styleRepository.save(styleData);
  return newStyle;
};

export const getStylesService = async () => {
  const styles = await styleRepository.findActiveStyles();
  return styles;
};

export const getStyleByIdService = async (id: number) => {
  const style = await styleRepository.findOne({ where: { id } });
  return style;
};

export const updateStyleService = async (id: number, styleData: StyleDTO) => {
  await styleRepository.update(id, styleData);
  const updatedStyle = await styleRepository.findOne({ where: { id } });
  return updatedStyle;
};

export const deleteStyleService = async (id: number) => {
  await styleRepository.delete(id);
};

export const deactivateStyleService = async (id: number) => {
  const updatedStyle = await styleRepository.deactivateStyleById(id);
  return updatedStyle;
};
